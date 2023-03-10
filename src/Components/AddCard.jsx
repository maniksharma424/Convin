import React from "react";

const AddCard = ({ toggleModal }) => {
  return (
    <div className="w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2 sm:text-[70px] flex justify-center items-center">
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddCard;
