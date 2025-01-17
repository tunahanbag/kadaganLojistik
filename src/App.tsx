import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton"; // Import the WhatsAppButton component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      {/* Add the WhatsApp button outside of main content to appear on all pages */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
