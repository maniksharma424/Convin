import React from "react";
import { useDispatch } from "react-redux";
import { hidePlayVideoModal } from "../modalSlice";

const VideoModal = ({ src }) => {
  const dispatch = useDispatch();
  return (
    <>
    
      <div className="Card-modal bg-white w-2/3 h-2/3 absolute top-[100px] left-[250px]  flex flex-col items-end justify-evenly">
      
        <iframe
        className="w-full h-full rounded-lg"
        
          width="250"
          height="300"
          src={`https://www.youtube.com/embed/${src}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <button
          onClick={() => {
            dispatch(hidePlayVideoModal());
          }}
          className="border-[1px] w-full mt-3  sm:text-[30px] px-2 rounded-md bg-white hover:bg-[#80669d] hover:text-white font-[100]"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default VideoModal;
