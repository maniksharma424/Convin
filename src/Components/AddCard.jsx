import React from "react";
import { useDispatch } from "react-redux";
import { ShowAddCardModal } from "../modalSlice";

const AddCard = () => {
  const dispatch = useDispatch()
  return (
    <div className="w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2 sm:text-[70px] flex justify-center items-center">
      <button
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
