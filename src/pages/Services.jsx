import React from "react";
import servicedata from "../Data/ServiceData";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="servicecss">
        <div className="max-w-7xl  px-5 py-24 container mx-auto">
          <div className="text-center">
            <h2 className="font-semibold  text-4xl  poppins-semibold text-brand ">
              Service We Provide
            </h2>
            <p className=" max-w-lg mx-auto my-4 text-gray-500 poppins-regular">
              . Microsoft 365, formerly known as Office 365, is a suite of
              cloud-based productivity tools and services offered by Microsoft.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10  mt-10 ">
            {servicedata.map((a, id) => {
              return (
                <>
                  <Link to={`/service/${a.id}`}>
                    <div
                      className="flex gap-4 items-start border border-brand   p-4 relative"
                      key={id}
                    >
                      <span className=" bg-violet-500/10 p-4 rounded-full">
                        <img
                          src={a.image}
                          alt="word logo"
                          class="w-24 h-auto rounded-full"
                        />
                      </span>
                      <div>
                        <h3 className="font-semibold text-xl poppins-semibold text-justify">
                          {a.title}
                        </h3>
                        <p className="mt-1 text-gray-500 poppins-regular text-justify">
                          {" "}
                          {a.paragrap.slice(0, 70)} . .
                        </p>
                        <div class="absolute -top-0.5 left-0  w-10 border border-red-700"></div>
                        <div class="absolute -bottom-0.5 right-0  w-10 border border-red-700"></div>

                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
