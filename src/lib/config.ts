// NCSE Network 網站配置
export const config = {
  // 申請表單連結 - 需要替換為真實的 Google Forms 連結
  applicationFormUrl: "https://forms.gle/your-google-form-id",
  
  // Discord 社群連結 - 需要替換為真實的 Discord 邀請連結
  discordInviteUrl: "https://discord.gg/your-discord-invite",
  
  // 聯絡資訊
  email: "sponsor@ncse.tw",
  
  // 申請相關資訊
  application: {
    deadline: "2025/8/20",
    reviewStartDate: "8/10",
    usagePeriod: "114學年度上學期末（寒假前）",
    responseTime: "3個工作天",
  },
  
  // 贊助商資訊
  sponsors: {
    diamond: [
      {
        name: "NCSE Network LTD",
        description: "提供雲端基礎設施與技術支援",
        website: "ncse.tw",
        logo: "/logo/logo_ncse_network.svg",
      },
    ],
    gold: [
      {
        name: "簡單資訊有限公司",
        description: "提供網路傳輸服務與技術支援",
        website: "hello.simple.taipei",
        logo: "/logo/logo_wing.svg",
      },
      {
        name: "學生網路交換中心 STUIX",
        description: "提供技術社群支援與資源",
        website: "stuix.io",
        logo: "/logo/logo_n.svg",
      },
    ],
  },
  
  // 合作社群資訊
  communities: [
    {
      name: "SCINT",
      fullName: "北臺灣學生資訊社群",
      description: "連結北臺灣地區的學生資訊社團，促進交流與合作的重要平台",
      website: "scint.org",
      logo: "/logo/logo_ncse_network_wing.svg",
    },
    {
      name: "SCAICT",
      fullName: "中部高中職電資社團聯合會議",
      description: "串連中部地區高中職電資相關社團，推動技術教育發展",
      website: "scaict.org",
      logo: "/logo/logo_ncse_network_banner.svg",
    },
  ],
} as const;

