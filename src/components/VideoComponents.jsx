import React from "react";

const VideoCard = () => {
  return (
    <>
   <div className=" lg:pb-12 md:py-6 sm:py-4 flex justify-center items-center flex-col">
   <p className="text-center text-blue-700 font-semibold text-4xl lg:text-4xl md:text-xl sm:text-lg ">
       Customer's Reviews
      </p>
      <p>what our client says ?</p>
   </div>
      <div className="grid grid-cols-1 gap-10 lg:py-12 sm:grid-cols-2 lg:grid-cols-3 px-5 md:px-8 container mx-auto">
        {[1, 2, 3].map((index) => (
          <div key={index} className="flex-shrink-0 shadow-xl bg-white max-w-sm ">
            <a href="#!">
              <video width={320} height={240} controls className="w-full">
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                  type="video/mp4"
                />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </a>
            <div className="p-4">
              <div className="flex justify-center items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-16 overflow-hidden rounded-full">
                  <img
                    src="https://img.freepik.com/free-photo/vertical-portrait-young-lady-smiling-camera-high-quality-photo_144627-75331.jpg?w=360&t=st=1706767043~exp=1706767643~hmac=8af503ae6f98a2cd134ec7fc6e6def4652a7c9de8d99049a3d9982def2f6a853"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h5 className="text-gray-900 text-lg font-medium">Mr. Rolex</h5>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCard;
