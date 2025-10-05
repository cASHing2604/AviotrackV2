import React from 'react'

const Footer = () => {
  console.log('🟣 Footer component rendered', new Date().toISOString())

  return (
    <footer
      data-debug="AvioTrackFooter"
      className="p-4 bg-white md:p-8 lg:p-10"
    >
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
          <img src="/logo.jpeg" alt="AvioTrack Logo" className="mr-2 h-8" />
          AvioTrack
        </a>

        {/* Removed the duplicate text line here */}

        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 mt-6">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Guidelines
            </a>
          </li>
        </ul>

        <span className="text-sm text-gray-500 sm:text-center">
          © 2025 AvioTrack™. All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
