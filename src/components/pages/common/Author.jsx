import React from 'react';
import { homeData } from '../../information/Info1';
import {Link  } from "react-router-dom"
import { LiaFacebook } from 'react-icons/lia';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLinkedin, FaSquareInstagram } from 'react-icons/fa6';
const Author = () => {
     return (
       <>
         <div className="px-4 py-4 mx-auto max-w-6xl">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-4 mx-auto max-w-6xl gap-4">
             {homeData.map((item, id) => (
               <Link className="border-2 p-5" key={id}>
                 <img src={item.img} alt="" className="w-full object-cover" />
                 <br></br>
                 <p className="text-lg font-semibold">{item.name}</p>
                 <p className="text-gray-600 dark:bg-gray-900 dark:text-white">
                   {item.title}
                 </p>
                 <div className="flex mt-2  space-x-2">
                   <LiaFacebook className="bg-white  hover:bg-orange-600  hover:text-white ease-in-out text-black rounded-full p-1" />

                   <AiFillTwitterCircle className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />

                   <FaSquareInstagram className="bg-white  hover:bg-orange-600 hover:text-white ease-in-out text-black rounded-full p-1" />

                   <FaLinkedin className="bg-white hover:bg-orange-600 hover:text-white text-black ease-in-out rounded-full p-1" />
                 </div>
               </Link>
             ))}
           </div>
           <br></br>
           <marquee scrollamount="20" className="bg-green-500 p-6">
             {' '}
             <img src="/img19.png" alt="" className="w-full " />
           </marquee>
         </div>
         <br></br>
       </>
     )
};

export default Author;