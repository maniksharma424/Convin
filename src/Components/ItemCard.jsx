import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddtoHistory } from "../historySlice";
import {
  showDeleteModal,
  showEditModal,
  showPlayVideoModal,
} from "../modalSlice";
import {
  addEditItem,
  addItem,
  removeItem,
  setDeleteVideoId,
} from "../videoSlice";
import VideoModal from "./VideoModal";
import { showMoveModal } from "../modalSlice";
import { setMoveVideoData } from "../bucketSlice";
import { timeOptions } from "../constants";
import { motion } from "framer-motion";

const ItemCard = ({ item }) => {
  const [selected, setSelected] = useState(false);

  const checkbox = useSelector((store) => store?.card.checkbox);
  const playVideo = useSelector((store) => store?.modal?.playVideoMOdal);

  const dispatch = useDispatch();

  const startIndex = item?.link.indexOf("v=") + 2;
  let VIDEO_URL = item?.link.substr(startIndex, 11);
  VIDEO_URL = `${VIDEO_URL}?autoplay=1`;
  console.log(VIDEO_URL);
  return (
    <>
      {checkbox ? (
        <input
          value={selected}
          onChange={(e) => {
            setSelected((n) => !n);
            selected
              ? dispatch(removeItem(item.id))
              : dispatch(addItem(item.id));
          }}
          type="checkbox"
        ></input>
      ) : null}

      <motion.div whileHover={{ scale: 1.1 }} className="w-3/12 sm:h-1/4 h-1/6 m-3 ">
        <div className="w-full h-5/6 sm:m-2  sm:p-2 border-[1px]  rounded-md bg-white flex flex-col justify-center items-center shadow-lg">
          <button
            onClick={() => {
              const now = new Date();
              const options = timeOptions;
              const formattedDateTime = now.toLocaleString("en-US", options);

              dispatch(showPlayVideoModal());
              dispatch(
                AddtoHistory({
                  name: item?.name,
                  link: item?.link,
                  time: formattedDateTime,
                })
              );
            }}
            className=" w-full h-full sm:text-[40px] font-[100]  "
          >
            {item?.name}
          </button>
        </div>
        <div className="btns flex justify-between items-center w-full h-1/6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              // deleteVideo(item.id)
              dispatch(setDeleteVideoId(item?.id));
              dispatch(showDeleteModal());
            }}
            className="border-[1px] sm:px-4 sm:text-[15px] text-[6px] bg-white font-[100] rounded-md shadow-lg hover:bg-[#b3374c] hover:text-white"
          >
            Delete
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              dispatch(showEditModal());
              dispatch(addEditItem(item?.id));
              dispatch(addEditItem(item?.bucketId));
            }}
            className="border-[1px] sm:px-4  bg-white font-[100] rounded-md  shadow-lg hover:bg-[#80669d] hover:text-white sm:text-[15px] text-[8px]"
          >
            Edit
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              dispatch(showMoveModal());
              dispatch(setMoveVideoData(item));
            }}
            className="border-[1px] sm:px-4 bg-white font-[100] rounded-md shadow-lg hover:bg-[#80669d] hover:text-white sm:text-[15px] text-[8px]"
          >
            Move to
          </motion.button>
        </div>
      </motion.div>
      {playVideo && createPortal(<VideoModal src={VIDEO_URL} />, document.body)}
    </>
  );
};

export default ItemCard;
