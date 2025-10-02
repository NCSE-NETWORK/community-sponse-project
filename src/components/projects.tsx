"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ExternalLink, School, Code, Users, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { config } from "@/lib/config";
import { useState } from "react";

// 圖示映射
const iconMap = {
  School,
  Code,
  Users,
};

const projects = config.projects;
const itemsPerPage = 6; // 每頁顯示 6 個專案

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

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
          <p className="text-sm text-gray-500 mt-2">
            共 {projects.length} 個專案 • 第 {currentPage + 1} 頁，共 {totalPages} 頁
          </p>
        </motion.div>

        {/* 專案網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentProjects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Code;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.tag === '學校社團' ? 'bg-info/10 text-info' :
                    project.tag === '技術社群' ? 'bg-success/10 text-success' :
                    project.tag === '公開專案' ? 'bg-warning/10 text-warning' :
                    'bg-accent/10 text-accent'
                  }`}>
                    {project.tag}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.name}
                </h3>
                
                {'description' in project && project.description && (
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                )}
                
                {project.website !== "#" && (
                  <Link
                    href={project.website}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    查看網站
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 分頁控制 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mb-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                    i === currentPage
                      ? "bg-primary text-primary-foreground"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* 申請贊助卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary rounded-lg p-8 max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-xl font-semibold text-primary-foreground mb-4">
              申請贊助
            </h3>
            
            <p className="text-primary-foreground/80 text-sm mb-6">
              成為我們的下一個贊助專案
            </p>
            
            <Link
              href={config.applicationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              立即申請
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
