import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const VideoCard = () => {
  const images = [
    "/review/kns1.png",
    "/review/kns2.png",
    "/review/kns3.png",
    "/review/kns-4.png",
    "/review/kns-5.png",
    "/review/kns-7.png",
    "/review/kns-8.png",
    
 
   
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
      <div className="container mx-auto px-5 md:px-8 py-12 ">
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
