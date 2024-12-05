import React from "react";
import { Truck, Facebook, Twitter, Instagram } from "lucide-react";
import companyLogo from "/companyLogo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={companyLogo} alt="Company Logo" className="h-16 w-34" />
              <span className="text-lg font-bold">Kadağan Lojistik</span>
            </div>
            <p className="text-gray-400">
              Güvenilir ve profesyonel lojistik çözümler.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Yakuplu Mah. Liman Yolu Cad.</li>
              <li> No:134 Beylikdüzü/İstanbul</li>
              <li>+90 (530) 841 3421</li>
              <li>info@kadaganlojistik.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kadağan Lojistik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
