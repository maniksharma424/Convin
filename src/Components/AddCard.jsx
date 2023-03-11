import React from "react";
import { useDispatch } from "react-redux";
import { ShowAddCardModal } from "../modalSlice";
import { motion } from "framer-motion";

const AddCard = () => {
  const dispatch = useDispatch()
  return (
    <motion.div whileHover={{scale:1.1}} className="w-3/12 sm:h-1/5 h-1/6 border-[1px]  sm:m-5 rounded-md sm:p-2 sm:text-[70px] flex justify-center items-center shadow-lg bg-[#80669d] text-white opacity-90 hover:opacity-100 ">
      <button
      className="font-[100] w-full h-full"
        onClick={() => {
      dispatch(ShowAddCardModal())
        }}
      >
        +
      </button>
    </motion.div>
  );
};

export default AddCard;
