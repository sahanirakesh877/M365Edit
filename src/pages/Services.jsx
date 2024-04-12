import React from "react";
import servicedata from "../Data/ServiceData";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
     
      <div className=" servicecss px-4 lg:pt-12 lg:pb-24 py-4">
        <div id="features" className="mx-auto max-w-6xl">
          <h2 className="font-semibold  text-center text-4xl  poppins-semibold text-brand ">
            Our Services
          </h2>
          <p className=" text-center mx-auto my-2 text-gray-700 poppins-regular">
            Microsoft 365, formerly known as Office 365, is a suite of
            cloud-based productivity tools and services offered by Microsoft.
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-6 text-center text-slate-800 md:grid-cols-2">
            {servicedata.map((a, id) => {
              return (
                <>
                  <li className="  px-8 py-8  servicecss   shadow-lg">
                    <Link to={`/service/${a.id}`}>
                      <img
                        src={a.image}
                        alt
                        className="mx-auto h-10 w-10 mb-6"
                      />
                      <h3 className="font-semibold text-xl poppins-semibold text-center pb-2">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-gray-500 poppins-regular text-justify">
                        {a.paragrap.slice(0, 100)} . . . . . . . .
                      </p>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div />
      </div>
    </>
  );
};

export default Services;
