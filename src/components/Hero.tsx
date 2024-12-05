import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import shipImage1 from "/shipImage.png";
import shipImage2 from "/tir4.jpeg";
import shipImage3 from "/dockImage.png";
import shipImage4 from "/tir3.jpeg";
import shipImage5 from "/dockImage2.png";
import shipImage6 from "/tir5.jpeg";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const images = [
  shipImage1,
  shipImage2,
  shipImage3,
  shipImage4,
  shipImage5,
  shipImage6,
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate("/iletisim"); // Navigate to the ContactPage when the button is clicked
  };

  return (
    <div className="relative h-screen md:h-[600px] pt-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Overlay (Remains Static) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex items-center">
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
            onClick={handleButtonClick} // Add the click handler to navigate
          >
            <span>Hemen Teklif Alın</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
