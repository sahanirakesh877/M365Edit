import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import Price from "./pages/Price";
import Footer from "./components/Footer";
import TopSection from "./components/TopSection";
import Blog from "./pages/Blog";
import PricingDetails from "./components/PricingDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <>
      <TopSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/pricingCompare" element={<PricingDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
