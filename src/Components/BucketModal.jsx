import React, { useState } from "react";
import { addBucket } from "../utilities";
const BucketModal = ({ toggleModal }) => {
  const [text, setText] = useState("");

  return (
    <div className="bucketModal bg-white w-1/3 h-1/3 border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-evenly ">
      <p>Create bucket</p>
      <input
        value={text}
        placeholder="Name.."
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        className="sm:w-11/12 h-1/5 border-[1px] px-2"
      />
      <button
        className="w-11/12 py-1 border-[1px] bg-black text-white"
        onClick={() => {
          text === ""
            ? alert("please give a name")
            : addBucket(text) & toggleModal();
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
};

export default BucketModal;
