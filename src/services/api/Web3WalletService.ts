import axiosClient from "@/utils/axiosClient";

export class Web3WalletService {
  // Check if Phantom wallet is installed
  static isPhantomInstalled(): boolean {
    if (typeof window !== 'undefined') {
      const { solana } = window as any;
      return solana && solana.isPhantom;
    }
    return false;
  }

  // Get connected public key
  static getPublicKey(): string | null {
    if (typeof window !== 'undefined') {
      const { solana } = window as any;
      return solana?.publicKey?.toString() || null;
    }
    return null;
  }

  // Initialize Web3 swap and get unsigned transaction
  static async initWeb3Swap(publicKey: string, inputToken: string, inputAmount: number) {
    try {
      const response = await axiosClient.post('/swap-orders/web3-wallet', {
        publicKey: publicKey,
        inputToken: inputToken,
        inputAmount: inputAmount
      });
      
      return response.data;
    } catch (error) {
      console.error('Error initializing Web3 swap:', error);
      throw error;
    }
  }

  // Sign transaction using Phantom wallet
  static async signTransaction(serializedTx: string): Promise<string> {
    try {
      const { solana } = window as any;
      
      // Deserialize transaction từ base64
      const { Transaction, Connection } = await import('@solana/web3.js');
      const transaction = Transaction.from(
        Buffer.from(serializedTx, 'base64')
      );
      console.log("run 2", transaction);
      // Ký transaction
      const signedTx = await solana.signTransaction(transaction);
      
      // Try multiple reliable RPC endpoints to avoid 403 errors
      const rpcEndpoints = [
        'https://solana-api.projectserum.com',
        'https://rpc.ankr.com/solana',
        'https://solana.public-rpc.com',
        'https://api.mainnet-beta.solana.com'
      ];
      
      let lastError;
      for (const endpoint of rpcEndpoints) {
        try {
          const connection = new Connection(endpoint, {
            commitment: 'confirmed',
            confirmTransactionInitialTimeout: 60000
          });
          
          const signature = await connection.sendTransaction(signedTx, [], {
            skipPreflight: false,
            preflightCommitment: 'confirmed'
          });
          
          return signature;
        } catch (error) {
          console.warn(`Failed with endpoint ${endpoint}:`, error);
          lastError = error;
          continue;
        }
      }
      
      throw lastError || new Error('All RPC endpoints failed');
    } catch (error) {
      console.error('Error signing transaction:', error);
      throw error;
    }
  }

  // Complete Web3 swap after transaction is signed
  static async completeWeb3Swap(orderId: number, signature: string) {
    try {
      const response = await axiosClient.post('/swap-orders/web3-wallet/complete', {
        orderId: orderId,
        signature: signature
      });
      
      return response.data;
    } catch (error) {
      console.error('Error completing Web3 swap:', error);
      throw error;
    }
  }

  // Connect to Phantom wallet
  static async connectWallet(): Promise<string> {
    try {
      const { solana } = window as any;
      
      if (!solana || !solana.isPhantom) {
        throw new Error('Phantom wallet is not installed');
      }

      // Connect to wallet
      const response = await solana.connect();
      return response.publicKey.toString();
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      throw error;
    }
  }

  // Disconnect from Phantom wallet
  static async disconnectWallet(): Promise<void> {
    try {
      const { solana } = window as any;
      
      if (solana && solana.disconnect) {
        await solana.disconnect();
      }
    } catch (error) {
      console.error('Error disconnecting from Phantom wallet:', error);
      throw error;
    }
  }
} 

export const postSwapOrder = async ({ publicKey, inputToken, inputAmount }: { publicKey: string, inputToken: string, inputAmount: number }) => {
    try {
        const temp = await axiosClient.post(`/swap-orders/web3-wallet`, { publicKey, inputToken, inputAmount });
        return temp.data;
    } catch (e) {
        throw e;
    }
}