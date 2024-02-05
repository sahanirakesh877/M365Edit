import React from "react";
import Blogdata from "../Data/BlogData";

const Blog = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col container mx-auto  py-10">
        <div className="flex items-center mb-4">
          <div className="flex-grow">
            <hr className="border-t-2 border-red-700 w-[40px] mx-4" />
          </div>
          <p className="text-4xl text-blue-700  ">Blogs</p>
          <div className="flex-grow">
            <hr className="border-t-2 border-red-700 w-[40px] mx-4" />
          </div>
        </div>
        <p className="text-base text-center text-gray-500 mx-6 ">
          Discover the latest trends in technology and innovation. From
          insightful industry analyses to practical guides, our blog is your
          go-to source for staying informed and inspired. Join our community and
          explore a wealth of knowledge to fuel your passion and curiosity.
        </p>
      </div>

      <section className="flex items-center container mx-auto  dark:bg-gray-800">
        <div className=" mx-auto max-w-7xl">
          <div className="grid grid-cols-1 mx-4 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {
            Blogdata.map((a,id)=>{
              return(
                <>
                <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
              href="#" key={id}
            >
              <div className="relative overflow-hidden h-60   ">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src={a.img}
                  alt
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-1 border-4 border-white rounded-full dark:border-gray-500"
                  src={a.clientImg}
                  alt
                />
                <span className="block mb-1 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
               {a.name}
                </span>
                <h2 className=" text-2xl font-bold leading-7 text-blue-800 dark:text-white">
                  {a.title}
                </h2>
                <p className="text-base leading-7 text-gray-400">
                 {a.description}
                </p>
              </div>
            </a>

                </>

              )
            })
          }
            {/* 1rd card */}
          
            {/* 1card end */}

            {/* 2rd card */}
            {/* <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
              href="#"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg"
                  alt
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-1 border-4 border-white rounded-full dark:border-gray-500"
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
                  alt
                />
                <span className="block mb-1 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                  Alex Nishad • 16th Feb, 2023
                </span>
                <h2 className=" text-2xl font-bold leading-7 text-blue-800 dark:text-white">
                  Better Quality Service Gain
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  Microsoft PowerPoint empowers dynamic presentations with
                  slides, graphics.
                </p>
              </div>
            </a> */}
            {/* 2card ebd */}

            {/* 3rd card */}
            {/* <a
              className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700"
              href="#"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  className="object-cover w-full h-full transition-all hover:scale-110"
                  src="https://i.postimg.cc/J0czqNhX/pexels-pixabay-2097.jpg"
                  alt
                />
              </div>
              <div className="relative z-20 p-8 -mt-16 ">
                <img
                  className="object-cover w-20 h-20 mx-auto mb-1 border-4 border-white rounded-full dark:border-gray-500"
                  src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
                  alt
                />
                <span className="block mb-1 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
                  Ranzeth sahani • 12th Jan, 2024
                </span>
                <h2 className=" text-2xl font-bold leading-7 text-blue-800 dark:text-white">
                  M365 Provide Better Solution
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  This is a sample Microsoft Word document with 10 lines of
                  text. You can use this as a starting point for your own
                </p>
              </div>
            </a> */}
            {/* 3card ebd */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
