export default function LocalSEO() {
  return (
    <>
      {/* 本地 SEO 結構化資料 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NCSE Network",
            "description": "為學生社團、技術社群以及非營利組織提供免費雲端服務的專業組織",
            "url": "https://sponsor-dev.pages.dev",
            "telephone": "+886-2-1234-5678",
            "email": "sponsor@ncse.tw",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TW",
              "addressRegion": "Taiwan",
              "addressLocality": "Taipei"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.0330",
              "longitude": "121.5654"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "免費",
            "paymentAccepted": "免費服務",
            "currenciesAccepted": "TWD",
            "areaServed": {
              "@type": "Country",
              "name": "Taiwan"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "25.0330",
                "longitude": "121.5654"
              },
              "geoRadius": "500000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "NCSE Network 免費雲端服務",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VPS 虛擬主機服務",
                    "description": "為學生社團提供免費的虛擬私人伺服器"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "網頁主機服務",
                    "description": "為技術社群提供免費的網頁託管服務"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "技術支援服務",
                    "description": "為非營利組織提供免費的技術諮詢服務"
                  }
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
