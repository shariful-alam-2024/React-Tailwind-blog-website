import React from 'react'
import { blogData } from '../../components/information/Info1'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <>
      <div className="pt-24 md:pt-6 px-4 py-8 sm:px-10 md:px-20 lg:px-52 lg:py-36">
        <div className="flex flex-col gap-4 sm:flex-row">
          <img
            src="/Image.png"
            alt="Profile"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
          />
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              Andrew Jonson
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:bg-gray-900 dark:text-white">
              Posted on 27th January 2022
            </p>
          </div>
        </div>
        <br />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Step-by-step guide to choosing great font pairs
        </h1>
        <br />
        <div className="flex items-center gap-4">
          <img
            src="/shuttle.png"
            alt="Shuttle Icon"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            Startup
          </h3>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/img3.png"
          alt=""
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
        />
      </div>

      {/* paragraph section */}
      <div className="px-4 py-8 sm:px-8 md:px-16 lg:px-32 xl:px-52 md:py-16">
        <h1 className="text-[#232536] font-semibold text-lg sm:text-xl dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h1>
        <p className="text-[#6D6E76] text-sm sm:text-base dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <br />
        <h1 className="text-[#232536] font-semibold text-lg sm:text-xl dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h1>
        <p className="text-[#6D6E76] text-sm sm:text-base dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <br />
        <p className="text-[#6D6E76] text-sm sm:text-base dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <br />
        <strong className="block">
          <b className="font-bold text-lg sm:text-xl">.</b> Lorem ipsum dolor
          sit amet
        </strong>
        <strong className="block">
          <b className="font-bold text-lg sm:text-xl">.</b> Non blandit massa
          enim nec scelerisque
        </strong>
        <strong className="block">
          <b className="font-bold text-lg sm:text-xl">.</b> Neque egestas congue
          quisque egestas
        </strong>
        <br />
        <p className="text-[#6D6E76] text-sm sm:text-base dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <br />
        <h1 className="text-[#232536] font-semibold text-lg sm:text-xl dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </h1>
        <p className="text-[#6D6E76] text-sm sm:text-base dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
      </div>

      {/* read next */}
      <div className="">
        <h1 className="px-4 py-4 max-w-6xl mx-auto font-bold text-xl">
          What to read next
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 py-4 max-w-6xl mx-auto gap-4">
          {blogData.map((item, id) => (
            <Link key={item.id} className="block border-2 p-4">
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <p className="font-bold mt-2">{item.name}</p>
              <p className="font-extrabold mt-1">{item.title}</p>
              <p className="mt-1">{item.description}</p>
            </Link>
          ))}
        </div>
        <hr className="w-[90%] mx-auto bg-[#6D6E76] h-0.5" />
      </div>

      {/* last section */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-4 max-w-6xl mx-auto text-center">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Join our team to be a part of our story
        </h1>
        <br />
        <p className="text-[#6D6E76] text-sm sm:text-base md:text-lg lg:text-xl dark:bg-gray-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <br />
        <button className="bg-[#FFD050] px-4 sm:px-6 py-1.5 text-sm sm:text-base font-medium text-black hover:text-green-600 transition-all duration-300 ease-in">
          Join Now
        </button>
      </div>
    </>
  )
}

export default Blog
