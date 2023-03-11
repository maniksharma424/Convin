import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { hideMoveModal } from '../modalSlice';
import { moveVideo } from '../utilities';
const MoveModal = () => {
    const [buckets, setBuckets] = useState([]);

useEffect(()=>{
    const getData = async () => {
        const json = await fetch(`http://localhost:8000/buckets`).then((res) =>
          res.json()
        );
  
        
  
        setBuckets(json);
        console.log(json);
      };
      getData();
},[])
const videoTobeMovedData = useSelector(store=>store?.bucket?.toMoveVideoData)
    const dispatch = useDispatch()
    
      return (
        <div className="bucketModal bg-white w-1/3 h-fit border-[1px] absolute top-[200px] left-[400px] sm:p-4 flex flex-col justify-around ">
          <p>Move to</p>
          
            {buckets.map(item=><button key={item?.id} onClick={()=>{
                dispatch(hideMoveModal())
                moveVideo(videoTobeMovedData,item?.id)
                
            
            }} className="w-11/12 py-1 border-[1px] bg-white text-black my-2">{item?.name}</button>)}

          <button
            onClick={() => {
                dispatch(hideMoveModal())
            }}
            className="w-11/12 py-1 border-[1px]  bg-white text-black"
          >
            Cancel
          </button>
        </div>
      );
}

export default MoveModal