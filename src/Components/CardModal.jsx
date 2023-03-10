import React, { useState } from 'react'
import { AddVideo } from '../utilities';

const CardModal = ({toggleModal,bucketId}) => {
    const [text,setText] = useState('')
    const[url,setUrl] = useState('')
    return (
        <div className="Card-modal bg-white w-1/3 h-1/3 border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-evenly ">
          <p>Add Video</p>
          <input
            value={text}
            placeholder="Name.."
            
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            className="sm:w-11/12 h-1/5 border-[1px] px-2"
          />
          <input
            value={url}
            placeholder="URL..."

            onChange={(e) => {
              setUrl(e.target.value);
            }}
            type="text"
            className="sm:w-11/12 h-1/5 border-[1px] px-2"
          />
          <button
            className="w-11/12 py-1 border-[1px] bg-black text-white"
            onClick={() => {
              text === "" || url === ''
                ? alert("please fill the details")
                :  AddVideo(text,url,bucketId) & toggleModal();
            }}
          >
            Done
          </button>
          <button
            onClick={() => {
              toggleModal();
            }}
            className="w-11/12 py-1 border-[1px] bg-white text-black"
          >
            Cancel
          </button>
        </div>
      );
}

export default CardModal