import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddtoHistory } from "../historySlice";
import { showDeleteModal, showEditModal, showPlayVideoModal } from "../modalSlice";
import { deleteVideo } from "../utilities";
import { addEditItem, addItem, removeItem, setDeleteVideoId } from "../videoSlice";
import VideoModal from "./VideoModal";
import { showMoveModal } from "../modalSlice";
import { setMoveVideoData } from "../bucketSlice";

const ItemCard = ({item}) => {
  
  const [selected, setSelected] = useState(false);

  const checkbox  = useSelector((store) => store?.card.checkbox);
  const playVideo = useSelector(store=>store?.modal?.playVideoMOdal)

  const dispatch = useDispatch();

  const startIndex = item?.link.indexOf("v=") + 2
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
      
      <div className="w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2">
        <p>{item?.name}</p>
        <button onClick={()=>{
          // deleteVideo(item.id)
          dispatch(setDeleteVideoId(item?.id))
          dispatch(showDeleteModal())
        }} className="border-[1px] px-3">Delete</button>
        <button
          onClick={() => {
            dispatch(showEditModal())
            dispatch(addEditItem(item?.id));
            dispatch(addEditItem(item?.bucketId));
          }}
          className="border-[1px] px-3"
        >
          Edit
        </button>
        <button onClick={()=>{
          const now = new Date();
          
          dispatch(showPlayVideoModal())
          dispatch(AddtoHistory({
            "name":item?.name,
            "link":item?.link,
            "time":now.toLocaleTimeString()
  
          }))
        }} className="border-[1px] px-3">Play</button>
        <button onClick={()=>{dispatch(showMoveModal())
        dispatch(setMoveVideoData(item))
        }} className="border-[1px] px-3">Move to</button>
      </div>
      {playVideo && createPortal(<VideoModal src={VIDEO_URL}/>,document.body)}
    </>
  );
};

export default ItemCard;
