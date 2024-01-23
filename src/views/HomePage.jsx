import HeroSection from "../components/HeroSection";
import ProductGrid from "../components/ProductGrid";
import Welcome from "../components/Welcome";

const HomePage = () => {
  return (
    <div className="flex-grow">
      <HeroSection />
      <Welcome />
      <ProductGrid />
    </div>
  );
};

export default HomePage;
