import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Botón flotante */}
      <a
        href="https://wa.me/573003441929"
        target="_blank"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50 hover:scale-110 transition"
      >
        <i className="icon-base ri ri-whatsapp-fill text-3xl"></i>
      </a>
    </>
  );
}
