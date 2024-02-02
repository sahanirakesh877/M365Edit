import React from "react";

const Banner = () => {
  return (
    <>
      <section className="bg-white  dark:bg-gray-900 overflow-hidden">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32 lg:px-12">
          <p className="text-center text-xl lg:pb-3 subhead">
            Tired of struggling with outdated processes and inefficiencies?{" "}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-42 dark:text-gray-400">
            Unlock the full potential of your business with our comprehensive
            M365 services! <br /> Elevate productivity, collaboration, and
            security seamlessly.
          </p>
          <div className="flex flex-col mb-8 lg:mb-20 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Book 30 Min Free Consultation
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* photo section */}

          <div className=" ">
            <div className="flex justify-between items-center  pt-4">
              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://i.pinimg.com/564x/46/aa/96/46aa967637e21e2a7f7bbef5196a663c.jpg"
                  alt
                />
              </div>

              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://cdn.worldvectorlogo.com/logos/microsoft-project-2019-present-.svg"
                  alt
                />
              </div>

              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
                  alt
                />
              </div>


              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://icons.iconarchive.com/icons/blackvariant/button-ui-ms-office-2016/512/Office-icon.png"
                  alt
                />
              </div>


              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
                  alt
                />
              </div>

              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/2203px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png"
                  alt
                />
              </div>

              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://w7.pngwing.com/pngs/344/883/png-transparent-laptop-microsoft-onenote-computer-software-microsoft-office-365-onenote-purple-electronics-violet-thumbnail.png"
                  alt
                />
              </div>

              <div className="h-[80px] w-[80px]">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/512px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
                  alt
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
