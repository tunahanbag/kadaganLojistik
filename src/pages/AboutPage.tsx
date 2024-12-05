import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Users, Target } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { number: "100+", label: "Tır Filosu" },
    { number: "30+", label: "Yıllık Deneyim" },
    { number: "1000+", label: "Mutlu Müşteri" },
    { number: "150+", label: "Uzman Personel" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Güvenilirlik",
      description:
        "Müşterilerimizin güvenini en değerli varlığımız olarak görüyoruz.",
    },
    {
      icon: Award,
      title: "Kalite",
      description:
        "Her operasyonda en yüksek kalite standartlarını hedefliyoruz.",
    },
    {
      icon: Users,
      title: "Müşteri Odaklılık",
      description: "Müşterilerimizin ihtiyaçlarını önceliklendiriyoruz.",
    },
    {
      icon: Target,
      title: "Sürdürülebilirlik",
      description: "Çevreye duyarlı ve sürdürülebilir çözümler üretiyoruz.",
    },
  ];

  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hakkımızda
          </motion.h1>
          <motion.p
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            1988'den beri Türkiye'nin lider lojistik çözüm ortağı
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
            <p className="text-gray-600 mb-6">
              Türkiye'nin ve bölgenin en güvenilir ve tercih edilen lojistik
              şirketi olmak. Modern teknolojiler ve sürdürülebilir çözümlerle
              sektöre öncülük etmek.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
            <p className="text-gray-600 mb-6">
              Müşterilerimize en kaliteli ve güvenilir lojistik hizmetini
              sunmak. Çevreye duyarlı, teknoloji odaklı ve yenilikçi çözümlerle
              sektörde fark yaratmak.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <value.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
