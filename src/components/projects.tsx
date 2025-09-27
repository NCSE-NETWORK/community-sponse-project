"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, School, Code, Users, Plus } from "lucide-react";
import { config } from "@/lib/config";

const projects = [
  {
    name: "範例高中資訊研究社",
    type: "學校社團",
    description: "致力於推廣資訊教育，培養學生程式設計能力的高中社團",
    website: "#",
    icon: School,
    tag: "學校社團",
  },
  {
    name: "範例專案名稱",
    type: "專案",
    description: "創新的開源專案，為學生社群提供實用的技術解決方案",
    website: "#",
    icon: Code,
    tag: "專案",
  },
  {
    name: "範例技術社群",
    type: "技術社群",
    description: "聚集技術愛好者，共同學習與分享最新技術趨勢的社群",
    website: "#",
    icon: Users,
    tag: "技術社群",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            贊助專案
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們正在支持的學生社團、技術社群及非營利組織專案
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {project.tag}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <Link
                href={project.website}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                查看網站
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}

          {/* 申請贊助卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: projects.length * 0.1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-lg p-6 text-center hover:bg-primary/90 transition-colors"
          >
            <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
              <Plus className="w-6 h-6 text-primary" />
            </div>
            
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">
              申請贊助
            </h3>
            
            <Link
              href={config.applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              立即申請
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
