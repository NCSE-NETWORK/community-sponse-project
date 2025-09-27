"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { config } from "@/lib/config";

const diamondSponsors = config.sponsors.diamond;
const goldSponsors = config.sponsors.gold;

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            感謝贊助商
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            感謝以下贊助商提供各類資源，使我們得以提供給社群免費的雲端服務
          </p>
        </motion.div>

        {/* 鑽石贊助商 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">鑽石贊助商</h3>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 max-w-sm">
              {diamondSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl transition-shadow w-full"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  <Link
                    href={`https://${sponsor.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    {sponsor.website}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 黃金贊助商 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">黃金贊助商</h3>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {goldSponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md border border-yellow-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {sponsor.name}
                  </h4>
                  <p className="text-gray-600 mb-4">{sponsor.description}</p>
                  <Link
                    href={`https://${sponsor.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    {sponsor.website}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
