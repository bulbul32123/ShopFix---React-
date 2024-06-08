import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function Banner() {
  return (
    <div className='flex  justify-center flex-col md:flex-row md:justify-around items-center bg-gray-900 h-60 md:h-20 w-full'>
         <div className="flex mt-5 md:mt-0 ml-8 md:ml-0">
         <FaTruckFast size={35} color='#00ff11' className=' mr-4 mt-1'/>
         <div className="">
          <h4 className='font-semibold text-white' >Free Shipping</h4>
          <p className='leading-3 text-gray-500 font-light' >Free Shipping On All Orders </p>
         </div>
         </div>
         <div className="flex mt-5 md:mt-0">
         <FaHeadphonesAlt size={35} color='#00ff11' className='mr-4 mt-1'/>
         <div className="">
          <h4 className='font-semibold text-white'>Online Support 24/7</h4>
          <p className='leading-3 text-gray-500 font-light'>Technical Support 24/7</p>
         </div>
         </div>
         <div className="flex mt-5 md:mt-0 -ml-8 md:ml-0">
         <IoWallet size={35} color='#00ff11' className='mr-4 mt-1'/>
         <div className="">
          <h4 className='font-semibold text-white'>Secure Payment</h4>
          <p className='leading-3 text-gray-500 font-light'>All Cards Accepted</p>
         </div>
         </div>
         
    </div>
  )
}
