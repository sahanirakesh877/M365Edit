import React from 'react'

const Blog = () => {
  return (
    <>
  <div className='flex justify-center items-center flex-col container mx-auto '>
    <div className='flex items-center'>
        <div className='flex-grow'>
            <hr className='border-t-2 border-red-700 w-[40px] mx-4' />
        </div>
        <p className='text-4xl text-blue-700 py-4'>Blogs</p>
        <div className='flex-grow'>
            <hr className='border-t-2 border-red-700 w-[40px] mx-4' />
        </div>
    </div>
    <p className='text-base text-center text-gray-500 mx-6'>
        Discover the latest trends in technology and innovation. From insightful industry analyses to practical guides, our blog is your go-to source for staying informed and inspired. Join our community and explore a wealth of knowledge to fuel your passion and curiosity.
    </p>
</div>


     <section className="flex items-center bg-gray-100 lg:h-screen dark:bg-gray-800">
  <div className="p-4 mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <a className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" href="#">
        <div className="relative overflow-hidden h-72">
          <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://i.postimg.cc/GmM9VxxJ/pexels-pavel-danilyuk-8381916.jpg" alt />
        </div>
        <div className="relative z-20 p-8 -mt-16 ">
          <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500" src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg" alt />
          <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
            Rakesh Sahani • 6th Jun, 2022
          </span>
          <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
            Awesome and Fabulus Service
          </h2>
          <p className="text-base leading-7 text-gray-400">
           
          Microsoft Teams facilitates seamless collaboration, combining chat, meetings, and file sharing for efficient teamwork
          </p>
        </div>
      </a>
      <a className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" href="#">
        <div className="relative overflow-hidden h-72">
          <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://i.postimg.cc/KYSTYzB1/pexels-pixabay-356056.jpg" alt />
        </div>
        <div className="relative z-20 p-8 -mt-16 ">
          <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500" src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg" alt />
          <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
            Alex Nishad • 16th Feb, 2023
          </span>
          <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
           Better Quality Service Gain
          </h2>
          <p className="text-base leading-7 text-gray-400">
          Microsoft PowerPoint empowers dynamic presentations with slides, graphics.
         
           
          </p>
        </div>
      </a>
      <a className="mb-0 overflow-hidden text-center bg-white rounded shadow dark:bg-gray-700" href="#">
        <div className="relative overflow-hidden h-72">
          <img className="object-cover w-full h-full transition-all hover:scale-110" src="https://i.postimg.cc/J0czqNhX/pexels-pixabay-2097.jpg" alt />
        </div>
        <div className="relative z-20 p-8 -mt-16 ">
          <img className="object-cover w-20 h-20 mx-auto mb-4 border-4 border-white rounded-full dark:border-gray-500" src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg" alt />
          <span className="block mb-2 text-xs font-semibold text-blue-700 uppercase dark:text-blue-300">
           Ranzeth sahani • 12th Jan, 2024
          </span>
          <h2 className="mb-3 text-2xl font-bold leading-9 text-blue-800 dark:text-white">
         M365 Provide Better Solution
          </h2>
          <p className="text-base leading-7 text-gray-400">
          This is a sample Microsoft Word document with 10 lines of text. You can use this as a starting point for your own 
           
          </p>
        </div>
      </a>
    </div>
  </div>
</section>

      
    </>
  )
}

export default Blog
