import React from "react";
import { useDispatch } from "react-redux";
import { ShowAddCardModal } from "../modalSlice";

const AddCard = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-3/12 h-1/5 border-[1px]  sm:m-5 rounded-md sm:p-2 sm:text-[70px] flex justify-center items-center shadow-lg ">
      <button
      className="font-[100] w-full h-full"
        onClick={() => {
      dispatch(ShowAddCardModal())
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddCard;
