/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Các cấu hình khác của bạn có thể nằm ở đây
    images: {
      unoptimized: true,
    },
    // React Compiler is still experimental, disabling for now
    // experimental: {
    //   reactCompiler: {
    //     compilationMode: 'annotation',
    //   },
    // },
  };
  
export default nextConfig;
  
