import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideAddCardModal } from "../modalSlice";
import { AddVideo } from "../utilities";
import { motion } from "framer-motion";
import { useRef } from "react";

const CardModal = ({ bucketId }) => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="Card-modal  sm:w-1/3 w-2/3 h-2/5 border-[1px] absolute top-[200px] sm:left-[400px] left-[100px] sm:pl-7 sm:py-10 flex flex-col justify-evenly rounded-lg  shadow-xl bg-gray-50 sm:px-0 px-3 "
    >
      <div className="w-11/12 flex justify-center">
        <p className="sm:text-[25px] text-[10px] font-[400]">Add Video</p>
      </div>
      <input
        ref={inputRef}
        value={text}
        placeholder="Name.."
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        className="w-11/12  sm:py-2  border-[1px] sm:px-2 px-1 rounded-lg "
      />
      <input
        value={url}
        placeholder="URL..."
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        type="text"
        className="sm:w-11/12 sm:py-2 border-[1px] sm:px-2 rounded-lg "
      />
      <button
        className="w-11/12 py-1 border-[1px] bg-[#80669d] text-white rounded-lg hover:bg-[#80669d] hover:text-white "
        onClick={() => {
          text === "" || url === ""
            ? alert("please fill the details")
            : AddVideo(text, url, bucketId) & dispatch(hideAddCardModal());
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          dispatch(hideAddCardModal());
        }}
        className="w-11/12 py-1 border-[1px] bg-white text-black rounded-lg  hover:bg-[#ffbd03] hover:text-white"
      >
        Cancel
      </button>
    </motion.div>
  );
};

export default CardModal;
