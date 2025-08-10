import React from 'react'

const Hero = () => {
  return (
    <div>
       {/* --- Hero Section --- */}
       <section className="bg-white pt-48 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
            Navigate Maintenance Smarter with AvioTrack
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10">
            Access fast, reliable, and standardized procedures, one click at a time.
          </p>
          <a href='/guidelines'>
          <button className="py-4 px-8 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-lg md:text-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
            Get Started
          </button>
          </a>
          
        </div>
      </section>
    </div>
  )
}

export default Hero