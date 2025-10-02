export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NCSE Network",
    "alternateName": "NCSE Network LTD",
    "description": "NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括 VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。",
    "url": "https://sponsor-dev.pages.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sponsor-dev.pages.dev/logo/logo_ncse_network.svg",
      "width": 200,
      "height": 200
    },
    "image": "https://sponsor-dev.pages.dev/og-image.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "sponsor@ncse.tw",
        "contactType": "customer service",
        "availableLanguage": ["Chinese", "English"]
      }
    ],
    "sameAs": [
      "https://ncse.tw",
      "https://discord.gg/DDEdjvXFps"
    ],
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Taiwan"
    },
    "serviceType": [
      "雲端基礎設施服務",
      "VPS 虛擬主機",
      "網頁主機",
      "技術支援",
      "Public IP tunnel",
      "免費雲端服務"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "學生社團、技術社群、非營利組織"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "免費雲端服務",
        "description": "為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務",
        "price": "0",
        "priceCurrency": "TWD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TW"
    },
    "knowsAbout": [
      "雲端運算",
      "虛擬化技術",
      "網路基礎設施",
      "學生社群支援",
      "技術教育"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "NCSE Network - 賦能學生社群，共創技術未來",
    "url": "https://sponsor-dev.pages.dev",
    "description": "NCSE Network 致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務",
    "publisher": {
      "@type": "Organization",
      "name": "NCSE Network"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://sponsor-dev.pages.dev/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NCSE Network 雲端服務",
    "description": "為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務",
    "provider": {
      "@type": "Organization",
      "name": "NCSE Network"
    },
    "serviceType": "雲端基礎設施服務",
    "areaServed": {
      "@type": "Country",
      "name": "Taiwan"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TWD"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NCSE Network 服務目錄",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VPS 虛擬主機",
            "description": "提供高效能的虛擬私人伺服器，支援組織各種應用程式部署"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "網頁主機",
            "description": "提供穩定的網頁主機服務，支援各種網站架設需求"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "技術支援",
            "description": "提供專業的技術支援服務，協助組織解決技術問題"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Public IP tunnel",
            "description": "提供 Public IP tunnel 服務，支援網路連線需求"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "首頁",
        "item": "https://sponsor-dev.pages.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "服務項目",
        "item": "https://sponsor-dev.pages.dev/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "贊助商",
        "item": "https://sponsor-dev.pages.dev/#sponsors"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "贊助專案",
        "item": "https://sponsor-dev.pages.dev/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "合作社群",
        "item": "https://sponsor-dev.pages.dev/#communities"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "聯絡我們",
        "item": "https://sponsor-dev.pages.dev/#contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "誰可以申請 NCSE Network 的服務？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "學生社團、技術社群以及非營利組織都可以申請我們的免費雲端服務。"
        }
      },
      {
        "@type": "Question",
        "name": "NCSE Network 提供哪些服務？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "我們提供 VPS 虛擬主機、網頁主機、技術支援和 Public IP tunnel 等雲端基礎設施服務。"
        }
      },
      {
        "@type": "Question",
        "name": "服務是否完全免費？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "是的，我們為符合條件的組織提供完全免費的雲端服務。"
        }
      },
      {
        "@type": "Question",
        "name": "如何申請服務？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "請填寫我們的線上申請表單，我們會在 3-7 個工作天內回覆。"
        }
      }
    ]
  };

  const allStructuredData = [
    organizationData,
    websiteData,
    serviceData,
    breadcrumbData,
    faqData
  ];

  return (
    <>
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
