import React from 'react'

const Header = () => {

  
  return (
    <div className='header max-w-full flex sm:py-3 border-[1px]'>
        <div className="logo w-1/2 flex justify-end">LinkStash</div>
        <div className=' w-1/2 flex justify-evenly'>
            <li>Home</li>
            <li>History</li>
        </div>

    </div>
  )
}

export default Header