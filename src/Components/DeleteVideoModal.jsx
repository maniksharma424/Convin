import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideDeleteModal } from '../modalSlice'
import { deleteVideo } from '../utilities'

const DeleteVideoModal = () => {
    const dispatch = useDispatch()
    const deleteVideoId = useSelector(store=>store?.videos?.deleteVideoId)
  return (
    <div className="bucketModal  w-1/3 h-1/5 bg-gray-50 rounded-xl border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-around ">
          <div className='w-11/12 flex justify-center'><p className='text-[25px] font-[400]'>Are You Sure</p></div>
          
          <button
            onClick={() => {
                deleteVideo(deleteVideoId)
                dispatch(hideDeleteModal())
            }}
            className="w-11/12 py-1 border-[1px]    rounded-md bg-[#80669d] text-white "
          >
            Delete
          </button>
          <button
            onClick={() => {
                dispatch(hideDeleteModal())
            }}
            className="w-11/12 py-1 border-[1px]  bg-white text-black rounded-md hover:bg-[#ffbd03]"
          >
            Cancel
          </button>
        </div>
  )
}

export default DeleteVideoModal