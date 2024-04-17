import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Banner = () => {
  const images = [
    "/m-access.png",
    "/m-book.png",
    "/Office-icon.png",
    "/visual-studio-logo-14F95CF819-seeklogo.com.png",
    "/Microsoft_Forms_(2019-present).svg.png",
    "/m-ex.png",
    "/m-exchange.png",
    "/Microsoft_Entra_ID_color_icon.svg.png",
    "/m-outlook.png",
    "/m-powerpoint.png",
    "/m-projects.jpeg",
    "/m-publisher.png",
    "/m-team.png",
    "/m-visio.png"
  ];
  const responsive = {
    0: { items: 3},
    568: { items: 4 },
    1024: { items: 6 },
  };
  return (
    <>
      <section className="bg-white  dark:bg-gray-900 overflow-hidden">
        <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
          <p className="text-center  lg:text-[25px] lg:pb-3 kalam-light  pb-1">
          Unlock Peace of Mind: Affordable Cyber Security for Your  Business{" "}
          </p>
          <h1 className="mb-4  py-2 poppins-medium tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl text-3xl dark:text-white ">
          We Secure and Manage Microsoft 365 <br /> Environment for Small to Medium Businesses
          </h1>
          <p className="mb-8 text-md poppins-light text-gray-600 lg:text-xl sm:px-16 xl:px-42 dark:text-gray-400">
          Discover how M365 can boost your small to medium business with our <br /> customized solutions, support, and advice.
          </p>
          <div className="flex flex-col mb-8 lg:mb-20 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center poppins-regular items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg bg-brand hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Book 30 Min Free Consultation
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* photo section */}
          <AliceCarousel
                  mouseTracking
                  controlsStrategy="alternate"
                  autoPlay
                  infinite
                  disableDotsControls
                  disableButtonsControls
                  responsive={responsive}
                  animationType="fadeout"
                  autoPlayInterval={1000}
                  autoPlayDirection="rtl"
                  startIndex={0}
                  lazyLoad
                >
                  {images.map((image, index) => (
                    <div key={index} className="lg:w-[150px] h-[auto] lg:px-8  w-[60px]  ">
                      <img
                        src={image}
                        className="sliderimg "
                        alt={`image-${index}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </AliceCarousel>

          
        </div>
      </section>
    </>
  );
};

export default Banner;
