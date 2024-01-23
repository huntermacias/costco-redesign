
const Welcome = () => {
  return (
	<div
          className="bg-dark-primary py-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.avif')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-bold text-[#d32029] animate-fade-in-down">
              Welcome to Costco!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 animate-fade-in-up">
              Your One-Stop Shop for Quality and Savings
            </p>
            <div className="inline-block">
              <hr className="border-t-2 border-[#d32029] w-1/2 mx-auto mb-4 animate-fade-in" />
              <p className="text-sm md:text-base lg:text-lg text-white italic animate-fade-in">
                Discover a world of exclusive products and incredible deals.
              </p>
            </div>
          </div>
        </div>
  )
};

export default Welcome;
