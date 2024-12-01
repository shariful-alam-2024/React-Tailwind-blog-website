import React, { useState } from 'react'
import { navItems } from '../information/Info'
import { NavLink } from 'react-router-dom'
import { LiaFacebook } from 'react-icons/lia'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaSquareInstagram } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
const Footer = () => {

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
      setEmail("");
    }
  }
  return (
    <>
      <div className="bg-[#232536]">
        <div className="px-4 py-4 max-w-6xl mx-auto flex justify-between items-center text-white">
          <a href="/" className="">
            <img src="/logo.png" alt="Logo" className="w-24 sm:w-32 md:w-40" />
          </a>
          <ul className="hidden md:flex gap-6 lg:gap-12 text-lg text-center">
            {navItems.map(({ label, to }, i) => (
              <li key={i}>
                <NavLink
                  to={to}
                  className="hover:text-orange-400 transition duration-300"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#4C4C4C] px-4 py-6 md:py-8 max-w-6xl mx-auto mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-white text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl">
              Subscribe to our newsletter to get the latest updates and news
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full md:w-auto bg-[#232536] text-white rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your Email"
              />
              <button
                onClick={handleSubscribe}
                className="bg-green-500 px-6 py-2 animate-pulse rounded-md text-white hover:text-orange-600 hover:bg-green-600 transition-all duration-300 ease-in-out"
              >
                Subscribe
              </button>
            </div>
            {showPopup && (
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-4 rounded shadow-lg">
                Subscription successfully!
              </div>)}
          </div>
        </div>
        <div className="px-4 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left">
          <div className="text-white mb-4 sm:mb-0">
            <h1>Finstreet 118 2561 Fintown</h1>
            <h1>Hello@finsweet.com 020 7993 2905</h1>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:opacity-80">
              <LiaFacebook className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />
            </a>
            <a href="#" className="hover:opacity-80">
              <AiFillTwitterCircle className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />
            </a>
            <a href="#" className="hover:opacity-80">
              <FaSquareInstagram className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />
            </a>
            <a
              href="https://www.google.com/search?q=hablu+programmer&oq=&gs_lcrp=EgZjaHJvbWUqCQgGECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQk1NDE2OWowajeoAgiwAgE&sourceid=chrome&ie=UTF-8"
              className="hover:opacity-80"
            >
              <FaLinkedin className="bg-white hover:bg-orange-600 hover:text-white text-black ease-in-out rounded-full p-1" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
