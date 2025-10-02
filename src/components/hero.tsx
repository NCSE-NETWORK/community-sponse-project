import { Boxes } from "@/components/ui/background-boxes";
import { config } from "@/lib/config";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg" role="banner">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className="relative z-20 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
          賦能學生社群
          <br />
          共創技術未來
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
          免費雲端服務 | VPS 主機 | 技術支援 | 學生社團專屬
        </h2>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
          NCSE Network
          致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括
          VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#services"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            探索服務
          </Link>
          <Link
            href={config.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-success text-success px-8 py-3 rounded-lg font-semibold hover:bg-success hover:text-success-foreground transition-colors shadow-md hover:shadow-lg"
          >
            立即申請
          </Link>
        </div>
      </div>
    </section>
  );
}
