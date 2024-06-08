import React from 'react';
import Banner from './banner/Banner';
import { motion } from 'framer-motion';
import { opacity, slideInFromTop } from '../../utils/motion';
import Img from '../../Img';
import { Link } from 'react-router-dom';

export default function Type() {
  return (
    <>
      <motion.div className='flex justify-center flex-col flex-1 md:flex-row items-center h-full w-full lg:px-10'>
        <div className="h-full w-full flex justify-center  items-center flex-col xmd:flex-row gap-10 mb-5 overflow-hidden">

          <motion.div variants={opacity(0.9)} animate='hidden' whileInView='visible' viewport={{ once: true }} className='h-full pb-10 w-full xmd:w-80 xmd:h-72  bg-black rounded-3xl mt-10 relative overflow-hidden'>
            <h5 className={`text-gray-200 mt-20 ml-5 text-[17px]`}>Enjoy</h5>
            <h5 className={`text-white mt-1 ml-5 text-[26px]`}>with</h5>
            <div className="z-[3] relative">
              <h4 className={`text-white dropShadow font-extrabold mt-0 ml-5 text-[35px]`}>EARPHONE</h4>
              <Link to={'/products'}><button className={`py-2 px-5 text-black bg-[#00ff11] ml-5 text-[15px] font-light rounded-3xl z-[4]`}>Browse</button></Link>
            </div>
            <div className="z-[1]">
              <Img src='/images/ProductsImage/Devies/EarPhones.png'
                alt="" className={`hover:scale-105 transition-all duration-500 absolute top-0 h-[300px] w-[300px]  -right-4 dropShadow z-[1]`} />
              <div className="h-40 w-40 bg-white blur-[120px] absolute  right-0" />
            </div>
          </motion.div>



          <motion.div variants={opacity(0.9)} animate='hidden' whileInView='visible' viewport={{ once: true }} className='h-full pb-10 w-full xmd:w-96 xmd:h-72 bg-[#ffd902] rounded-3xl mt-10 relative overflow-hidden'>
            <h5 className={`text-gray-700 mt-20 ml-5 text-[17px]`}>Trend</h5>
            <h5 className={`text-white mt-1 ml-5 text-[26px]`}>Devices</h5>
            <div className="z-[3] relative">
              <h4 className={`text-gray-800 dropShadow font-extrabold mt-0 ml-5 text-[45px]`}>LAPTOP</h4>
              <Link to={'/products'}><button className={`py-2 px-5 text-white bg-[#ff0909] ml-5 text-[15px] font-light rounded-3xl z-[4]`}>Browse</button></Link>
            </div>
            <div className="z-[1]">
              <Img src='/images/ProductsImage/Devies/mac.png'
                alt="" className={`hover:scale-105 transition-all duration-500 absolute -top-10 h-[300px] w-[300px] rotate-[20deg] -right-4 dropShadow z-[1]`} />
              <div className="h-40 w-40 bg-white blur-[120px] absolute -right-12" />
            </div>
          </motion.div>
          <motion.div variants={opacity(0.9)} animate='hidden' whileInView='visible' viewport={{ once: true }} className='h-full pb-10 w-full xmd:w-72 xmd:h-72 bg-[#82CD47] rounded-3xl mt-10 relative overflow-hidden'>
            <h5 className={`text-gray-700 mt-20 ml-5 text-[17px]`}>Fashion</h5>
            <h5 className={`text-white mt-1 ml-5 text-[26px]`}>Cloths</h5>
            <div className="z-[3] relative">
              <h4 className={`text-[#352F44] dropShadow font-extrabold mt-0 ml-5 text-[50px]`}>T-SHIRTS</h4>
              <Link to={'/products'}><button className={`py-2 px-5 text-black bg-[#00ff11] ml-5 text-[15px] font-light rounded-3xl z-[4]`}>Browse</button></Link>
            </div>
            <div className="z-[1]">
              <Img src='/images/ProductsImage/Devies/T-Start.png'
                alt="" className={`hover:scale-105 transition-all duration-500 absolute  h-[300px] w-[300px] rotate-[20deg] -top-5 dropShadow z-[1] -right-12`} />
              <div className="h-40 w-40 bg-white blur-[120px] absolute -right-12" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div variants={opacity(0.3)} animate='hidden' whileInView='visible' viewport={{ once: true }} className='flex justify-center flex-col flex-1 xmd:flex-row items-center h-full w-full lg:px-10'>
        <motion.div variants={slideInFromTop} animate='hidden' whileInView='visible' viewport={{ once: true }} className="h-full w-full flex justify-center items-center flex-col xmd:flex-row gap-10 mb-10 overflow-hidden">
          <div className="h-ful pb-10 w-full xmd:h-72 xmd:w-[40rem] bg-gray-200 rounded-3xl mt-10 relative overflow-hidden">
            <h5 className='text-gray-700 mt-20 ml-5 text-[17px]'>Best</h5>
            <h5 className='text-gray-900 mt-1 ml-5 text-[26px]'>Gaming</h5>
            <h4 className='text-green-500 dropShadow font-extrabold mt-0 ml-5 text-[45px] z-10 relative'>CONSOLE</h4>
            <Link to='/products'><button className='py-2 px-5 bg-black text-white ml-5 text-[15px] font-light rounded-3xl'>Browse</button></Link>
            <Img src="/images/ProductsImage/Devies/Ps5.png" alt="" className='absolute  hover:scale-105 transition-all duration-500 top-0 h-[300px] w-[300px] -right-12 dropShadow z-[1]' />
          </div>
          <motion.div variants={opacity(0.5)} animate='hidden' whileInView='visible' viewport={{ once: true }} className="h-ful pb-10 w-full xmd:h-72 xmd:w-80 bg-[#4477CE] rounded-3xl mt-10 relative overflow-hidden">
            <h5 className='text-gray-700 mt-20 ml-5 text-[17px]'>New</h5>
            <h5 className='text-white mt-1 ml-5 text-[26px]'>Libray</h5>
            <div className="z-[3] relative">
              <h4 className='text-[#ffd902] dropShadow font-extrabold mt-0 ml-5 text-[45px]'>Books</h4>
              <Link to='/products'><button className='py-2 px-5 bg-[#ffffff] text-black ml-5 text-[15px] font-light rounded-3xl z-[4]'>Browse</button></Link>
            </div>
            <div className="z-[1]">
              <Img src="/images/ProductsImage/Devies/Books.png" alt="" className='hover:scale-105 transition-all duration-500 absolute -top-5 h-[300px] w-[300px] -right-10 dropShadow z-[1]' />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div variants={opacity(0.5)} animate='hidden' whileInView='visible' viewport={{ once: true }} className="">
        <Banner />
      </motion.div>
    </>
  )
}




