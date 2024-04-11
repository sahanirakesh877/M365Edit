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
    0: { items: 1.5 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return (
    <>
    <div className="container mx-auto py-24 bg-white">
    <h2 className="text-center poppins-bold lg:text-4xl text-2xl px-3  text-brand  capitalize">
        Meet Our Professional
      </h2>

      <div className="border border-black container gap-4 mx-auto flex flex-col md:flex-row items-start py-12 px-6 lg:px-0">
      
        {/* left section  */}
        <div className="md:w-1/2  border w-full border-brand flex-1 flex flex-col">
          <div className="flex gap-4 items-start border-t  p-4 relative">
            <span className=" bg-violet-500/10 p-2 rounded-full">
              <img
                src="/jeevanmahat.webp"
                alt="word logo"
                class="w-96   h-auto rounded-full"
              />
            </span>
            <div>
              <h3 className="poppins-semibold  text-2xl">Jeevan M.</h3>
              <p className=" text-gray-900 poppins-regular py-2  font-semibold ">
                Microsoft 365 | Azure | Intune | Cloud Administrator
              </p>
              <p className="poppins-regular text-justify text-sm">With 10+ years of experience working in Upwork and various Microsoft certification such as MCSA Server 2008R2, MCITP Server 2008R2, MCTS Active Directory, MCTS Network Infrastructure, Hyper-V Virtualization etc. I work as a Windows System Administrator from the peace of my own home/office to troubleshoot technical problem with your windows Client/ Server PC.</p>
            
              
              <div className="flex justify-between items-center py-4">
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
          <div className="px-8 pb-8">
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
                <div key={index} className="w-[200px] h-[135px] px-2">
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
        </div>

        {/* right section */}
        <div className="md:w-1/2  border border-brand w-full flex-1 flex flex-col">
          <div className="flex gap-4 items-start border-t  p-4 relative">
            <span className=" bg-violet-500/10 p-2 rounded-full">
              <img
                src="/jungsir.webp"
                alt="word logo"
                class="w-96 h-auto rounded-full"
              />
            </span>
            <div>
              <h3 className="poppins-semibold  text-2xl">Sachin Jung K.</h3>
              <p className=" text-gray-900 poppins-regular py-2  font-semibold ">
                M365 Expert | Defender for M365 | Intune Expert
              </p>
              <p className="poppins-regular text-justify text-sm">Professional Experience: Over 16 years in IT, with a specialization in Windows Server Infrastructure and Microsoft 365 Product and Services. IRCA registered ISO 27001:2013 Lead Auditor and Cybersecurity Trainer/Mentor</p>
             
              <div className="flex justify-between items-center py-4">
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
          <div className="px-8 pb-8">
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
              autoPlayDirection="ltr"
              startIndex={0}
              lazyLoad
            >
              {images.map((image, index) => (
                <div key={index} className="w-[200px] h-[135px] px-2">
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
        </div>
      </div>
    </div>
     
    </>
  );
};

export default MeetProfessional;
