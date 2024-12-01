import React from 'react';
import Banner from './common/Banner';
import Featured from './common/Featured ';
import Mission from './common/Mission';
import Author from './common/Author';
import Testimonial from './common/Testimonial';


// import Footer from '../common1/Footer';

const Home = () => {
  return (
    <>
      <Banner />
      <Featured />
      <Mission />
      <Author />
      <Testimonial />
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-4 max-w-6xl mx-auto text-center ">
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
      <br></br>
      <br></br>
    </>
  )
};

export default Home;