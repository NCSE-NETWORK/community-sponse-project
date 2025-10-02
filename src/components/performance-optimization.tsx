export default function PerformanceOptimization() {
  return (
    <>
      {/* 預載入關鍵資源 */}
      <link rel="preload" href="/logo/logo_ncse_network.svg" as="image" type="image/svg+xml" />
      <link rel="preload" href="/og-image.png" as="image" type="image/png" />
      
      {/* DNS 預解析 */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* 關鍵字體預載入 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* 資源提示 */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* 視窗配置 */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* 效能優化 */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* 安全標頭 - 在 static export 中通過 meta 標籤實現 */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </>
  );
}
