import React from 'react';
import { motion } from 'framer-motion';
import { opacity, slideInFromLeft, slideInFromRight } from '../../utils/motion';
import Img from '../../Img';
import { Link } from 'react-router-dom';

export default function Hero() {
  
  return (
    <div className='flex  h-[90vh] w-full md:px-8 px-3 md:mt-5 '>
      <div className="flex flex-col md:flex-row justify-center  items-center h-full rounded-3xl w-full bg-gray-900 ">
        <div className="relative text-center md:text-left md:mt-0  mt-10 ">
          <motion.h5 variants={slideInFromLeft(-90, 0.2)} animate='visible' initial='hidden' className='text-[15px] md:text-[25px] leading-3 text-white ml-3 '>Beats Solo</motion.h5>
          <motion.h3  variants={slideInFromRight(90, 0.4)} animate='visible' initial='hidden' className='text-[30px] md:text-[60px] text-[#00ff11] mt-1 ml-2 font-extrabold md:mb-32 xlg:mb-36 '>Wireless</motion.h3>

          <div className="lg:pl-64 pl-14 inline md:hidden relative z-[1] ">
            <img src="/images/ProductsImage/Devies/hi.png" alt="" className='h-[280px] sm:h-[360px] xlg:h-[490px] xlg:w-[400px] rotate-12  dropShadow ' />
          </div>
          <div className="md:hidden inline">
          <motion.h1 variants={opacity(0.6)} animate='visible' initial='hidden' className='text-center text-[40px] sm:text-[60px] md:text-[100px] xlg:text-[160px] dropShadowText font-extrabold text-white leading-[160px] absolute top-28 -ml-3 md:top-24  xlg:leading-[150px] z-[0] flex'>HEAD</motion.h1>
           <motion.span variants={opacity(0.7)} animate='visible' initial='hidden' className='text-center text-[40px] sm:text-[60px] md:text-[100px] xlg:text-[160px] dropShadowText font-extrabold text-white leading-[160px] absolute top-28 -ml-3 md:top-24  xlg:leading-[150px]  z-[6]'>PHONE</motion.span>
          </div>
          <motion.h1  variants={opacity(0.6)} animate='visible' initial='hidden' className='md:inline hidden text-center text-[40px] sm:text-[60px] md:text-[100px] xlg:text-[160px] dropShadowText font-extrabold text-white leading-[120px] absolute top-28 -ml-3 md:ml-0 md:top-24  xlg:leading-[150px]'>HEADPHONE</motion.h1>
          <motion.div variants={slideInFromLeft(200,0.8)} animate='visible' initial='hidden' className="w-[180px] sm:w-80 ml-3 text-[10px] md:text-[13px] mb-2  text-gray-300 ">
            <p className=''>Explore our curated collection of the season's hottest products. Elevate your style, upgrade your gadgets, and embrace the latest trends with our handpicked selection</p>
          </motion.div>
          <Link to='/products'>
          <motion.button variants={slideInFromLeft(-90,1)} animate='visible' initial='hidden' className='ml-2 mt-5 py-3 px-7 w-[200px] rounded-3xl text-[13px] btn mb-5'>Shop Now</motion.button>
          </Link>
        </div>
        <motion.div variants={slideInFromLeft(-90,0.8)} animate='visible' initial='hidden'  className="lg:pl-64 md:inline hidden ">
          <Img src="/images/ProductsImage/Devies/hi.png" alt="HeadPhone" className='h-[260px] md:h-[360px] md:w-[360px] xlg:h-[490px] xlg:w-[400px] rotate-12  dropShadow' />
        </motion.div>
      </div>
    </div>
  )
}
