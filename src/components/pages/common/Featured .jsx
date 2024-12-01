import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { itemData, myInfo } from '../../information/Info'
import { RiArrowRightSLine } from 'react-icons/ri'

const Featured = () => {
  const [inputValue, setInputValue] = useState()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <div className="grid px-4 py-4 max-w-6xl mx-auto gap-8 grid-cols-1 sm:grid-cols-2">
        {/* Left Section: Featured Post */}
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Featured Post
          </h1>
          <br />
          {itemData.map((item) => (
            <Link key={item.id}>
              <img
                className="w-full h-auto max-h-[350px] object-cover shadow-md border-2 border-cyan-800"
                src={item.img}
                alt={item.title}
              />
              <p className="font-medium text-sm sm:text-base ">{item.time}</p>
              <h1 className="text-2xl sm:text-3xl font-semibold ">
                {item.title}
              </h1>
              <br />
              <p className="text-[#6D6E76] font-medium text-sm sm:text-base dark:bg-gray-900 dark:text-white">
                {item.text}
              </p>
            </Link>
          ))}
          <br />
          <button className="flex bg-[#FFD050] px-6 py-1.5 items-center text-center font-medium text-black hover:text-green-600 transition-all duration-300 ease-in">
            Read More
            <Link>
              <RiArrowRightSLine className="pt-1 w-4 h-5" />
            </Link>
          </button>
        </div>

        {/* Right Section: All Posts */}
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-lg sm:text-xl underline underline-offset-4">
              All Posts
            </h1>
            <Link>
              <h2 className="hover:text-orange-700 transition text-emerald-600 font-semibold text-sm sm:text-base">
                View All
              </h2>
            </Link>
          </div>
          <div className="h-[400px] sm:h-[634px] overflow-y-scroll">
            <br />
            {myInfo.map((info) => (
              <Link key={info.id}>
                <p className="text-sm sm:text-base">{info.time}</p>
                <br />
                <p className="text-2xl sm:text-4xl">{info.comment}</p>
                <br />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured
