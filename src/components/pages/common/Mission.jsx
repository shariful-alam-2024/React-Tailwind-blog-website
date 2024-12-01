import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
const Mission = () => {
  return (
    <>
      <div className="mx-auto px-4 py-4 max-w-6xl ">
        <img src="/img18.png" alt="" className="right-0" />
        <div className="bg-[#F4F0F8] grid grid-cols-1 sm:grid-cols-2 gap-6 p-5 dark:bg-gray-900 dark:text-white">
          <div className="">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
              ABOUT US
            </h1>
            <br />
            <h1 className="text-base sm:text-lg lg:text-xl">
              We are a community of content writers who share their learnings
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <button className="flex items-center gap-1 text-sm sm:text-base">
              Read More
              <IoIosArrowForward className="pt-1" />
            </button>
          </div>
          <div className="">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
              Our Mission
            </h1>
            <br />
            <h1 className="text-base sm:text-lg lg:text-xl">
              Creating valuable content for creatives all around the world
            </h1>
            <p className="text-sm sm:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  )
}

export default Mission
