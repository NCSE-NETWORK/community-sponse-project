import { Boxes } from "@/components/ui/background-boxes";

export default function Hero() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-white flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
          賦能學生社群
          <br />
          共創技術未來
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          NCSE Network
          致力於為學生社團、技術社群以及非營利組織提供免費的雲端基礎設施服務，包括
          VPS、網頁主機、技術支援和 Public IP tunnel，支持組織運作與發展。
        </p>
      </div>
    </div>
  );
}
