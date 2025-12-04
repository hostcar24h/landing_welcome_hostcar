export default function Benefits() {
  const items = [
    { title: "Conductores Verificados", desc: "Profesionales certificados y confiables." },
    { title: "Seguridad 24/7", desc: "Viajes monitoreados y soporte humano todo el día." },
    { title: "Servicio Premium", desc: "Comodidad, puntualidad y experiencia excepcional." },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
