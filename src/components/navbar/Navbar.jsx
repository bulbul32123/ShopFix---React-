import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { slideInFromLeft } from '../../utils/motion'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center h-20 w-full bg-transparent px-5 md:px-20 sticky top-0 z-30'>
      <motion.div variants={slideInFromLeft(20, 0.1)} animate='hidden' whileInView='visible' viewport={{ once: true }} className="flex text-white justify-center items-center">
        <Link to='/' className='text-white font-extrabold mr-6'>
          <img src="/images/logo.jpeg" alt="Logo" className='rounded-full h-12 w-12 ' />
        </Link>
        <div className="md:inline hidden">
          <Link to='/category' className='mx-3 font-extrabold' >Category</Link>
          <Link to='/products' className='mx-3 font-extrabold' >Product</Link>
        </div>
      </motion.div>
      <motion.div variants={slideInFromLeft(20, 0.3)} animate='hidden' whileInView='visible' viewport={{ once: true }} className="flex justify-center items-center">
        <span className='text-white cursor-pointer mr-4'><FaSearch size={20} /></span>
        <Link to='cart'>
          <span className='text-white cursor-pointer relative'> <FaShoppingCart size={20} /><span className='text-white text-[9px] bg-green-500 py-[-3px] px-[3px]  rounded-full absolute -top-1 -right-2'>2</span></span>
        </Link>
        <button className='text-white md:inline hidden border border-white py-2 px-4 rounded-3xl ml-4 text-sm font-medium cursor-pointer'>Contact</button>
      </motion.div>
    </div>
  )
}
