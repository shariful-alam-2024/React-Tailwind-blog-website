import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs'
import { BsArrowLeftCircle } from 'react-icons/bs'
const Testimonial = () => {
     return (
       <>
         <div className="bg-[#FBF6EA] gap-6 grid grid-cols-1 sm:grid-cols-2 px-4 py-4 mx-auto max-w-6xl dark:bg-gray-900 dark:text-white ">
           <div className="p-5">
             <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
               TESTIMONIALs
             </h1>
             <br></br>
             <h1 className="text-sm sm:text-base lg:text-lg text-gray-700 dark:bg-gray-900 dark:text-white">
               What people say about our blog
             </h1>
             <p className="text-md sm:text-lg lg:text-xl text-gray-800 dark:bg-gray-900 dark:text-white">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor.
             </p>
           </div>

           <div className="p-5">
             <p className="text-md sm:text-lg lg:text-xl text-gray-800 dark:bg-gray-900 dark:text-white">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
             <br></br>
             <br></br>
             <br></br>
             <div className="flex gap-4 items-center ">
               <img
                 src="/profile.png"
                 alt="profile"
                 className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full"
               />
               <div className="">
                 <h1 className="text-sm sm:text-base lg:text-lg font-medium">
                   Jonathan Vallem
                 </h1>
                 <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:bg-gray-900 dark:text-white">
                   New york, USA
                 </p>
               </div>
               <div className="flex gap-4 ml-auto">
                 <BsArrowLeftCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 hover:bg-black hover:text-white rounded-full" />
                 <BsArrowRightCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#232536] text-white rounded-full hover:bg-orange-600" />
               </div>
             </div>
           </div>
         </div>
         <br></br>
       </>
     )
};

export default Testimonial;