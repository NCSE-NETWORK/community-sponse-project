import Image from "next/image";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo 和描述 */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo/logo_ncse_network.svg"
                alt="NCSE Network Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
              致力於為學生社團、技術社群及非營利組織提供免費的雲端基礎設施服務，推動技術教育發展。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  服務項目
                </Link>
              </li>
              <li>
                <Link href="#sponsors" className="text-gray-300 hover:text-white transition-colors">
                  贊助商
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  贊助專案
                </Link>
              </li>
              <li>
                <Link href="#communities" className="text-gray-300 hover:text-white transition-colors">
                  合作社群
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`mailto:${config.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {config.email}
                </Link>
              </li>
              <li>
                <Link
                  href={config.discordInviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Discord 社群
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NCSE Network LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
