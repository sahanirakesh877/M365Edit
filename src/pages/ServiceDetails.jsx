import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import serviceData from "../Data/ServiceData";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
  const { id } = useParams();
  const selectedData = serviceData.find((data) => data.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (

    <>
      <Helmet>
        <title>ServiceDetails| m365pros</title>
        <meta name="description" content="Learn more about our company and team." />
      </Helmet>

      <div className="container mx-auto px-8 pb-4">
      <div className="max-w-6xl mx-auto py-4">
        <h1 className="text-center  text-3xl font-semibold poppins-bold border-b-2 py-3">{selectedData.title} Service</h1>
        <p className="text-center pb-8 text-md poppins-regular py-6">{selectedData.paragrap}</p>
        <div>
          {selectedData.subheading.map((subtitles, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-center font-bold text-2xl py-6 text-brand  poppins-semibold">{subtitles.title}</h2>
              <ul className="list-disc">
                {subtitles.sub_titles.map((list, index) => (
                  <li key={index} className="font-bold text-xl py-1 poppins-regular">
                    <strong className="poppins-bold">{list.sub_title}</strong>:{" "}
                    <span className="font-normal text-md poppins-regular">{list.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
       <p className="pb-6 italic  text-[18px] ">{selectedData.note}</p>
        <p className="text-md poppins-regular">{selectedData.conclusion}</p>
      </div>
    </div>

    </>
  
  );
};

export default ServiceDetails;
