import React from "react";
import VideoCard from "../components/VideoComponents";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Services from "./Services";
import Blog from "./Blog";
import Review from "../components/Review";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Review />
      <VideoCard />
      <Services />
      <Pricing />
      <Contact />
      <Blog />
    </>
  );
};

export default Home;
