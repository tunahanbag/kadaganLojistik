import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import shipImage from "/shipImage.png";
import dockImage from "/dockImage.png";
import dockImage2 from "/dockImage2.png";

export default function Hero() {
  return (
    <div className="relative h-screen md:h-[600px] pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${shipImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Türkiye'nin Güçlü Konteyner Taşımacılık Filosu
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Modern ve geniş tır filomuzla konteyner taşımacılığında Türkiye'nin
            lider firmalarından biriyiz.
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg flex items-center space-x-2 transform transition hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>Hemen Teklif Alın</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
