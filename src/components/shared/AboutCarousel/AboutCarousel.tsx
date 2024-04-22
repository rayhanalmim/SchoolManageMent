"use client"

import { useState } from 'react';
import { Divider } from 'antd';

const slides = [
  {
    title: '2023',
    content: 'Tealium processes over 9 billion events on a typical day and launches Mosaic and LIFT University 700 team members and growing!',
  },
  {
    title: '2022',
    content: 'Tealium becomes a remote first company in response to the Covid-19 pandemic. Later in the year, Tealium Predict is launched 500 team members in 16 countries and customers in 30+',
  },
  {
    title: '2021',
    content: 'EventStream & DataAccess are added to Tealium’s product offerings.',
  },  
  {
    title: '2020',
    content: 'Tealium launches the first ever Customer Data platform, AudienceStream 150 team members.',
  }, 
  {
    title: '2019',
    content: 'Tealium’s first product, iQ Tag Management launches, followed by the Multi-CDN network.',
  },
  {
    title: '2018',
    content: 'Tealium founded by Mike Anderson and Ali Behnam.',
  },
];


const AboutCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 2 ? 0 : prevIndex + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 2 : prevIndex - 2));
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold py-5 text-center">Our History</h2>
      <div className="carousel mb-20 h-64 ">
        <div className={`slide ${currentIndex === 0 || currentIndex === 1 ? 'block' : 'hidden'} space-y-2`}>
          <h2 className="text-2xl font-bold">{slides[0].title}</h2>
          <p>{slides[0].content}</p>
          <Divider />
          <h2 className="text-2xl font-bold">{slides[1].title}</h2>
          <p>{slides[1].content}</p>
        </div>
        <div className={`slide ${currentIndex === 2 || currentIndex === 3 ? 'block' : 'hidden'} space-y-2`}>
          <h2 className="text-2xl font-bold">{slides[2].title}</h2>
          <p>{slides[2].content}</p>
          <Divider />
          <h2 className="text-2xl font-bold">{slides[3].title}</h2>
          <p>{slides[3].content}</p>
        </div>
        <div className={`slide ${currentIndex === 4 || currentIndex === 5 ? 'block' : 'hidden'} space-y-2`}>
          <h2 className="text-2xl font-bold">{slides[4].title}</h2>
          <p>{slides[4].content}</p>
          <Divider />
          <h2 className="text-2xl font-bold">{slides[5].title}</h2>
          <p>{slides[5].content}</p>
        </div>
      </div>
      
      <button className="next absolute bottom-4 right-12 bg-white border border-gray-300 p-2 rounded-full" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="prev absolute bottom-4 right-4 bg-white border border-gray-300 p-2 rounded-full" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default AboutCarousel;
