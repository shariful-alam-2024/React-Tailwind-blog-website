import React from 'react'
import { profileData } from '../information/Info1'
import { Link } from 'react-router-dom'
import { LiaFacebook } from 'react-icons/lia'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaSquareInstagram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
const About = () => {
  return (
    <>
      <div className="pt-24 flex px-8 py-4 mx-auto max-w-6xl gap-10   ">
        <div className="bg-black text-white p-3">
          <h6 className="">ABOUT US</h6>
          <h1 className="text-3xl">
            We are a team of content writers who share their learnings
          </h1>
        </div>
        <div className="">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/*  */}
      </div>
      <div className="relative bottom-12 -z-20">
        <img src="/img100.png" alt="" className="" />
        <div className="bg-[#F4F0F8]">
          <div className=" grid grid-cols-2 px-12 py-6 gap-8 mx-auto max-w-6xl ">
            <div className="">
              <h3 className="">Our mision</h3>
              <br></br>
              <h1 className="">
                Creating valuable content for creatives all around the world
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="">
              <h3 className="">Our Vision</h3>
              <br></br>
              <h1 className="">
                A platform that empowers individuals to improve
              </h1>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus..
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 px-4 py-4 mx-auto max-w-6xl gap-12 ">
        <div className="">
          <h1 className="">Our team of creatives</h1>
          <br></br>
          <h1 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <br></br>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="">
          <img src="/img7.png" alt="" className="" />
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 px-4 py-4 mx-auto max-w-6xl gap-12 ">
        <div className="">
          <img src="/img8.png" alt="" className="" />
        </div>
        <div className="">
          <h1 className="">Why we started this Blog</h1>
          <br></br>
          <h1 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h1>
          <br></br>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
      {/*  */}
      <h1 className="text-center">List of Authors</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 px-4 py-4 mx-auto max-w-6xl gap-5 text-center">
        {profileData.map((item, id) => (
          <Link className="border-2 p-4 " key={id}>
            <img src={item.img} alt="" className="mx-auto text-center" />
            <p className="">{item.name}</p>
            <p className="">{item.title}</p>
            <div className="flex mx-[35%] space-x-2">
              <LiaFacebook className="bg-white  hover:bg-orange-600  hover:text-white ease-in-out text-black rounded-full p-1" />

              <AiFillTwitterCircle className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />

              <FaSquareInstagram className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />

              <FaLinkedin className="bg-white hover:bg-orange-600 hover:text-white text-black ease-in-out rounded-full p-1" />
            </div>
          </Link>
        ))}
      </div>
      {/*  */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-4 max-w-6xl mx-auto text-center">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Join our team to be a part of our story
        </h1>
        <br />
        <p className="text-[#6D6E76] text-sm sm:text-base md:text-lg lg:text-xl">
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

export default About
