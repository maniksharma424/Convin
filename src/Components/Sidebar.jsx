import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../bucketSlice";
import { show } from "../modalSlice";
import BucketModal from "./BucketModal";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [buckets, setBuckets] = useState([]);

  const showBucketModal = useSelector((store) => store?.modal?.showBucketModal);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const json = await fetch("http://localhost:5000/buckets").then((res) =>
        res.json()
      );
      setBuckets(json);
    };
    getData();
  }, [showBucketModal]);

  return (
    <motion.div
    initial={{ y: "50%", opacity: 0, scale: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    className="w-1/6 border-[1px] pb-[190px] h-fit flex flex-col justify-evenly items-center py-5 overflow-scroll rounded-3xl ">
      <p className="sm:text-[20px] text-[12px] mb-4 sm:font-[700] font-[400]">Buckets</p>
      {buckets.map((bucket) => (
        <motion.button
        whileHover={{scale:1.1}}
          onClick={() => {
            dispatch(setItem(bucket?.id));
          }}
          key={bucket.id}
          className="w-11/12 sm:py-1 border-[1px] sm:mb-3 mb-2 rounded-md bg-white hover:bg-[#9c4f99] hover:text-white sm:text-[16px] text-[7px]"
          >
          {bucket.name}</motion.button>
      ))}
      <motion.button
      whileHover={{scale:1.1}}
        onClick={() => {
          dispatch(show());
        }}
        className="w-11/12 sm:py-1 border-[1px] mb-3 rounded-md bg-[#80669d] hover:opacity-100 text-white opacity-80 "
      >
        +
      </motion.button>
      {showBucketModal &&
        createPortal(
          <BucketModal
            toggleModal={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </motion.div>
  );
};

export default Sidebar;
