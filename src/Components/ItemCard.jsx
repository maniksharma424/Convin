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

const ItemCard = ({ item }) => {
  const [selected, setSelected] = useState(false);

  const checkbox = useSelector((store) => store?.card.checkbox);
  const playVideo = useSelector((store) => store?.modal?.playVideoMOdal);

  const dispatch = useDispatch();

  const startIndex = item?.link.indexOf("v=") + 2;
  const VIDEO_URL = item?.link.substr(startIndex, 11);
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

      <div className="w-3/12 h-1/4 m-3 ">
        <div className="w-full h-5/6 sm:m-2  sm:p-2 border-[1px]  rounded-md bg-white flex flex-col justify-center items-center shadow-lg">
          <button
            onClick={() => {
              const now = new Date();
              const options = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
                timeZone: "UTC",
              };
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
          <button
            onClick={() => {
              // deleteVideo(item.id)
              dispatch(setDeleteVideoId(item?.id));
              dispatch(showDeleteModal());
            }}
            className="border-[1px] px-4   bg-white font-[100] rounded-md shadow-lg "
          >
            Delete
          </button>
          <button
            onClick={() => {
              dispatch(showEditModal());
              dispatch(addEditItem(item?.id));
              dispatch(addEditItem(item?.bucketId));
            }}
            className="border-[1px] px-4  bg-white font-[100] rounded-md  shadow-lg"
          >
            Edit
          </button>

          <button
            onClick={() => {
              dispatch(showMoveModal());
              dispatch(setMoveVideoData(item));
            }}
            className="border-[1px] px-4 bg-white font-[100] rounded-md shadow-lg "
          >
            Move to
          </button>
        </div>
      </div>
      {playVideo && createPortal(<VideoModal src={VIDEO_URL} />, document.body)}
    </>
  );
};

export default ItemCard;
