import React, { useEffect, useRef } from 'react';
import './Services.css';

const ServicesSection = () => {
  const servicesSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = servicesSectionRef.current;
      const windowHeight = window.innerHeight;
      const servicesSectionTop = servicesSection.offsetTop;

      if (window.pageYOffset > servicesSectionTop - windowHeight / 2) {
        const cards = servicesSection.querySelectorAll('.animate-slideinup');
        cards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.3}s`;
          card.classList.add('slide-in-up');
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={servicesSectionRef} className="w-full min-h-[750px] bg-zinc-800 flex flex-col justify-between p-10">
      {/* Heading */}
      <div className="pt-6">
        <p className="text-3xl lg:text-5xl font-serif text-white">Our Services</p>
      </div>

      {/* Card Collection */}
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between pt-10">
        {/* First Card */}
        <div className="flex flex-col bg-zinc-700 border w-full h-[500px] lg:w-[30%] lg:h-[550px] p-2 shadow-white shadow-lg animate-slideinup rounded">
          {/* Card Content */}
          <div className="bg-black w-full h-[40%] rounded">
            <img
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image to be added"
              className="h-full w-full rounded"
            />
          </div>
          <div className="w-full">
            <p className="text-xl lg:text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
          </div>
          <div>
            <p className="text-sm lg:text-base font-serif px-1 text-white">
              Job Portal's Find Your Dream Job service helps job seekers find their ideal job through personalized job searches, tailored to their particular skillset, experience level, and location. Our search engine sources job postings from around the web, ensuring that users get the most comprehensive list of available jobs. We provide helpful job-related advice and resources to help users make the most informed decisions about where to apply.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col bg-zinc-700 border w-full h-[550px] lg:w-[30%] p-2 shadow-white shadow-lg animate-slideinup rounded">
          {/* Card Content */}
          <div className="bg-black w-full h-[40%] rounded">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image to be added"
              className="h-full w-full rounded"
            />
          </div>
          <div className="w-full">
            <p className="text-xl lg:text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
          </div>
          <div>
            <p className="text-sm lg:text-base font-serif px-1 text-white">
              Job Portal's Find Your Dream Job service is designed to help job seekers locate and apply for jobs that match their individual skills, interests, and goals. Our team of experienced recruiters will use their expertise to search for current and upcoming job postings that fit your unique qualifications, and to work with you to create a tailored job application package. Our service takes the guesswork out of the job search and helps you find your perfect professional fit.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="flex flex-col bg-zinc-700 border w-full h-[500px] lg:w-[30%] lg:h-[550px] p-2 shadow-white shadow-lg animate-slideinup rounded">
          {/* Card Content */}
          <div className="bg-black w-full h-[40%] rounded">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Image to be added"
              className="h-full w-full rounded"
            />
          </div>
          <div className="w-full">
            <p className="text-xl lg:text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
          </div>
          <div>
            <p className="text-sm lg:text-base font-serif px-1 text-white">
              Job Portal's Find Your Dream Job service is the perfect solution for job seekers to find the right job for them. With this service, job seekers can apply for jobs online, get access to job postings from different employers, and receive personalized job recommendations tailored to their qualifications and interests. Job Portal also provides helpful tips and resources to help job seekers maximize their chances of success in their job search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
