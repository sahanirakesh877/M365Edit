import React from "react";

const Review = () => {
  return (
    <>
     
      <section className="bg-gray-300 py-16">
      <div className="px-2  pb-10  text-center">
        <p className="text-center text-blue-700 font-semibold text-4xl lg:text-4xl md:text-xl sm:text-lg ">Meet Our Professional</p>
      </div>
        <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            <div className="max-w-sm mx-auto">
              <div className="h-60 ">
                <img
                  src="https://img.freepik.com/free-photo/businessman-dress-code-holding-black-jacket-his-arm_114579-15946.jpg?w=826&t=st=1707129188~exp=1707129788~hmac=4665fbece2e960aadad0db971f99af86cdcf794474cdc4aa3e8167eafbd4e0bf"
                  alt=""
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="mt-6 ">
                <div className="space-y-0.5 font-medium dark:text-white">
                  <div>Roberta Casas</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Lead of MS365
                  </div>
                  <p>
                    "We have been using Microsoft 365 for our business.
                  The collaboration
                    features, seamless integration of apps, and cloud
                    capabilities have significantly boosted our productivity.
                 
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="aspect-w-16 h-96 mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/87JIOAX3njM?si=AFPuTbAbQHmt6bNn"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
