import React from 'react'
import { useDispatch } from 'react-redux'
import { hidePlayVideoModal } from '../modalSlice'

const VideoModal = ({src}) => {
    const dispatch = useDispatch()
  return (<>
    <div className='Card-modal bg-white w-1/3 h-1/3 border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-evenly'>
    <iframe width="250" height="300" src={`https://www.youtube.com/embed/${src}`} title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <button onClick={()=>{
        dispatch(hidePlayVideoModal())
    }} className='border-[1px] border-black px-2'>close</button>
    </div>
   
  </>
  )
}

export default VideoModal