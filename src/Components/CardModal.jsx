import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { hideAddCardModal } from '../modalSlice';
import { AddVideo } from '../utilities';

const CardModal = ({bucketId}) => {
    const [text,setText] = useState('')
    const[url,setUrl] = useState('')
    const dispatch = useDispatch()
    return (
        <div className="Card-modal  w-1/3 h-2/5 border-[1px] absolute top-[200px] left-[400px] sm:pl-7 sm:py-10 flex flex-col justify-evenly rounded-lg  shadow-xl bg-gray-50 ">
          
          <div className='w-11/12 flex justify-center'><p className='text-[25px] font-[400]'>Add Video</p></div>
          <input
            value={text}
            placeholder="Name.."
            
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            className="sm:w-11/12 py-2 border-[1px] px-2 rounded-lg "
          />
          <input
            value={url}
            placeholder="URL..."

            onChange={(e) => {
              setUrl(e.target.value);
            }}
            type="text"
            className="sm:w-11/12 py-2 border-[1px] px-2 rounded-lg "
          />
          <button
            className="w-11/12 py-1 border-[1px] bg-[#80669d] text-white rounded-lg hover:bg-[#80669d] hover:text-white "
            onClick={() => {
              text === "" || url === ''
                ? alert("please fill the details")
                :  AddVideo(text,url,bucketId) & dispatch(hideAddCardModal())
            }}
          >
            Done
          </button>
          <button
            onClick={() => {
              dispatch(hideAddCardModal())
            }}
            className="w-11/12 py-1 border-[1px] bg-white text-black rounded-lg  hover:bg-[#ffbd03] hover:text-white"
          >
            Cancel
          </button>
        </div>
      );
}

export default CardModal