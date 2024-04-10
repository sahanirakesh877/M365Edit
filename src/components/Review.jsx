import React, { useState } from "react";

const Review = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-start py-20 px-6 lg:px-0">
      {/* Left Side (Text) */}
      <div className="md:w-2/3 md:pr-6">
        <h2 className="text-3xl font-semibold poppins-medium text-brand   mb-4">
          Why M365 Pros ?
        </h2>
        <p className="{`text-lg mb-2 poppins-light text-justify ${showMore ? '' : 'truncate'}`}">
          We are a group of Microsoft Certified professionals with more than 10+
          years of experience each providing support, consultation, and
          management service for SMB’s to manage/secure their M365 Environment.
        </p>
        <p className="{`text-lg mb-2 poppins-light text-justify ${showMore ? '' : 'truncate'}`}">
          We have learned from our experience of working with various businesses
          from USA, Canada, Australia, UK, and more, that managing Microsoft 365
          services can be challenging for small and medium business owners as
          their companies expand.
        </p>
        <p className="{`text-lg mb-2 poppins-light text-justify ${showMore ? '' : 'truncate'}`}">
          This is because Microsoft 365 is not just an email service, but rather
          a comprehensive suite of tools designed to help businesses run
          smoothly. From productivity tools like Word, Excel, and PowerPoint to
          collaboration tools like Teams, SharePoint, and OneDrive Cloud
          Storage, Microsoft 365 offers a wide range of features.
        </p>

        {!showMore && (
          <button
            className="bg-brand poppins-regular text-white border border-blue-600 px-8 py-2 rounded-full hover:bg-blue-900 hover:border-blue-900 transition duration-300 ease-in-out"
            onClick={toggleShowMore}
          >
            Read More
          </button>
        )}

        {showMore && (
          <>
            <p className="{`text-lg mb-2 poppins-light text-justify `}">
              Our goal is to help businesses ensure that all of these M365
              services are secure so that their employees can access them and
              their company data remains protected.
            </p>
            <p className="{`text-lg mb-2 poppins-light text-justify `}">
              We have worked on 100’s of Microsoft 365 tenants and entertained
              different business requirements.
            </p>
            <p className="{`text-lg mb-2 poppins-light text-justify `}">
              The best part is all who are associated with M365 Pros are
              Certified M365 Professionals and we know what our clients are
              looking for and that is Security and their precious time so that
              they can focus more on growing their own business without worrying
              about Cyber threats can ruin your business, but you don't have to
              spend a fortune to avoid them; it's not just a smart move, it's a
              must-have in today's online world. You don't have to break the
              bank to protect your future – get incredible value with Microsoft
              365 Business Premium to start your security journey, so you can
              relax and boost your business's resilience against evolving cyber
              threats.
            </p>
            <button
              className="bg-blue-600   text-white poppins-regular border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-900 hover:border-blue-600 transition duration-300 ease-in-out"
              onClick={toggleShowMore}
            >
              Read Less
            </button>
          </>
        )}
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/3 mt-6 md:mt-0 ">
        <img
          src="https://img.freepik.com/premium-photo/community-cloud-storage-sync-secure_960782-40317.jpg?w=740"
          alt="About Us"
          className="w-full h-auto  rounded-tl-3xl rounded-br-3xl"
        />
      </div>
    </div>
  );
};

export default Review;
