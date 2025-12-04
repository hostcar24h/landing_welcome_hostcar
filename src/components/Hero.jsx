export default function Hero() {
  return (
    <section className="pt-24 pb-20 px-6 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Transporte Premium para Viajeros Exigentes
        </h2>
        <p className="text-lg mb-8 drop-shadow-md">
          Traslados seguros, exclusivos y confiables en las principales ciudades turísticas de Colombia.
        </p>

        <button href="hoscar24h.com" className="bg-[#C69A39] text-white px-6 py-3 rounded-md text-lg font-semibold">
          Cotizar un Viaje
        </button>
      </div>
    </section>
  );
}
