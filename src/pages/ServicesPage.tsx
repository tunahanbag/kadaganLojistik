import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Container, ShieldCheck, Clock, Globe, FileCheck } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Container,
      title: 'Konteyner Taşımacılığı',
      description: 'Yurt içi ve yurt dışı konteyner taşımacılığında uzman kadromuzla hizmetinizdeyiz. Modern filomuzla güvenli ve hızlı teslimat garantisi sunuyoruz.'
    },
    {
      icon: Globe,
      title: 'Uluslararası Taşımacılık',
      description: 'Sınır ötesi taşımacılıkta geniş partner ağımız ve deneyimli ekibimizle çözüm sunuyoruz.'
    },
    {
      icon: ShieldCheck,
      title: 'Sigortalı Taşımacılık',
      description: 'Tüm taşımalarımız kapsamlı sigorta poliçeleri ile güvence altındadır.'
    },
    {
      icon: Clock,
      title: 'Ekspres Teslimat',
      description: 'Acil gönderileriniz için özel ekspres teslimat hizmetimizle yanınızdayız.'
    },
    {
      icon: FileCheck,
      title: 'Gümrük İşlemleri',
      description: 'Gümrük süreçlerinizi profesyonel ekibimizle yönetiyoruz.'
    },
    {
      icon: Truck,
      title: 'Özel Proje Taşımacılığı',
      description: 'Özel projelere özel çözümler üretiyoruz. Her türlü zorlu taşıma işlemi için uzman ekibimizle hizmetinizdeyiz.'
    }
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
            Hizmetlerimiz
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Modern filomuz ve uzman kadromuzla tüm lojistik ihtiyaçlarınız için yanınızdayız.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}