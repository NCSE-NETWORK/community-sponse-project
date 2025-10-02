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
                alt="NCSE Network Logo - 賦能學生社群，共創技術未來"
                width={40}
                height={40}
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 max-w-md">
            專業雲端服務供應商，提供企業級 VPS 主機、機房代管及網路基礎設施解決方案。99% SLA 保證，24/7 技術支援。同時，也關注並提供社群在雲端技術方面的協助。
            </p>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://ncse.tw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  NCSE Network
                </a>
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
