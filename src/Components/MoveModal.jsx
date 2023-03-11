import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { hideMoveModal } from "../modalSlice";
import { moveVideo } from "../utilities";
import { motion } from "framer-motion";
const MoveModal = () => {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const json = await fetch(`https://mock-server-manik.onrender.com/buckets`).then((res) =>
        res.json()
      );

      setBuckets(json);
      console.log(json);
    };
    getData();
  }, []);
  const videoTobeMovedData = useSelector(
    (store) => store?.bucket?.toMoveVideoData
  );
  const dispatch = useDispatch();

  const update = ()=>{
    let statementExecuted = false;

setTimeout(function() {
  if (!statementExecuted) {
    dispatch(hideMoveModal());
    statementExecuted = true;
  }
}, 1000);

  }

  return (
    <motion.div
      initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="bucketModal bg-gray-50 rounded-xl w-2/3 sm:w-1/3 h-fit border-[1px] absolute top-[200px] left-[100px] sm:left-[400px] sm:p-4 flex flex-col justify-around px-3 "
    >
      <div className="w-11/12 flex justify-center">
        <p className="text-[25px] font-[400]">Move to</p>
      </div>
      <button
        onClick={() => {
          update()
        }}
        className="w-[30px]  border-[1px]  relative left-[195px] sm:left-[400px] sm:bottom-[40px] bottom-8 rounded-md bg-black text-white"
      >
        x
      </button>

      {buckets.map((item) => (
        <button
          key={item?.id}
          onClick={() => {
            moveVideo(videoTobeMovedData, item?.id);
            update()
          }}
          className="w-11/12 py-1 border-[1px] bg-white ml-3 text-black my-2 rounded-md hover:bg-[#80669d] hover:text-white "
        >
          {item?.name}
        </button>
      ))}
    </motion.div>
  );
};

export default MoveModal;
