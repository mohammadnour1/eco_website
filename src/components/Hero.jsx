import layer1 from "../assets/Layer_1.png"
import arrow from "../assets/arrow-forward-outline.png";
import Rectangle from "../assets/Rectangle 1.png";
import Rectangle3 from "../assets/Rectangle 3.png";
import Rectangle4 from "../assets/Rectangle 4.png";


import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#EEF2FB] py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the Latest Furniture Trends
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Shop the Latest Fashion Items and Stay ahead of the style game
            </p>
            <button className="px-8 py-2 bg-black text-white font-semibold  hover:shadow-xl transition-all hover:scale-105">
              Explore More
            </button>
          </div>

          {/* Right Images */}
          <div className="lg:w-1/2 relative ">
            <div className="grid grid-cols-2 gap-4 ">
              {/* Top Left Image */}
              <div className="relative ">
                <img
                  src={Rectangle}
                  alt="Furniture 1"
                  className="w-full h-65 object-cover rounded-2xl shadow-lg"
                />
                <span className="absolute top-3 left-3 bg-[#E3F0FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
              </div>

              {/* Top Right Image */}
              <div className="relative">
                <img
                  src={Rectangle3}
                  alt="Furniture 2"
                  className="w-full h-65 object-cover rounded-2xl shadow-lg"
                />
                <span className="absolute top-3 left-3 bg-[#E3F0FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
              </div>

              {/* Bottom Large Image */}
              <div className="relative col-span-2">
                <img
                  src={Rectangle4}
                  alt="Furniture 3"
                  className="w-full h-65 object-cover rounded-2xl shadow-lg"
                />
                <span className="absolute top-3 left-3 bg-[#E3F0FA] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
