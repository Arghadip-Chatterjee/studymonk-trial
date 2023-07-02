import React from "react";
import Carousel from "./Carousel";
import ContactForm from "./ContactForm";
import AboutSection from "./AboutSection";
import QuoteSection from "./Quotes";
import ServicesSection from "./Services";
import AnimatedSection from "./Banner";
import Navbar from "./Navbar";


function LandingPage() {

    return (
        <main className="h-full overflow-x-hidden">

            {/* This is the navbar of the page */}
            <Navbar/>
            


            {/* This is the main banner of the landing page */}
            <AnimatedSection/>


            {/* This is the Our services section */}
            <ServicesSection/>

            {/* This is the section for Today's Quote */}
            <QuoteSection/>

            {/* This is the section for testimonials */}
            <section className="w-full h-[380px]">
                <Carousel/>
            </section>
            {/* This is the section for the contact us form */}
            <ContactForm/>

            {/* This is the section for the about page */}
            <AboutSection/>

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