"use client";

import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}> 
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-blue-500 text-white px-4 py-2 rounded-full w-10 h-10 flex items-center justify-center text-2xl lg:text-3xl 2xl:w-12 2xl:h-12 2xl:text-4xl hover:bg-blue-600 transition-colors duration-200">
            <FaArrowUp />
        </button>
    </div>
  )
}

export default ScrollToTopBtn