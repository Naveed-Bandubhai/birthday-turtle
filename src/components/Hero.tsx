
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-romantic-gradient opacity-10"></div>
      <div className="z-10 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-romantic-pink">Our Journey Together ❤️</h1>
        <p className="text-xl md:text-2xl max-w-xl mx-auto mb-8">A collection of our most cherished moments and memories</p>
        <a 
          href="#timeline" 
          className="inline-block px-8 py-3 rounded-full bg-romantic-pink text-white 
                    hover:bg-opacity-90 transition-all duration-300 shadow-md"
        >
          Explore Our Story
        </a>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
