import React from "react";
 import VideoCard from "../components/VideoComponents";
import Pricing from "../components/Pricing";
import Banner from "../components/Banner";
import Services from "./Services";
import Contact from "../components/Contact";
import Blog from "./Blog";
// import PhotoComp from "../components/PhotoComp";
import SirkoReview from './../components/SirkoReview';

const Home = () => {
  return (
    <>

<Banner/>
{/* <PhotoComp/> */}
<VideoCard/>
<Services/>
<SirkoReview/>
<Pricing/>
<Contact/>
<Blog/>
      
    </>
  );
};

export default Home;
