import React, { useState } from 'react';

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    'https://via.placeholder.com/800x300',
    'https://via.placeholder.com/800x300',
    'https://via.placeholder.com/800x300',
  ];

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative">
      <img src={slides[current]} alt="Slide" className="w-full h-64 object-cover" />
      <button onClick={nextSlide} className="absolute top-1/2 right-4 bg-white p-2 rounded-full">Next</button>
    </div>
  );
};

export default Slider;