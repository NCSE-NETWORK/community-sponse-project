"use client";

import { motion } from "motion/react";
import { Server, Globe, Wifi } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "VPS 虛擬主機",
    description: "提供高效能的虛擬私人伺服器，支援組織各種應用程式部署，讓社團專案穩定運行。",
  },
  {
    icon: Globe,
    title: "網頁主機",
    description: "可靠的網頁託管服務，支援靜態和動態網站，讓組織官網和專案平台輕鬆上線。",
  },
  {
    icon: Wifi,
    title: "Public IP Tunnel",
    description: "穩定的公網 IP 通道服務，突破網路限制，讓組織的應用和服務可以被全世界存取。",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            我們的服務
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            為學生社團、技術社群及非營利組織提供全面的雲端基礎設施支援，從虛擬主機到 IP Tunnel，一站式滿足組織需求。我們提供免費的 VPS 主機、網頁託管、技術支援服務，讓學生社團專注於創新與發展。
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 group"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

