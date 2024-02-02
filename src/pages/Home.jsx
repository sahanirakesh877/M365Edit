import React from "react";
 import VideoCard from "../components/VideoComponents";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Services from "./Services";
import Contact from "../components/Contact";
import Blog from "./Blog";
// import PhotoComp from "../components/PhotoComp";

const Home = () => {
  return (
    <>

<Banner/>
{/* <PhotoComp/> */}
<VideoCard/>
<Services/>
<Pricing/>
<Contact/>
<Blog/>
      
    </>
  );
};

export default Home;
