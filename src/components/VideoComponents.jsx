import React from "react";
import customers from "../Data/Customer";

const VideoCard = () => {
  return (
    <>
      <section className="py-16 ">
        <div className="flex justify-center items-center flex-col pb-10">
          <p className="text-center text-blue-700 font-semibold text-4xl lg:text-4xl md:text-lg sm:text-lg ">
            Customer's Reviews
          </p>
          <p>what our client says ?</p>
        </div>
        <div className="grid grid-cols-1 gap-10  sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-8 container mx-auto ">
          {customers.map((a, index) => (
            <div
              key={index}
              className="flex-shrink-0 shadow-xl bg-white max-w-sm "
            >
              <a href="#!">
                <video width={320} height={240} controls className="w-full">
                  <source src={a.videosrc} type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </a>
              <div className="p-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-16 overflow-hidden rounded-full">
                    <img
                      src={a.authImage}
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h5 className="text-gray-900 text-lg font-medium">
                      {a.authname}
                    </h5>
                    <p className="text-sm text-gray-600">{a.authDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default VideoCard;
