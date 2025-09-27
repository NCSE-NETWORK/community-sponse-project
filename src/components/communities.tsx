"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { config } from "@/lib/config";

const communities = config.communities;

export default function Communities() {
  return (
    <section id="communities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            合作社群
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們與各地學生社團、技術社群及非營利組織緊密合作，共同推動技術教育發展
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">合作社群</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <Image
                      src={community.logo}
                      alt={`${community.name} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {community.name}
                    </h4>
                    <h5 className="text-lg font-medium text-gray-600 mb-4">
                      {community.fullName}
                    </h5>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <Link
                    href={`https://${community.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    {community.website}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
