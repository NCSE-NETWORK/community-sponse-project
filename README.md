# NCSE Network 社群贊助項目網站

## 專案簡介

本網站用於展示 NCSE Network 社群的贊助項目、合作社群及聯絡資訊，協助推廣社群資源與服務。

## 主要功能

- **Hero 區塊**：主要價值主張和 CTA 按鈕
- **統計數據**：社群成員、年度活動等動態展示
- **服務項目**：VPS、網頁主機、技術支援、Public IP tunnel
- **贊助商展示**：鑽石和黃金贊助商介紹
- **贊助專案**：目前支援的專案展示
- **合作社群**：SCINT、SCAICT 等合作夥伴
- **申請流程**：三步驟申請指南
- **聯絡我們**：多種聯絡方式和 FAQ
- **響應式設計**：支援各種裝置

## 技術棧

- **框架**：Next.js 15 with App Router
- **語言**：TypeScript
- **樣式**：Tailwind CSS 4.0
- **UI 組件**：Shadcn/ui
- **動畫**：Motion (Framer Motion)
- **圖示**：Lucide React
- **字體**：Geist Sans & Geist Mono

## 如何啟動

1. 安裝依賴：
   ```bash
   npm install
   # 或
   pnpm install
   ```

2. 啟動開發服務器：
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

3. 打開瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 配置更新

### 重要：更新外部連結

在正式使用前，請更新 `src/lib/config.ts` 中的以下配置：

```typescript
export const config = {
  // 🔥 需要更新的重要連結
  applicationFormUrl: "https://forms.gle/your-actual-google-form-id", // Google Forms 申請表單
  discordInviteUrl: "https://discord.gg/your-actual-discord-invite",   // Discord 邀請連結
  
  // 其他配置...
}
```

### 需要更新的項目：

1. **Google Forms 申請表單**
   - 替換 `applicationFormUrl` 為真實的 Google Forms 連結
   - 此連結用於所有「立即申請」按鈕

2. **Discord 社群邀請**
   - 替換 `discordInviteUrl` 為真實的 Discord 邀請連結
   - 用於聯絡我們區塊和頁尾

3. **贊助商 Logo**
   - 目前使用 NCSE 現有 logo 作為占位符
   - 請將真實的贊助商 logo 放入 `public/logo/` 資料夾
   - 更新 `config.ts` 中的 logo 路徑

4. **合作社群 Logo**
   - 同樣需要替換為真實的社群 logo
   - 更新相應的 logo 路徑

## 專案結構

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 主要佈局
│   ├── page.tsx        # 首頁
│   └── globals.css     # 全域樣式
├── components/         # React 組件
│   ├── hero.tsx        # Hero 區塊
│   ├── services.tsx    # 服務項目
│   ├── sponsors.tsx    # 贊助商
│   ├── projects.tsx    # 贊助專案
│   ├── communities.tsx # 合作社群
│   ├── application.tsx # 申請流程
│   ├── contact.tsx     # 聯絡我們
│   ├── footer.tsx      # 頁尾
│   ├── navbar.tsx      # 導航列
│   ├── stats.tsx       # 統計數據
│   └── ui/             # UI 組件
├── lib/
│   ├── config.ts       # 網站配置 🔥 重要
│   └── utils.ts        # 工具函數
public/
└── logo/               # Logo 檔案
```

## 建置部署

1. 建置專案：
   ```bash
   npm run build
   ```

2. 啟動正式版本：
   ```bash
   npm start
   ```

## 聯絡方式

如有任何問題，請來信：sponsor@ncse.tw

---

© 2025 NCSE Network LTD. All rights reserved.
