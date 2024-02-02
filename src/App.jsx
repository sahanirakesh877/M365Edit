import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Services from "./pages/Services";
import Price from "./pages/Price";
import Book from "./pages/Book";
import Footer from "./components/Footer";
 import TopSection from "./components/TopSection";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
   <TopSection />
  <Header /> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
