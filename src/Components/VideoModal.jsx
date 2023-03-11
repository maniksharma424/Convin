import React from "react";
import { useDispatch } from "react-redux";
import { hidePlayVideoModal } from "../modalSlice";
import { motion } from "framer-motion";

const VideoModal = ({ src }) => {
  const dispatch = useDispatch();
  return (
    <>
    
      <motion.div
  initial={{ y: "50%", opacity: 0, scale: 0.5 }}
  animate={{ y: 0, opacity: 1, scale: 1 }}      
      className="Card-modal bg-white sm:w-2/3 sm:h-2/3 absolute top-[100px] sm:left-[250px] left-[100px] w-2/3 h-1/3  flex flex-col items-end justify-evenly">
      
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
          className="border-[1px] w-full mt-3  sm:text-[30px] px-2 rounded-md text-white bg-[#80669d]  font-[100]"
        >
          Close
        </button>
      </motion.div>
    </>
  );
};

export default VideoModal;
