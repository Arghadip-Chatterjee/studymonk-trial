import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = () => {
    return (
        <section className="w-full h-[750px] bg-zinc-700 flex-col justify-between p-10">
            <h1 className="text-white text-6xl flex justify-center mb-4">Testimonials</h1>
            <Swiper
                id="default-carousel"
                className="relative w-full py-28"
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                navigation
                pagination={{ clickable: true }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="duration-700 ease-in-out bg-white flex justify-between border shadow-white shadow-xl animate-fadeinup rounded">
                        {/* Content for slide 1 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="duration-700 ease-in-out bg-white flex justify-between border shadow-white shadow-xl animate-fadeinup rounded">
                        {/* Content for slide 2 */}
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <style>
                {`
        /* Add your custom styles here */
        .swiper-container {
          height: 100%;
        }

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 0.5rem;
        }
        `}
            </style>
        </section>
    );
};

export default Carousel;
