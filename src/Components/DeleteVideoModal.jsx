import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideDeleteModal } from "../modalSlice";
import { deleteVideo } from "../utilities";
import { motion } from "framer-motion";

const DeleteVideoModal = () => {
  const dispatch = useDispatch();
  const deleteVideoId = useSelector((store) => store?.videos?.deleteVideoId);

  let statementExecuted = false;

  const update = () => {
    setTimeout(function () {
      if (!statementExecuted) {
        dispatch(hideDeleteModal());
        statementExecuted = true;
      }
    }, 600);
  };

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      key={"box"}
      className="bucketModal  w-2/3 sm:w-1/3 h-1/5 bg-gray-50 rounded-xl border-[1px] absolute top-[200px] left-[100px] sm:left-[400px] sm:p-4 flex flex-col justify-around  px-3 "
    >
      <div className="w-11/12 flex justify-center">
        <p className="text-[25px] font-[400]">Are You Sure</p>
      </div>

      <button
        onClick={() => {
          deleteVideo(deleteVideoId);
          update();
        }}
        className="w-11/12 py-1 border-[1px]    rounded-md bg-[#80669d] text-white "
      >
        Delete
      </button>
      <button
        onClick={() => {
          update();
        }}
        className="w-11/12 py-1 border-[1px]  bg-white text-black rounded-md hover:bg-[#ffbd03]"
      >
        Cancel
      </button>
    </motion.div>
  );
};

export default DeleteVideoModal;
