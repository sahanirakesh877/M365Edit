import React from "react";
import VideoCard from "../components/VideoComponents";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Services from "./Services";
import Blog from "./Blog";
import Review from "../components/Review";
import Contact from "../pages/Contact";
import MeetProfessional from "../components/MeetProfessional";

const Home = () => {
  return (
    <>
      <Banner />
      <Review />
      <MeetProfessional/>
      <Services />
      <Pricing />
      <VideoCard />
      
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
