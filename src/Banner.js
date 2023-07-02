import React from 'react';
import landing_page_image from "./landing_page_image.svg";

const AnimatedSection = () => {
  return (
    <section className="w-full min-h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col-reverse lg:flex-row w-full h-full px-10">
        <div className="lg:w-1/2">
          <div className="p-20 pt-40 pl-40 rounded-full mt-10 lg:mt-0">
            <img
              src={landing_page_image}
              alt="Landing Page Image"
              className="rounded-full bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-1/2">
          <div className="font-serif leading-tight">
            <p className="text-white text-3xl lg:text-6xl mb-4 lg:mb-6">Presidency Division</p>
            <p className="text-white text-3xl lg:text-6xl mb-4 lg:mb-6">WB Jobs</p>
            <p className="text-base lg:text-2xl font-serif text-white">
              Job Portal in Presidency Division, WB, India is a comprehensive job search solution for jobseekers and employers. We provide access to job postings, resume databases, and career resources to help you find the right job. Our platform is easy to use and helps you find the perfect job, quickly and efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
