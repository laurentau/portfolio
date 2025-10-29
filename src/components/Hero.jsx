import React from 'react'
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";

 function Hero() {
  return (
   // Outer container for the hero section
    // Gradient background from pink to blue
    // Centered text and gallery
    <section className="bg-linear-to-r from-pink-500 to-blue-500 text-white flex flex-col items-center py-20 px-6">
      
      {/* Section heading */}
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg text-center">
        My Creative Gallery
      </h1>

      {/* Intro paragraph */}
      <p className="text-lg mb-12 max-w-3xl text-center leading-relaxed">
        Welcome to my showcase! Here’s a glimpse into my world as a software
        developer — blending creativity, design, and innovation through every
        project I build. Each image below represents passion, progress, and
        purpose.
      </p>

      {/* Gallery container */}
      {/* 
        grid = enables grid layout
        gap-10 = adds some spacing between my  images
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 = responsive layout
        max-w-6xl = keeps the gallery nicely centered and not too wide
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        
        {/* The image cards */}
        {/* Each card has overflow-hidden (so zoom stays clean) and a shadow for depth */}
        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src="" 
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src=""
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src=""
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src=""
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src=""
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-sm">
          <img
            src=""
            alt="Gallery picture"
            className="w-full h-72 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero