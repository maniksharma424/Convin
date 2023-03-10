import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem, removeItem } from "../videoSlice";

const ItemCard = ({ item, checkbox }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch()
  if (checkbox)
    return (
      <>
        <input
          value={selected}
          onChange={(e) => {
            setSelected(n=>!n);
            selected ? dispatch(removeItem(item.id)):dispatch(addItem(item.id))
            
          }}
          type="checkbox"
        ></input>
        <div className="w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2">
          <p>{item?.name}</p>
          <button className="border-[1px] px-3">Delete</button>
        </div>
      </>
    );
  else
    return (
      <div className="w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2">
        <p>{item?.name}</p>
        <button onClick={()=>{deleteVideo(item?.id)}} className="border-[1px] px-3">Delete</button>
      </div>
    );
};

export default ItemCard;
