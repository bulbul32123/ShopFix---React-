import React from 'react'
import  { motion } from 'framer-motion'
import Img from '../../Img'
import { Link } from 'react-router-dom'
import { opacity, slideInFromRight } from '../../utils/motion'

export default function OfferSection({ desc, product,date,src,qulity ,sesonSale,description}) {
  return (
    <motion.div variants={opacity(0.5)} animate='hidden' whileInView='visible' viewport={{ once: true }}  className='flex md:justify-between justify-center flex-col md:flex-row items-center rounded-3xl h-full md:h-72 w-full bg-green-500 mt-24 px-10'>
        <div className="flex justify-center flex-col md:flex-row items-center h-full w-full">
        <div className="md:mt-0 mt-10">
          <p className='text-gray-800 ml-2'>{desc}</p>
          <h1 className= 'text-[40px] md:text-[90px] text-white font-bold md:leading-[100px]'>{product}</h1>
          <p className='text-gray-800 ml-2'>{date}</p>
        </div>
          <motion.div variants={slideInFromRight} animate='hidden' whileInView='visible' viewport={{ once: true }}>
            <Img src={src} alt="" className='lg:h-[400px] h-[200px] w-[200px]  lg:w-[400px] dropShadow scale-x-[-1] md:-mt-10 md:ml-0 ' />
          </motion.div>
        </div>
        <div className="mb-10">
          <p className='text-gray-800 ml-2'>{qulity}</p>
          <h4 className='text-[40px] text-white font-bold leading-[50px]'>{sesonSale}</h4>
          <p className='text-gray-800 ml-2 mb-4'>{description}</p>
          <Link to={`/products`} className='py-2 rounded-3xl px-5 text-white bg-black'>Shop</Link>
        </div>
    </motion.div>
  )
}
