import React from "react";
import whatsappIcon from "/whatsapp.png"; // WhatsApp ikonunu import et

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/+905308413421/?text=Merhaba, size Kadağan%20Lojistik%20websitesi%20üzerinden%20ulaşıyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 z-50 group transform-gpu"
      aria-label="Chat with us on WhatsApp"
    >
      {/* WhatsApp ikonu */}
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
      />

      {/* Hover ile genişleyen buton ve yazı */}
      <span className="ml-2 text-white text-sm opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all duration-700 ease-in-out group-hover:block hidden">
        Bizimle WhatsApp üzerinden iletişime geçin
      </span>
    </a>
  );
};

export default WhatsAppButton;
