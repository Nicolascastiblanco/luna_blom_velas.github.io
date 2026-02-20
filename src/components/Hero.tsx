import heroImg from "../../image/hero-candles.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#f6efe7] to-[#e8dccb]">
      <img
        src={heroImg}
        alt="Velas"
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="text-center px-6 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
          Candle Bloom
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto text-gray-600">
          Velas artesanales que transforman tus espacios en experiencias únicas
        </p>
      </div>
    </section>
  );
}
