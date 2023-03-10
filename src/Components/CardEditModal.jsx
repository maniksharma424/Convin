import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideEditModal } from "../modalSlice";

import { editVideo } from "../utilities";
import { removeEditItem } from "../videoSlice";


const CardEditModal = ({ toggleModal }) => {

  const [text, setText] = useState("");

  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const I_D_S = useSelector((store) => store?.videos?.editItems);

  const id = I_D_S[0];

  const bucketId = I_D_S[1];
  
  return (
    <div className="Card-modal bg-white w-1/3 h-1/3 border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-evenly ">
      <p>Add Video</p>
      <input
        value={text}
        placeholder="Edit Name.."
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        className="sm:w-11/12 h-1/5 border-[1px] px-2"
      />
      <input
        value={url}
        placeholder="Edit URL..."
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        type="text"
        className="sm:w-11/12 h-1/5 border-[1px] px-2"
      />
      <button
        className="w-11/12 py-1 border-[1px] bg-black text-white"
        onClick={() => {
          if (text === "" || url === "") {
            alert("please fill the details");
          } else {
            editVideo(id, text, url, bucketId);
            dispatch(hideEditModal());
            dispatch(removeEditItem());
          }
        }}
      >
        Done
      </button>
      <button
        onClick={() => {
          dispatch(hideEditModal());
          dispatch(removeEditItem());
        }}
        className="w-11/12 py-1 border-[1px] bg-white text-black"
      >
        Cancel
      </button>
    </div>
  );
};

export default CardEditModal;
