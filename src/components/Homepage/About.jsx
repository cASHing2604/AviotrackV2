import React from 'react'

const About = () => {
  return (
    <div>
      {/* --- About Us Section --- */}
      <section id="about" className="bg-blue-950 py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 sm:p-12 xl:p-20 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              {/* Text Column */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  About AvioTrack
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  AvioTrack is a digital reference platform created to support maintenance procedures and fault diagnosis in light aircraft, with a specific focus on the pitot-static system. This project was developed as part of a research initiative that aims to simplify and standardize how aviation personnel access procedural guidance. It helps reduce human error, improve retrieval speed, and ensure consistent reference over time.  
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
                By combining content from official manuals and past maintenance data, AvioTrack offers a clear and reliable solution for aviation technicians, students, and professionals. Our mission is to support aviation safety by making accurate information easier to access and apply.
                </p>
              </div>
              {/* Logo Column */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="/logo.jpeg"
                  alt="AvioTrack Logo"
                  className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
