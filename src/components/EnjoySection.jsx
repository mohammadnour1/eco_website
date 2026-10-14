import React from 'react'
import image from "../assets/Rectangle 13.png"

const EnjoySection = () => {
  return (
    <section className="bg-[#EEF2FB] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Enjoy Our Latest Fashion Trends and Style
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Ship our curated collection of fashion items and stay ahead of the fashion game
            </p>

            {/* Feature Sections */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
                <p className="text-sm text-gray-600">Premium materials and craftsmanship</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Style</h3>
                <p className="text-sm text-gray-600">Modern designs for every home</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-black text-white font-semibold  hover:bg-gray-800 transition-all flex items-center gap-2 ">
              Explore
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative">
            <img
              src = {image}
              alt="Features Furniture"
              className="w-584px h-696px object-cover rounded-[48px] shadow-2xl"
              style={{ transform: 'rotate(0deg)', opacity: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnjoySection
