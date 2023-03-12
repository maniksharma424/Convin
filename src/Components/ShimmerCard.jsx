import React from 'react'
import { Shimmer } from 'react-shimmer'
import { Breathing } from 'react-shimmer'
const ShimmerCard = () => {
  return (
    <div className=' max-w-full sm:p-20 sm:mt-14 flex flex-wrap justify-start items-start'>
            
        <Shimmer className='m-5 rounded-md' height={150} width={250}/>
        <Shimmer className='m-5 rounded-md' height={150} width={250}/>
        <Shimmer className='m-5 rounded-md' height={150} width={250}/>
        <Shimmer className='m-5 rounded-md' height={150} width={250}/>

    </div>
  )
}

export default ShimmerCard