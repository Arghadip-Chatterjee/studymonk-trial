import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import firebase from "./firebase"; // Import the firebase instance from your firebase.js file
import { useNavigate } from "react-router-dom";
import landing_page_image from "./landing_page_image.svg";
import Carousel from "./Carousel";



function LandingPage() {
    const [quote, setQuote] = useState('');
    const [author, setauthor] = useState('');
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await firebase.auth().signOut();
            navigate("/");
        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

    const handleJobSearch = ()=>{
        navigate("/jobsearch")
    }

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
                params: {
                    category: 'inspirational'
                },
                headers: {
                    'X-RapidAPI-Key': '1b43b998e8mshecf18b614780362p1be75ejsne18f9cebbd57',
                    'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setQuote(response.data[0].quote);
                setauthor(response.data[0].author);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="h-full">

            {/* This is the navbar of the page */}
            <nav className="w-full h-16 bg-black flex justify-between p-4">
                <div className="p-4">
                    <a className="text-2xl text-white font-semibold font-mono cursor-pointer" href="#">Job Portal</a>
                </div>

                <div className="flex items-center space-x-10">
                    <ul className="flex justify-between space-x-10">
                        <li>
                            <a href="#" className="text-lg font-mono text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-lg font-mono text-white hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                About us
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-lg text-white hover:text-blue-600 font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                Contact us
                            </a>
                        </li>


                    </ul>

                    <div className="">
                        <button className="rounded font-mono bg-zinc-800 text-white px-4 py-2 hover:bg-blue-600 transition ease-in-out delay-150 duration-300" onClick={handleJobSearch}>
                            Search Job
                        </button>
                    </div>

                    <div className="">
                        <button className="rounded font-mono bg-zinc-800 hover:bg-blue-600 text-white px-4 py-2 transition ease-in-out delay-150 duration-300" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>


            {/* This is the main banner of the landing page */}
            <section className="w-full h-screen bg-black flex justify-start">
                <div className="flex justify-between w-full h-full px-10">
                    <div className="flex flex-col justify-center w-1/2">
                        <div className="font-serif leading-tight">
                            <p className="text-white text-6xl mb-6">Presidency Division</p>
                            <p className="text-white text-6xl mb-6">WB Jobs</p>
                            <p className="text-2xl font-serif text-white">
                                Job Portal in Presidency Division, WB, India is a comprehensive job search solution for jobseekers and employers. We provide access to job postings, resume databases, and career resources to help you find the right job. Our platform is easy to use and helps you find the perfect job, quickly and efficiently.
                            </p>
                        </div>
                    </div>

                    <div className="w-1/2">
                        {/* <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image to be added" className="h-full w-full" /> */}
                        <div className="p-20 pt-40 pl-40 rounded-full mt-10">
                            <img src={landing_page_image} alt="Landing Page Image" className="rounded-full bg-white" />
                        </div>
                        {/* <img src="landingpage.jpg" alt="" /> */}
                    </div>
                </div>
            </section>


            {/* This is the Our services section */}
            <section className="w-full h-[750px] bg-zinc-800 flex-col justify-between p-10">

                {/* This is the heading of our services section */}
                <div className="pt-6">
                    <p className="text-5xl font-serif text-white">Our Services</p>
                </div>

                {/* This is the div for the collection of cards  */}
                <div className="flex space-x-5 justify-between pt-10">

                    {/* This is the first card */}
                    <div className="flex-col bg-zinc-700 border w-full h-[500px] p-2 shadow-white shadow-lg animate-fadeinup rounded">
                        <div className="bg-black w-full h-[40%] rounded">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image to be added" className="h-full w-full rounded" />
                        </div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">Job Portal's Find Your Dream Job service helps job seekers find their ideal job through personalized job searches, tailored to their particular skillset, experience level, and location. Our search engine sources job postings from around the web, ensuring that users get the most comprehensive list of available jobs. We provide helpful job-related advice and resources to help users make the most informed decisions about where to apply.</p>
                        </div>
                    </div>

                    {/* This is the second card  */}
                    <div className="flex-col bg-zinc-700 border w-full h-[550px] p-2 shadow-white shadow-lg animate-fadeinup rounded">
                        <div className="bg-black w-full h-[40%] rounded">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image to be added" className="h-full w-full rounded" />
                        </div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">JJob Portal's Find Your Dream Job service is designed to help job seekers locate and apply for jobs that match their individual skills, interests, and goals. Our team of experienced recruiters will use their expertise to search for current and upcoming job postings that fit your unique qualifications, and to work with you to create a tailored job application package. Our service takes the guesswork out of the job search and helps you find your perfect professional fit.</p>
                        </div>
                    </div>

                    {/* This is the third card  */}
                    <div className="flex-col bg-zinc-700 border w-full h-[500px] p-2 shadow-white shadow-lg animate-fadeinup rounded">
                        <div className="bg-black w-full h-[40%] rounded">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image to be added" className="h-full w-full rounded" />
                        </div>
                        <div className="w-full">
                            <p className="text-3xl font-serif py-4 px-1 text-white">Find Your Dream Job</p>
                        </div>
                        <div>
                            <p className="text-sm font-serif px-1 text-white">Job Portal's Find Your Dream Job service is the perfect solution for job seekers to find the right job for them. With this service, job seekers can apply for jobs online, get access to job postings from different employers, and receive personalized job recommendations tailored to their qualifications and interests. Job Portal also provides helpful tips and resources to help job seekers maximize their chances of success in their job search.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* This is the section for Today's Quote */}
            <section className="w-full h-[350px] bg-black flex-col justify-between p-10">
                <div className="w-full h-[50%] flex-col space-y-5 pt-10">
                    <h3 className="text-white text-4xl font-serif">Today's Quote</h3>
                    <p className="text-3xl font-serif text-white">{quote}</p>
                    <p className="text-2xl font-serif text-white">- {author}</p>
                </div>
            </section>

            {/* This is the section for testimonials */}
            <section className="w-full h-[380px]">
                <Carousel/>
            </section>
            {/* This is the section for the contact us form */}
            <section className="w-full h-[750px] bg-black flex justify-between p-10">
                <div className="w-[40%] h-full flex-col space-y-3 pt-64">
                    <div>
                        <p className="text-3xl text-white font-serif">Job Portal Contact Form</p>
                    </div>

                    <div>
                        <p className="text-md text-white font-serif">Fill out this contact form to connect with Job Portal's customer service team for any inquiries, questions, or feedback.</p>
                    </div>
                </div>

                <div className="w-[50%] h-full flex-col space-y-5 pt-44">
                    <div className="flex-col justify-between w-full">
                        <div className="flex-col">
                            <label htmlFor="name" className="text-white font-serif text-sm w-[50%]">
                                Name
                                <br />
                            </label>
                            <input type="text" id="name" className="w-full py-2 px-2 rounded" required/>
                        </div>

                        <div className="flex-col pt-5">
                            <label htmlFor="email" className="text-white font-serif text-sm w-[50%]">
                                Email
                                <br />
                            </label>
                            <input type="email" id="email" className="w-full py-2 px-2 rounded" required/>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="text-white font-serif text-sm">
                            Message
                            <br />
                            <textarea name="message" id="message" className="w-full h-32 text-black rounded p-2"></textarea>
                        </label>
                    </div>

                    <div className="flex justify-between">
                        <p className="text-[10px]">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        <button className="px-10">Send</button>
                    </div>
                </div>
            </section>

            {/* This is the section for the about page */}
            <section className="w-full h-[750px] bg-zinc-800 flex-col justify-between p-10 py-48">
                <div className="flex justify-center">
                    <p className="text-5xl font-serif text-white">About us</p>
                </div>

                <div className="pt-10 px-10">
                    <p className="text-xl text-center font-serif text-white">My name is Arjun and I am the proud owner of a job business in the Presidency Division of West Bengal, India. My business focuses on providing job opportunities to qualified individuals in the area. We specialize in recruiting highly qualified candidates for various positions in the banking, finance, IT, and other sectors. We are also actively involved in facilitating internships and apprenticeship programs.My team and I work hard to ensure that all the candidates we select are well-suited for the position. We take into account the individual's qualifications, experience, and skill set to make sure that the right match is made. We are not only committed to providing quality job opportunities for our customers but also to helping them find their dream job. With our experience and expertise, we strive to make sure that our customers get the best out of us.</p>
                </div>
            </section>

            {/* This is the section for the footer */}
            <section className="w-full h-[250px] bg-black flex justify-between p-10">
                <div className="py-16">
                    <p className="text-3xl font-serif text-white">Job Portal</p>
                </div>

                <div className="flex justify-between pt-10">
                    <div className="">
                        <ul className="flex-col space-y-5 text-white font-serif">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    <div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default LandingPage;