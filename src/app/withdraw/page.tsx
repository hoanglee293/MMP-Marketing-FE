"use client"

import { useState, useEffect } from "react"
import { Check, Copy } from "lucide-react"
import { toast } from 'react-toastify'
import React from "react";
import { truncateString } from "@/utils/format";
import { useLang } from "@/lang/useLang";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table';

export default function WithdrawWallet({ walletInfor }: { walletInfor: any }) {
    const { t } = useLang();
    const [amount, setAmount] = useState<string>("0")
    const [recipientWallet, setRecipientWallet] = useState<string>("")
    const [isSending, setIsSending] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [recipientError, setRecipientError] = useState<string>("")
    const [copied, setCopied] = useState(false);

    // Kiểm tra điều kiện disable
    const isDisabled = React.useMemo(() => {
        const numAmount = Number.parseFloat(amount);
        const balance = parseFloat(walletInfor?.solana_balance || "0");

        const disabledConditions = {
            isSending,
            noWalletAddress: !walletInfor?.solana_address,
            amountTooSmall: numAmount < 0.001,
            amountTooLarge: numAmount > 1,
            exceedsBalance: numAmount > balance,
            hasError: !!error
        };

        console.log('Button disabled conditions:', {
            ...disabledConditions,
            recipientWalletEmpty: recipientWallet.length === 0,
            finalDisabled: isSending ||
                !walletInfor?.solana_address ||
                numAmount < 0.001 ||
                numAmount > 1 ||
                numAmount > balance ||
                !!error ||
                recipientWallet.length === 0
        });

        return {
            send: isSending ||
                !walletInfor?.solana_address ||
                numAmount < 0.001 ||
                numAmount > 1 ||
                numAmount > balance ||
                !!error,
            input: isSending,
            copy: isSending || !walletInfor?.solana_address
        };
    }, [amount, walletInfor, isSending, error, recipientWallet]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isDisabled.input) return; // Không cho phép thay đổi khi đang sending

        const value = e.target.value;
        // Chỉ cho phép nhập số và dấu chấm
        if (/^\d*\.?\d*$/.test(value) || value === '') {
            // Kiểm tra nếu giá trị nhập vào lớn hơn 1
            const numValue = parseFloat(value);
            if (numValue > 1) {
                setAmount("1");
                setError("Maximum withdrawal amount is 1 SOL");
                return;
            }

            setAmount(value);

            // Validate amount against balance
            const balance = parseFloat(walletInfor?.solana_balance || "0");

            //   if (numValue > balance) {
            //     setError(`${t('universal_account.amount_cannot_exceed_balance', { balance })}`);
            //   } else if (numValue < 0.001 && value !== "") {
            //     setError(`${t('universal_account.minimum_withdrawal_amount', { amount: 0.001 })}`);
            //   } else if (numValue > 1) {
            //     setError(`${t('universal_account.maximum_withdrawal_amount', { amount: 1 })}`);
            //   } else {
            //     setError("");
            //   }
        }
    };

    console.log("walletInfor", walletInfor)

    const handleCopyAddress = () => {
        if (isDisabled.copy) return; // Không cho phép copy khi đang sending hoặc không có địa chỉ
        navigator.clipboard.writeText(walletInfor.solana_address);
        setCopied(true);
        toast.success('Wallet address copied to clipboard!');
        // Reset copied state after 2 seconds
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSend = async () => {
        console.log("render")
    };

    return (
        <div className="flex flex-col gap-6 justify-center h-screen items-center">
            {/* Amount Input */}
            <div className={`p-[1px] rounded-xl bg-gradient-to-t from-theme-purple-100 to-theme-gradient-linear-end w-full max-w-[600px] group hover:from-theme-purple-200 hover:to-theme-gradient-linear-end transition-all duration-300 ${isDisabled.input ? 'opacity-50 cursor-not-allowed' : ''
                }`}>
                <div className="bg-black/60 border border-theme-gradient-linear-start p-4 sm:p-6 rounded-xl group-hover:border-theme-purple-200 transition-all duration-300 ">
                    <div className="w-full flex flex-col gap-4">
                        <div className="text-center mb-1 text-neutral">
                            <p className="text-sm dark:text-gray-400 text-black group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                                보낼 금액 입력
                            </p>
                        </div>
                        <div className="text-center mb-2 relative">
                            <input
                                type="text"
                                inputMode="decimal"
                                value={amount}
                                onChange={handleAmountChange}
                                disabled={isDisabled.input}
                                className={`bg-transparent border-none text-center text-3xl max-w-[200px] font-bold w-full focus:outline-none text-neutral transition-colors duration-300 ${error ? 'text-red-500' : 'group-hover:text-white'
                                    } ${isDisabled.input ? 'cursor-not-allowed opacity-50' : ''}`}
                            />
                            <span className={`absolute inset-y-0 right-0 flex items-center pr-3 text-neutral transition-colors duration-300 ${error ? 'text-red-500' : 'text-gray-500 group-hover:text-neutral'
                                } ${isDisabled.input ? 'opacity-50' : ''}`}>SOL</span>
                        </div>
                        <div className="text-center text-xs text-neutral mb-1 group-hover:text-gray-400 transition-colors duration-300">
                            전송 가능한 잔액: 0 SOL
                        </div>
                        {error && (
                            <div className="text-center text-xs text-red-500 mt-1">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Recipient Address */}
            <div className="w-full max-w-[580px] ">
                <label htmlFor="name" className={"block md:text-sm lg:text-base font-normal dark:text-neutral-100 text-black mb-1 text-xs"}>
                    받는 지갑 주소 <span className="text-theme-red-200">*</span>
                </label>
                <div className={`p-[1px] rounded-xl bg-gradient-to-t from-theme-purple-100 to-theme-gradient-linear-end w-full group hover:from-theme-purple-200 hover:to-theme-gradient-linear-end transition-all duration-300`}>
                    <div className="bg-black/60 dark:bg-theme-black-200 border-none  rounded-xl group-hover:border-theme-purple-200 transition-all duration-300">
                        <input
                            type="text"
                            value={recipientWallet}
                            onChange={(e) => setRecipientWallet(e.target.value)}
                            onPaste={(e) => {
                                const pastedText = e.clipboardData.getData('text');
                                setRecipientWallet(pastedText);
                            }}
                            className="w-full bg-transparent h-10 border-none pt-[1px] placeholder:text-neutral placeholder:text-xs rounded-xl pl-3 text-sm font-normal focus:outline-none transition-colors duration-300"
                            placeholder={"받는 지갑 주소 입력..."}
                        />
                    </div>
                    {recipientError && (
                        <div className="text-xs text-red-500 mt-1 pl-3">
                            {recipientError}
                        </div>
                    )}
                </div>
            </div>


            {/* Send Button */}
            <button
                onClick={handleSend}
                className={`border-none inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  text-neutral hover:bg-primary/90 h-10 px-4 min-w-[150px] bg-gradient-violet-blue cursor-pointer rounded-full  font-bold py-2 lg:py-3 text-sm lg:text-base kati-font transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 active:scale-95`}
            >
                {!isSending ? (
                    <span className="flex items-center gap-2">
                        {/* <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> */}
                        전송
                    </span>
                ) : (
                    t('universal_account.send')
                )}
            </button>


            <div className="rounded-xl mt-10">
                <Table className="w-full min-w-[650px] bg-black/60 rounded-xl">
                    <TableHeader className="">
                        <TableRow className=" rounded-xl border-b border-white border-solid">
                            <TableHead className="py-2 px-6 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">시간</TableHead>
                            <TableHead className="py-2 px-4 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">유형</TableHead>
                            <TableHead className="py-2 px-3 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">상태</TableHead>
                            <TableHead className="py-2 px-6 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0 text-right">금액</TableHead>
                            <TableHead className="py-2 px-6 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">보낸 주소</TableHead>
                            <TableHead className="py-2 px-6 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">받는 주소</TableHead>
                            <TableHead className="py-2 px-6 text-xs font-medium dark:text-gray-400 text-black border-b border-solid border-white border-t-0 border-x-0">거래 ID</TableHead>
                        </TableRow>
                    </TableHeader>
                    
                    <TableBody className="">
                        <TableRow>
                                <TableCell colSpan={7} className="py-8 text-center  text-gray-400">
                                   출금 거래 내역이 없습니다
                                </TableCell>
                            </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
