import React from "react";
import { useNavigate } from "react-router-dom";
import pricedata from "../Data/PriceData";
import { Helmet } from "react-helmet";
const Pricing = () => {
  const navigate = useNavigate();

  const pricecomp = () => {
    navigate("/pricingCompare");
  };
  return (
    <>
     <Helmet>
        <title>Pricing | m365pros</title>
        <meta name="description" content="Learn more about our company and team." />
      </Helmet>
      <div className=" lg:pt-12 lg:pb-24 py-4">
        <div className="container mx-auto ">
          <div className="flex justify-center items-center flex-col  space-x-4 overflow-hidden">
            <p className="text-4xl text-brand poppins-semibold pb-4 poppins-bold">
              Pricing
            </p>

            <p className="  text-[16px] text-center poppins-regular">
              we focus on markets where technology, innovation, and capital can
              unlock long-term{" "}
            </p>
          </div>
          <div className="grid grid-cols-1  gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6   container mx-auto text-zinc-800 mt-10">
            {pricedata.map((a, id) => {
              return (
                <>
                  <div
                    className="flex flex-col pb-8 items-center   bg-gray-50
                  shadow-xl relative  border border-blue-900 max-w-sm rounded-tl-lg rounded-tr-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-10 h-10 absolute -top-6 -left-4 fill-blue-900"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="mono text-xl absolute -top-4 bg-brand text-zinc-100 py-0.5 px-4 font-bold tracking-wider rounded">
                      {a.header}
                    </p>
                    <div>
                      <p className="opacity-60 text-center"></p>
                      <div className="flex gap-4 justify-center">
                        <div className="flex flex-col items-center my-8">
                          <p className="font-extrabold text-3xl poppins-regular text-gray-700">
                            {a.price}
                          </p>
                          <p className="text-sm opacity-80 poppins-regular">
                            {a.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 ">
                      <p className="flex items-center  poppins-regular">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <b className="poppins-regular">{a.list1}</b>
                      </p>
                      <p className="flex items-center poppins-regular">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <b className="poppins-regular">{a.list2}</b>
                      </p>
                      <p className="flex items-center poppins-regular">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <b className="poppins-regular">{a.list3}</b>
                      </p>
                      <p className="flex items-center poppins-regular">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 mr-2"
                        >
                          <path
                            fillRule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <b className="poppins-regular"> {a.list4}</b>
                      </p>

                      <div className="flex justify-center mt-8">
                        <button
                          className="  px-4 py-2 border-blue-900 border-4 hover:bg-violet-100 rounded-xl poppins-medium"
                          onClick={pricecomp}
                        >
                          Get Started
                        </button>
                        <div className="polygon-clip1"></div>
                        <div className="polygon-clip2"></div>
                      </div>
                    </div>
                  </div>
                  
                </>
              );
            })}
          </div>
             {/* Polygon Clip */}
             
        </div>
      </div>
    </>
  );
};

export default Pricing;
