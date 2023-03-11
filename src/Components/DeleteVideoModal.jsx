import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideDeleteModal } from '../modalSlice'
import { deleteVideo } from '../utilities'

const DeleteVideoModal = () => {
    const dispatch = useDispatch()
    const deleteVideoId = useSelector(store=>store?.videos?.deleteVideoId)
  return (
    <div className="bucketModal bg-white w-1/3 h-fit border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-around ">
          <p>Are You sure</p>
          
          <button
            onClick={() => {
                deleteVideo(deleteVideoId)
                dispatch(hideDeleteModal())
            }}
            className="w-11/12 py-1 border-[1px]  bg-white text-black"
          >
            Delete
          </button>
          <button
            onClick={() => {
                dispatch(hideDeleteModal())
            }}
            className="w-11/12 py-1 border-[1px]  bg-white text-black"
          >
            Cancel
          </button>
        </div>
  )
}

export default DeleteVideoModal