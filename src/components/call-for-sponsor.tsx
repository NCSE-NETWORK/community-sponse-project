"use client";

import { motion } from "motion/react";
import { Heart, Users, Award, Mail } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";

export default function CallForSponsor() {
  return (
    <section id="call-for-sponsor" className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-info/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/10 rounded-full">
              <Heart className="w-8 h-8 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            歡迎贊助商加入
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我們正在尋找志同道合的企業夥伴，一起支持學生社團與技術社群的發展。
            透過您的贊助，我們能夠為更多組織提供優質的雲端服務與技術支援。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-white rounded-lg shadow-sm mb-4 border border-primary/10">
              <Users className="w-12 h-12 text-info mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                擴大影響力
              </h3>
              <p className="text-gray-600">
                接觸超過 3,900 名學生社群成員，提升品牌在技術社群的知名度
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-white rounded-lg shadow-sm mb-4 border border-success/20">
              <Award className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                社會責任
              </h3>
              <p className="text-gray-600">
                支持教育發展，培養下一代技術人才，展現企業社會責任
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-4 bg-white rounded-lg shadow-sm mb-4 border border-warning/20">
              <Mail className="w-12 h-12 text-warning mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                合作機會
              </h3>
              <p className="text-gray-600">
                與優秀的學生組織建立長期合作關係，發掘潛在人才
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              成為我們的贊助夥伴
            </h3>
            <p className="text-gray-600 mb-6">
              我們提供多種贊助方案，歡迎企業根據自身需求選擇合適的合作方式。
              讓我們一起為學生社群的發展貢獻力量！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`mailto:${config.email}?subject=贊助合作洽詢`}
                className="inline-flex items-center justify-center bg-success text-success-foreground px-6 py-3 rounded-lg font-semibold hover:bg-success/90 transition-colors shadow-md"
              >
                <Mail className="w-5 h-5 mr-2" />
                聯絡我們
              </Link>
              <Link
                href={config.discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-info text-info px-6 py-3 rounded-lg font-semibold hover:bg-info hover:text-info-foreground transition-colors"
              >
                加入社群討論
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
