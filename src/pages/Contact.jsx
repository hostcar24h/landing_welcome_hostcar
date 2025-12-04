import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  return (
    <div className="pt-28 pb-16 px-6 max-w-4xl mx-auto">
      {/* TÍTULO */}
      <h1 className="text-4xl font-bold text-center text-[#0A1B3B] mb-4">
        Contáctanos
      </h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        ¿Tienes dudas, sugerencias o deseas comunicarte con el equipo de
        HostCar24H? Déjanos tu mensaje o usa los números de atención.
      </p>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* FORMULARIO */}
        <form
          action="https://formspree.io/f/mzzndeal"
          method="POST"
          className="bg-white shadow-lg rounded-xl p-8 border border-gray-100"
          onSubmit={() => setStatus("success")}
        >
          {/* OPCIONAL: REDIRECCIÓN */}
          <input
            type="hidden"
            name="_redirect"
            value="https://hostcar.co/contacto/gracias"
          />

          <input
            type="hidden"
            name="_subject"
            value="Nuevo mensaje desde HostCar24H 🚗💨"
          />

          <label className="block mb-4">
            <span className="text-sm font-semibold text-[#0A1B3B]">
              Nombre completo
            </span>
            <input
              type="text"
              name="Nombre"
              required
              className="mt-2 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-light-blue outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-semibold text-[#0A1B3B]">
              Correo electrónico
            </span>
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-light-blue outline-none"
            />
          </label>

          <label className="block mb-4">
            <span className="text-sm font-semibold text-[#0A1B3B]">
              Mensaje
            </span>
            <textarea
              name="Mensaje"
              rows="5"
              required
              className="mt-2 w-full p-3 border rounded-lg bg-gray-50 resize-none focus:ring-2 focus:ring-light-blue outline-none"
            ></textarea>
          </label>

          {/* STATUS */}
          {status === "success" && (
            <p className="text-green-600 text-sm mb-2">
              Tu mensaje se está enviando...
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-light-blue text-white py-3 rounded-lg font-semibold shadow hover:bg-[#006297] transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* INFORMACIÓN */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#0A1B3B]">
            Información de contacto
          </h2>

          <p className="text-gray-600">
            Estamos disponibles 24/7 para ayudarte en lo que necesites.
          </p>

          <div className="space-y-3">
            <p className="flex items-center gap-3 text-gray-800">
              <i className="ri-phone-fill text-light-blue text-xl"></i>
              +57 300 3441929
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <i className="ri-phone-fill text-light-blue text-xl"></i>
              +57 316 3430316
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <i className="ri-phone-fill text-light-blue text-xl"></i>
              +57 300 9939248
            </p>

            <p className="flex items-center gap-3 text-gray-800">
              <i className="ri-mail-fill text-light-blue text-xl"></i>
              hostcar24h@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
