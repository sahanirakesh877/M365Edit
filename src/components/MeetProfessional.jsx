import React from "react";
import { FaCrown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MeetProfessional = () => {
  const images = [
    "/cer.png",
    "/cert2.png",
    "/cert3.png",
    "/cer4.png",
    "/cer5.png",
    "/cer6.png",
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
      <div className="  px-4 py-24">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="font-semibold  text-center lg:text-4xl text-3xl px-6  poppins-semibold text-brand ">
            Meet Our Professional
          </h2>

          <ul className="lg:mt-12  mt-8 grid grid-cols-1 gap-6 text-center text-slate-800 md:grid-cols-2">
            {/* left section */}
            <li className="  px-8 py-8    border  shadow-lg">
              <div className="flex flex-1 flex-row items-start justify-between">
                <div className="w-full">
                  <img
                    src="/jeevanmahat.webp"
                    alt
                    className="mx-auto rounded-full w-[500px] h-auto  "
                  />
                </div>

                <div>
                  <div className="pl-3">
                    <h3 className="poppins-semibold text-justify  text-2xl">
                      Jeevan M.
                    </h3>
                    <p className=" text-gray-900 poppins-regular py-2  font-semibold ">
                      Microsoft 365 | Azure | Intune | Cloud Administrator
                    </p>
                    <p className="poppins-regular text-justify text-md">
                      With 10+ years of experience working in Upwork and various
                      Microsoft certification such as MCSA Server 2008R2, MCITP
                      Server 2008R2, MCTS Active Directory, MCTS Network
                      Infrastructure, Hyper-V Virtualization etc. I work as a
                      Windows System Administrator from the peace of my own
                      home/office to troubleshoot technical problem with your
                      windows Client/ Server PC.
                    </p>
                  </div>

                  <div className="flex justify-start gap-4 items-center py-4">
                    <div className="flex items-center ">
                      <span className="mr-2">
                        <FaCrown className="text-blue-500 text-xl" />
                      </span>
                      <p className="text-gray-700 poppins-regular font-semibold">
                        100% Job Success
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FaStar className="text-yellow-600 text-xl" />
                      </span>
                      <p className="text-gray-700 poppins-regular font-semibold">
                        Top Rated Plus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
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
                    <div key={index} className="w-[198px] h-[135px] lg:px-8   ">
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
            </li>


            {/* right section */}
            <li className="  px-8 py-8   border  shadow-lg">
              <div className="flex flex-1 flex-row items-start justify-between">
                <div className="w-full">
                  <img
                    src="/jungsir.webp"
                    alt
                    className="mx-auto rounded-full w-[500px]  h-auto  "
                  />
                </div>

                <div>
                  <div className="pl-3">
                    <h3 className="poppins-semibold text-justify  text-2xl">
                      Sachin Jung K.
                    </h3>
                    <p className=" text-gray-900 poppins-regular py-2  text-justify font-semibold ">
                      M365 Expert | Defender for M365 | Intune Expert
                    </p>
                    <p className="poppins-regular text-justify text-md">
                      Professional Experience: Over 16 years in IT, with a
                      specialization in Windows Server Infrastructure and
                      Microsoft 365 Product and Services. IRCA registered ISO
                      27001:2013 Lead Auditor and Cybersecurity Trainer/Mentor. I work as a Windows System Administrator from the peace of my own home/office to troubleshoot technical problem with your windows Client/ Server PC.
                    </p>
                  </div>

                  <div className="flex justify-start gap-4 items-center py-4">
                    <div className="flex items-center ">
                      <span className="mr-2">
                        <FaCrown className="text-blue-500 text-xl" />
                      </span>
                      <p className="text-gray-700 poppins-regular font-semibold">
                        100% Job Success
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FaStar className="text-yellow-600 text-xl" />
                      </span>
                      <p className="text-gray-700 poppins-regular font-semibold">
                        Top Rated Plus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
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
                    <div key={index} className="w-[198px] h-[135px] lg:px-8  ">
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
            </li>
          </ul>
        </div>
        <div />
      </div>
    </>
  );
};

export default MeetProfessional;
