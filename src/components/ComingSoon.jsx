function ComingSoon() {
  return (
    <section className="relative w-full overflow-hidden mt-10">
      {/* VIDEO O IMAGEN */}
      <div className="w-full h-[350px] sm:h-[450px] md:h-[520px] overflow-hidden rounded-xl shadow-lg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/hostcar-promo.mp4" type="video/mp4" />
        </video>

        {/* Si prefieres imágenes, reemplaza el video por:
        <img src="/images/slide-1.jpg" className="w-full h-full object-cover" />
        */}
      </div>

      {/* CAPA OSCURA PARA EFECTO */}
      <div className="absolute inset-0 bg-black/20 rounded-xl"></div>

      {/* TEXTO SUPERIOR */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
          ¡Muy Pronto!
        </h2>

        <p className="text-lg sm:text-xl mt-3 max-w-2xl drop-shadow">
          Estamos preparando una experiencia premium en transporte especial.
          HostCar24H llegará para elevar tus viajes a otro nivel.
        </p>

        {/* CTA opcional */}
        <button className="mt-6 px-8 py-3 bg-[#C69A39] text-white rounded-lg text-lg font-semibold hover:bg-[#b3862e] transition">
          Notifícame cuando lancen
        </button>
      </div>
    </section>
  );
}

export default ComingSoon;
