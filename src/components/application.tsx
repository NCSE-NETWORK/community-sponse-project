"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FileText, Search, CheckCircle } from "lucide-react";
import { config } from "@/lib/config";

const steps = [
  {
    title: "提交申請",
    description: "填寫線上 Google 表單，說明組織資訊、需求和使用目的",
    icon: FileText,
  },
  {
    title: "審核評估",
    description: "我們將評估組織申請，並在 3 ~ 7個工作天內回覆",
    icon: Search,
  },
  {
    title: "開通服務",
    description: "審核通過後，我們將協助組織開通相關服務",
    icon: CheckCircle,
  },
];

export default function Application() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            申請流程
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            簡單三步驟，輕鬆獲得雲端服務支援
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* 連接線 */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 z-0">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-200 rotate-45"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={config.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            立即申請
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
