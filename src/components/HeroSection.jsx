
const HeroSection = () => {
  return (
	<section
          className="relative bg-cover bg-center h-[65vh] w-full mb-8 flex items-center justify-center text-center"
          style={{ backgroundImage: "url('/images/costco_hero.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50" />

          {/* Hero content */}
          <div className="z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white bg-blur leading-tight mb-4 animate-fadeInDown">
              Experience the Best Shopping
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fadeInUp">
              Find everything from groceries to electronics at unbeatable
              prices.
            </p>
            <a
              href="#shop-now"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block transform transition-all hover:-translate-y-1 hover:bg-blue-700 animate-pulse"
            >
              Shop Now
            </a>
          </div>
        </section>
)
};

export default HeroSection;
