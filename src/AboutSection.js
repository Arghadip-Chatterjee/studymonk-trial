import React, { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './AboutSection.css'; // Import the CSS file for animations

const AboutSection = () => {
  const [visible, setVisible] = useState(false);

  const handleScrollEnter = () => {
    setVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('aboutSection');
      const windowHeight = window.innerHeight;
      const aboutSectionTop = aboutSection.offsetTop;

      if (window.pageYOffset > aboutSectionTop - windowHeight / 2) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollTrigger onEnter={handleScrollEnter}>
      <section id="aboutSection" className={`w-full h-[750px] bg-zinc-800 flex-col justify-between p-10 py-48 ${visible ? 'fadeInUp' : ''}`}>
        <div className="flex justify-center">
          <p className="text-5xl font-serif text-white">About us</p>
        </div>

        <div className="pt-10 px-10">
          <p className="text-xl text-center font-serif text-white">
            My name is Arjun and I am the proud owner of a job business in the Presidency Division of West Bengal, India. My business focuses on providing job opportunities to qualified individuals in the area. We specialize in recruiting highly qualified candidates for various positions in the banking, finance, IT, and other sectors. We are also actively involved in facilitating internships and apprenticeship programs. My team and I work hard to ensure that all the candidates we select are well-suited for the position. We take into account the individual's qualifications, experience, and skill set to make sure that the right match is made. We are not only committed to providing quality job opportunities for our customers but also to helping them find their dream job. With our experience and expertise, we strive to make sure that our customers get the best out of us.
          </p>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default AboutSection;
