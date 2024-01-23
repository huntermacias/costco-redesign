import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import HomePage from "./views/HomePage";

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark-primary text-white">
        {/* Navigation */}
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <hr className="mt-4 border-t-2 border-[#d32029] w-2/4 mx-auto" />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
