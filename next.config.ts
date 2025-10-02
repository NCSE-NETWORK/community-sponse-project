import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // 移除 headers 配置，因為 static export 不支援
  // 這些安全標頭需要在部署時在伺服器層面配置
};

export default nextConfig;
