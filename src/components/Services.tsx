import React from "react";
import { Truck, Container, Shield, Clock, Headset } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Container,
    title: "Konteyner Taşımacılığı",
    description: "Yurt içi ve yurt dışı konteyner taşımacılığında uzman hizmet",
  },
  {
    icon: Headset,
    title: "7/24 Canlı Destek",
    description: " 7/24 canlı ve hızlı destek ekibimizle kesintisiz hizmet",
  },
  {
    icon: Shield,
    title: "Güvenli Taşıma",
    description: "GPS takip sistemli, sigortalı ve güvenli taşımacılık",
  },
  {
    icon: Clock,
    title: "Zamanında Teslimat",
    description: "Dakik ve güvenilir teslimat garantisi",
  },
];

export default function Services() {
  return (
    <section id="hizmetlerimiz" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Hizmetlerimiz
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
