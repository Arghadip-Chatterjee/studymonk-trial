import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Quotes.css';

const QuoteSection = () => {
  const quoteSectionRef = useRef(null);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [showQuote, setShowQuote] = useState(false);

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
        setAuthor(response.data[0].author);
      } catch (error) {
        console.error(error);
      }
    };

    setTimeout(() => {
      setShowQuote(true);
      fetchData();
    }, 2000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const quoteSection = quoteSectionRef.current;
      const windowHeight = window.innerHeight;
      const quoteSectionTop = quoteSection.offsetTop;

      if (window.pageYOffset > quoteSectionTop - windowHeight / 2) {
        quoteSection.classList.add('fade-in-left');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={quoteSectionRef}
      className={`w-full h-[350px] bg-black flex-col justify-between p-10 ${
        showQuote ? 'visible' : ''
      }`}
    >
      <div className="w-full h-[50%] flex-col space-y-5 pt-10">
        <h3 className="text-white text-4xl font-serif">Today's Quote</h3>
        <p className="text-3xl font-serif text-white">{quote}</p>
        <p className="text-2xl font-serif text-white">- {author}</p>
      </div>
    </section>
  );
};

export default QuoteSection;
