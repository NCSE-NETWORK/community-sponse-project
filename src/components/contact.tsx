"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, MessageSquare, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { config } from "@/lib/config";

const contactMethods = [
  {
    title: "線上申請表單",
    description: "填寫 Google 表單申請",
    icon: FileText,
    link: config.applicationFormUrl,
    linkText: "前往表單",
  },
  {
    title: "電子郵件",
    description: config.email,
    icon: Mail,
    link: `mailto:${config.email}`,
    linkText: "發送郵件",
  },
  {
    title: "Discord 社群",
    description: "加入我們的 Discord",
    icon: MessageSquare,
    link: config.discordInviteUrl,
    linkText: "加入社群",
  },
];

const faqs = [
  {
    question: "誰可以申請這些服務？",
    answer: "主要面向學生社團、技術社群、教育機構、非營利組織等，用於學習、研究或公益用途。",
  },
  {
    question: "服務是否完全免費？",
    answer: "是的，對於符合條件的學生社團、技術社群和教育用途組織，我們提供免費的基礎服務支援。",
  },
  {
    question: "申請需要多長時間？",
    answer: "填寫完整的 Google 表單後，我們會在 3 個工作天內回覆，並在審核通過後協助組織開通服務。申請期限至 2025/8/20。",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            聯絡我們
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            組織準備好申請服務了嗎？立即與我們聯繫，了解如何獲得免費的雲端服務支援
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 聯絡方式 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">與我們取得聯繫</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <Link
                        href={method.link}
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        {method.linkText} →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">常見問題</h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
                ))}
            </div>

            {/* 申請資訊 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary rounded-lg p-6 mt-8 text-primary-foreground"
            >
              <h4 className="text-lg font-semibold mb-4">申請資訊</h4>
              <div className="space-y-2 text-sm">
                <p><strong>申請期限：</strong>即日起至 {config.application.deadline}</p>
                <p><strong>審核時間：</strong>{config.application.reviewStartDate} 起開始審核</p>
                <p><strong>使用期限：</strong>{config.application.usagePeriod}</p>
                <p><strong>回覆時間：</strong>收到申請後 {config.application.responseTime}內</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
