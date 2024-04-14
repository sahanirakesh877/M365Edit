import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const VideoCard = () => {
  const images = [
    "/upwork1.png",
    "/upwork2.png",
    "/upwork3.png",
    "/upwork4.png",
    "/upwork5.png",
    "/upwork6.png",
    "/upwork7.png",
    "/upwork8.png",
    "/upwork10.png",
    "/upwork11.png",
    "/upwork12.png",
    "/upwork13.png",
   
  ];

  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <section className="py-24 bg-white">
      <div className="flex flex-col items-center ">
        <p className="text-center poppins-semibold text-brand font-semibold text-4xl lg:text-4xl md:text-lg sm:text-lg">
          Customer's Reviews
        </p>
        <p className="poppins-semibold">What our clients say?</p>
      </div>
      <div className="container mx-auto px-5 md:px-8 py-4 ">
        <AliceCarousel
          mouseTracking
          controlsStrategy="alternate"
          autoPlay
          infinite
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          animationType="fadeout"
          autoPlayInterval={3000}
          autoPlayDirection="rtl"
          startIndex={0}
          lazyLoad
        >
          {images.map((image, index) => (
            <div key={index} className="px-8 clientReview ">
              <img 
                src={image}
                // className="sliderimg object-fit border "
    
                alt={`image-${index}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            
          ))}
        </AliceCarousel>
      </div>
    </section>
  );
};

export default VideoCard;
