import React from 'react';
import { LiaFacebook } from 'react-icons/lia'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaLinkedin, FaSquareInstagram } from 'react-icons/fa6'
import { Authors } from '../../information/Info';
import {Link} from 'react-router-dom'
const Author1 = () => {
     return (
       <>
         <div className="grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 md:px-10 lg:px-32 py-10 mx-auto gap-24 max-w-6xl">
           <div className="pt-6 md:pt-12">
             <img
               src="/img20.png"
               alt="Blog Logo"
               className="w-full sm:w-[400px] md:w-[500px] lg:w-[645px] h-auto"
             />
           </div>
           <div className="pt-6 md:pt-12">
             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
               Hey there, I’m Andrew Jonhson and welcome to my Blog
             </h1>
             <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed dark:bg-gray-900 dark:text-white">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
               blandit massa enim nec. Scelerisque viverra mauris in aliquam
               sem. At risus viverra adipiscing at in tellus.
             </p>
             <div className="flex mt-4  space-x-2">
               <LiaFacebook className="bg-violet-800 text-white hover:bg-orange-600 w-6 h-6 hover:text-white ease-in-out  rounded-full animate-pulse text-lg" />
               <AiFillTwitterCircle className="bg-black hover:bg-orange-600 w-6 h-6 hover:text-white ease-in-out text-sky-600 rounded-full animate-pulse text-lg" />
               <FaSquareInstagram className="bg-emerald-500 hover:bg-orange-600 w-6 h-6 hover:text-white ease-in-out text-black rounded-full animate-pulse text-lg" />
               <FaLinkedin className="bg-green-700 hover:bg-orange-600 w-6 h-6 hover:text-white ease-in-out text-black rounded-full animate-pulse text-lg" />
             </div>
           </div>
         </div>

         <div className="px-4 sm:px-6 md:px-10 lg:px-32 py-10 mx-auto gap-24 max-w-6xl">
           {Authors.map((item, id) => (
             <Link
               className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-32 items-center sm:items-start"
               key={id}
             >
               <img
                 src={item.img}
                 alt=""
                 className=" pt-8 w-full sm:w-[240px] md:w-[320px] lg:w-[412px] h-auto"
               />
               <div className=" pt-8 text-center sm:text-left">
                 <p className="text-lg md:text-xl lg:text-2xl font-medium">
                   {item.title}
                 </p>
                 <p className="text-sm md:text-base lg:text-lg mt-2 lg:font-bold">
                   {item.text}
                 </p>
                 <p className="text-xs md:text-sm lg:text-base mt-1">
                   {item.description}
                 </p>
               </div>
             </Link>
           ))}
         </div>
       </>
     )
};

export default Author1;