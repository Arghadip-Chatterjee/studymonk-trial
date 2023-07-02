import React, { useEffect, useState } from 'react';
// import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {

  return (
    <section className="w-full h-[750px] bg-black flex justify-between p-10">
      <div className="w-[40%] h-full flex-col space-y-3 pt-64">
        <div>
          <p className="text-3xl text-white font-serif">Job Portal Contact Form</p>
        </div>
        <div>
          <p className="text-md text-white font-serif">
            Fill out this contact form to connect with Job Portal's customer service team for any inquiries, questions, or feedback.
          </p>
        </div>
      </div>

        <div id="contactForm" className="w-[50%] h-full flex-col space-y-5 pt-44">
          <div className="flex-col justify-between w-full">
            <div className="flex-col">
              <label htmlFor="name" className="text-white font-serif text-sm w-[50%]">
                Name
                <br />
              </label>
              <input type="text" id="name" className="w-full py-2 px-2 rounded" required />
            </div>
            <div className="flex-col pt-5">
              <label htmlFor="email" className="text-white font-serif text-sm w-[50%]">
                Email
                <br />
              </label>
              <input type="email" id="email" className="w-full py-2 px-2 rounded" required />
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
  );
};

export default ContactForm;
