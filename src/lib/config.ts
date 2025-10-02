// NCSE Network 網站配置
export const config = {
  // 申請表單連結 - 需要替換為真實的 Google Forms 連結
  applicationFormUrl: "https://s.ncse.tw/cp-plan",
  
  // Discord 社群連結 - 需要替換為真實的 Discord 邀請連結
  discordInviteUrl: "https://discord.gg/DDEdjvXFps",
  
  // 聯絡資訊
  email: "sponsor@ncse.tw",
  
  // 申請相關資訊
  application: {
    deadline: "表單關閉",
    reviewStartDate: "8/10",
    usagePeriod: "114學年度上學期末（寒假前）",
    responseTime: "3~7 個工作天",
  },
  
  // 統計資料
  stats: [
    { label: "社群成員", value: 3900, suffix: "" },
    { label: "年度活動", value: 4, suffix: "" },
    { label: "合作社團", value: 19, suffix: "" },
    { label: "贊助專案", value: 5, suffix: "" },
  ],
  
  // 贊助商資訊
  sponsors: {
    diamond: [
      {
        name: "NCSE Network LTD",
        description: "提供雲端基礎設施與技術支援",
        website: "ncse.tw",
        logo: "/logo/logo_ncse_network_banner.svg",
      },
    ],
    gold: [
      {
        name: "簡單資訊有限公司",
        description: "提供網路傳輸服務與技術支援",
        website: "hello.simple.taipei",
        logo: "/logo/simple_info_logo.jpg",
      },
      {
        name: "學生網路交換中心 STUIX",
        description: "提供技術社群支援與資源",
        website: "stuix.io",
        logo: "https://raw.githubusercontent.com/STU-IX/branding/main/Logo/Logo.svg",
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
      logo: "/logo/scint_logo.png",
    },
    {
      name: "SCAICT",
      fullName: "中部高中職電資社團聯合會議",
      description: "串連中部地區高中職電資相關社團，推動技術教育發展",
      website: "scaict.org",
      logo: "/logo/scaict_logo.svg",
    },
  ],
  
  // 贊助專案資訊
  projects: [
    // 學校社團
    {
      name: "陽明高中資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "臺南一中資訊社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "桃園市立大園國際高級中等學校程式設計社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "國立臺南高級商業職業學校資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "國立新竹科學園區實驗高級中等學校資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "建國中學電子計算機研習社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "北一女中資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "建國中學資訊研習社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "成淵高中資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "臺北市立內湖高級中學資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "內壢高中資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "竹北高中軟體研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "台中市市立豐原高級中學資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "松山工農黑客IT社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "國立海洋大學網路發展學會",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "百齡高中科技研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "明倫高中程式設計社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "新莊高中電研社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "永慶高中資訊研究社",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    {
      name: "桃園高中資訊安全讀書會",
      type: "學校社團",
      website: "#",
      icon: "School",
      tag: "學校社團",
    },
    
    // 技術社群
    {
      name: "中部高中職電資社團聯合會議",
      type: "技術社群",
      description: "中部地區高中職電資社團的聯合組織，促進跨校交流合作",
      website: "https://scaict.org",
      icon: "Users",
      tag: "技術社群",
    },
    {
      name: "北臺灣學生資訊社群",
      type: "技術社群",
      description: "北臺灣地區學生資訊社群的聯合組織，推動技術教育發展",
      website: "https://scint.org",
      icon: "Users",
      tag: "技術社群",
    },
    
    // 公開專案
    {
      name: "emfont",
      type: "公開專案",
      description: "開源字體專案，提供優質的中文字體服務。",
      website: "https://font.emtech.cc/",
      icon: "Code",
      tag: "公開專案",
    },
    {
      name: "eduroam 臺灣第三方資料庫",
      type: "公開專案",
      description: "eduroam 臺灣第三方資料庫，讓你更方便連上 eduroam。",
      website: "https://edur.isli.me/",
      icon: "Code",
      tag: "公開專案",
    },
    {
      name: "APCS 模擬測驗團隊",
      type: "公開專案",
      description: "APCS 程式設計能力檢定模擬測驗團隊，協助學生準備考試",
      website: "https://apcs-simulation.com/",
      icon: "Code",
      tag: "公開專案",
    },
    {
      name: "RiceCall",
      type: "公開專案",
      description: "RiceCall 是一個簡單的語音聊天室，讓你更方便與朋友聊天。",
      website: "https://ricecall.com.tw/",
      icon: "Code",
      tag: "公開專案",
    },
  ],
} as const;

