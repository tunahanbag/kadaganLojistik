import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Truck, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import companyLogo from "/companyLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Ana Sayfa", path: "/" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="h-19 w-40"
                />
              </Link>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600 font-semibold"
                      : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
