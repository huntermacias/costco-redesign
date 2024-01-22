import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import products from "./product_data/data";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle the sidebar
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className=" flex flex-col min-h-screen bg-dark-primary text-white">
      {/* Navigation Toggle */}
      <button
        onClick={toggleNav}
        className={`fixed z-30 top-4 left-4 text-2xl text-white bg-transparent p-2 ${
          isNavOpen ? "" : "bg-dark-secondary p-2 rounded-full"
        }`}
      >
        {isNavOpen ? "✕" : "☰"} {/* Unicode for 'X' and 'Menu' icons */}
      </button>

      {/* Side Navigation */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-dark-secondary p-4 w-64 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <nav className="mt-10">
          <ul>
            <li className="mb-4">Costco Next</li>
            <li className="mb-4">While Supplies Last</li>
            <li className="mb-4">New Lower Prices</li>
            <li className="mb-4">What&apos;s New</li>
            <li className="mb-4">Get Email Offers</li>
            <li className="mb-4">Customer Service</li>
          </ul>
        </nav>
      </div>

      {/* Overlay when nav is open, click to close */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleNav}
        />
      )}

      {/* Content */}
      <div className="flex-grow">
        {/* Side Navigation */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-gray-700 p-4 w-64`}
        >
          {/* Navigation items */}
        </div>

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[65vh] w-full mb-8 flex items-center justify-center text-center"
          style={{ backgroundImage: "url('/public/images/costco_hero.png')" }}
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

        <main className="px-4">
          <div className="bg-dark-primary py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl md:text-5xl lg:text-6xl mb-4 font-bold text-[#d32029]">
                Welcome to Costco!
              </h1>
              <p className="text-mg md:text-xl lg:text-2xl text-white mb-6">
                Your One-Stop Shop for Quality and Savings
              </p>
              <div className="inline-block">
                <hr className="p-2 border-t-2 border-[#d32029] w-2/4 mx-auto" />

                <p className="text-base md:text-lg text-white italic">
                  Discover a world of exclusive products and incredible deals.
                </p>
              </div>
            </div>
          </div>

          {/* Sample Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 space-y-4 space-x-2">
            {/* Product Card */}

            {products.map((product) => (
              <Product
                key={product.id}
                name={product.name}
                description={product.description}
                img={product.image}
                category={product.category}
                price={product.price}
                isMemberExclusive={product.isMemberExclusive}
              />
            ))}

            {/* Repeat for other products */}
          </div>
        </main>

        <hr className="mt-4 border-t-2 border-[#d32029] w-2/4 mx-auto" />

        {/* Footer */}
        <footer className="bg-dark-primary text-gray-300 px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h2 className="font-bold text-lg mb-4">Customer Service</h2>
              <ul>
                <li className="mb-2">Get Help</li>
                <li className="mb-2">Find a Warehouse</li>
                <li className="mb-2">Order Status</li>
                <li className="mb-2">Shipping</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h2 className="font-bold text-lg mb-4">About Us</h2>
              <ul>
                <li className="mb-2">Charitable Contributions</li>
                <li className="mb-2">Company Information</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h2 className="font-bold text-lg mb-4">Membership</h2>
              <ul>
                <li className="mb-2">Join Now</li>
                <li className="mb-2">Member Privileges</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h2 className="font-bold text-lg mb-4">Vendors & Suppliers</h2>
              <ul>
                <li className="mb-2">Supply Chain Disclosure</li>
                <li className="mb-2">Supplier Diversity</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center text-sm">
            <p>
              © 1998 — 2024 Costco Wholesale Corporation. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
