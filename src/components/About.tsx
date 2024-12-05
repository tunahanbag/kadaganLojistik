import React from "react";
import { Shield, Truck, Award } from "lucide-react";
import { motion } from "framer-motion";
import tirImage from "/tir2.jpeg";

export default function About() {
  return (
    <section id="hakkimizda" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Hakkımızda</h2>
            <p className="text-gray-600 mb-6">
              Kadağan Lojistik olarak, konteyner taşımacılığında Türkiye'nin
              önde gelen firmalarından biriyiz. 100'den fazla modern tır filomuz
              ve deneyimli sürücü kadromuzla, müşterilerimize güvenilir ve
              kesintisiz hizmet sunuyoruz. GPS takip sistemlerimiz ve özel
              sigorta çözümlerimizle yükleriniz daima güvende.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, text: "100+ Tır" },
                { icon: Shield, text: "Tam Güvenlik" },
                { icon: Award, text: "30+ Yıl Deneyim" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={tirImage}
              alt="Konteyner Taşımacılık Filosu"
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
