import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowRightSLine } from 'react-icons/ri'
const Banner = () => {
  return (
    <>
      <div className="images w-full h-[720px] bg-gray-800">
        <div className="px-4 py-4 max-w-6xl mx-auto pt-36 lg:pt-72">
          <h3 className="text-white text-sm sm:text-base">Posted on startup</h3>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            Step-by-step guide to choosing
            <br /> great font pairs
          </h1>
          <br />
          <h2 className="text-[#FFFFFF] text-sm sm:text-base">
            By <span className="text-[#FFD050]">James West</span> | May 23, 2022
          </h2>
          <br />
          <p className="text-[#FFFFFF] text-xs sm:text-sm md:text-base">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.
          </p>
          <br />
          <button className="flex bg-green-500 px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 items-center text-center font-medium text-xs sm:text-sm md:text-base text-white hover:text-orange-600 transition-all duration-300 ease-in">
            Read More
            <Link>
              <RiArrowRightSLine className="pt-1 w-4 h-5" />
            </Link>
          </button>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default Banner
