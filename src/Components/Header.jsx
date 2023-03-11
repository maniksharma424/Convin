import React from 'react'
import { Link } from 'react-router-dom'
import { LOGO_IMG } from '../constants'
import { motion } from 'framer-motion'
const Header = () => {

  
  return (
    <div className='header max-w-full flex justify-center  '>
        <div className="logo w-1/2   flex justify-end sm:text-[22px]"><img 
        className='sm:w-[200px] h-[100px] bg-center bg-contain bg-no-repeat'
        src={LOGO_IMG} alt="" srcset="" /></div>
        <motion.div  className=' w-1/2  flex justify-end items-center text-[20px]  font-[200]  '>
            <Link to="/"><li className='list-none hover:text-[#ffbd03]
             w-1/2'>Home</li></Link>
            <Link to="/history"><li className='list-none mx-[100px] w-1/2 hover:text-[#ffbd03]'>History</li></Link>
        </motion.div>
    </div>
  )
}

export default Header