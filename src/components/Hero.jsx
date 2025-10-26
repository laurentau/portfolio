import React from 'react'

 function Hero() {
  return (
     <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:w-1/2">
        {/* Replace the src values below with your actual image links */}
        <img
          src="LaurenJPG"
          alt="Lauren Tau"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-lg"
        />
        <img
          src="your-image-2.jpg"
          alt="Creative Work"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-2xl shadow-lg"
        />
      </div>
  )
}
export default Hero