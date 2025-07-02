/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    webpack(config, { isServer }) {
      config.module?.rules?.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: ['@svgr/webpack'],
        type: 'asset/resource',
      });
      return config;
    },
    images: {
      domains: [
          'coin-images.coingecko.com',
      ],
      unoptimized: false,
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60 * 60 * 24 * 30,
    },
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['@tanstack/react-query', 'react-toastify'],
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    async headers() {
      return [
        {
          source: '/:all*(svg|jpg|jpeg|png|webp|avif)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
export default nextConfig;
  
