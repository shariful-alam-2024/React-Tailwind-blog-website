import React, { useState } from 'react';
import {  NavLink} from 'react-router-dom'
import { navItems } from '../information/Info';
import { FaBars } from "react-icons/fa6";
import { CiDark } from 'react-icons/ci'
import { RxCross2 } from "react-icons/rx";
import { CiLight } from 'react-icons/ci'
const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0  right-0 ${
          darkMode ? 'dark:bg-gray-900 dark:text-white' : 'bg-white text-black'
        }`}
      >
        <nav
          className={`px-4 py-4 max-w-6xl mx-auto justify-between flex ${
            darkMode
              ? 'dark:bg-gray-900 dark:text-white'
              : 'bg-white text-black'
          }`}
        >
          <a href="/" className="">
            <img src="/logo.png" alt="" className="w-24 sm:w-32 md:w-40 bg-black" />
          </a>

          <ul className="md:flex gap-12 text-lg hidden text-center">
            {navItems.map(({ label, to }, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                  }
                  to={to}
                >
                  {' '}
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="cursor-pointer md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <RxCross2 className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </div>
          <button onClick={toggleDarkMode}>{darkMode ? (<CiDark className="w-7 h-5 ease-in animate-pulse" />) : (<CiLight className="w-7 h-5 ease-in animate-pulse" />)}</button>
          <button className="bg-green-500 px-6 py-1.5 text-center font-medium animate-pulse delay-500 text-white hover:text-orange-600 transition-all duration-300 ease-in">
            Subscribe
          </button>
        </nav>
        <div className="">
          <ul
            className={`md:hidden block space-y-4 gap-12 text-lg px-4 py-6 mt-14 bg-white ${
              isMenuOpen
                ? 'fixed w-full  top-0 right-0 transition-all ease-out duration-150'
                : 'hidden'
            }`}
          >
            {navItems.map(({ label, to }, i) => (
              <li key={i} className="text-black">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                  }
                  to={to}
                >
                  {' '}
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar;