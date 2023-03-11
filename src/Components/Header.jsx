import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {

  
  return (
    <div className='header max-w-full flex sm:py-3 border-[1px]'>
        <div className="logo w-1/2 flex justify-end">LinkStash</div>
        <div className=' w-1/2 flex justify-evenly'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/history"><li>History</li></Link>
        </div>

    </div>
  )
}

export default Header