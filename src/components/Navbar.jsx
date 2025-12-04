export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">HostCar</h1>

        <button className="bg-[#0A1B3B] text-white px-4 py-2 rounded-md">
          Contáctanos
        </button>
      </div>
    </nav>
  );
}
