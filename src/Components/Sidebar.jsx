import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../bucketSlice";
import { show } from "../modalSlice";
import BucketModal from "./BucketModal";

const Sidebar = () => {
  const [buckets, setBuckets] = useState([]);

  const showBucketModal = useSelector((store) => store?.modal?.showBucketModal);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const json = await fetch("http://localhost:8000/buckets").then((res) =>
        res.json()
      );
      setBuckets(json);
    };
    getData();
  }, [showBucketModal]);

  return (
    <div className="w-1/6 border-[1px] pb-[190px] h-fit flex flex-col justify-evenly items-center py-5 overflow-scroll rounded-3xl ">
      <p className="text-[20px] mb-4 font-[700]">Buckets</p>
      {buckets.map((bucket) => (
        // className={"sm:w-11/12 sm:py-1 border-[1px] mb-3 rounded-md" }

        <button
          onClick={() => {
            dispatch(setItem(bucket?.id));
          }}
          key={bucket.id}
          className="sm:w-11/12 sm:py-1 border-[1px] mb-3 rounded-md bg-white hover:bg-[#ffbd03] hover:text-white"
          >
          {bucket.name}</button>
      ))}
      <button
        onClick={() => {
          dispatch(show());
        }}
        className="sm:w-11/12 sm:py-1 border-[1px] mb-3 rounded-md bg-white hover:bg-[#80669d] hover:text-white"
      >
        +
      </button>
      {showBucketModal &&
        createPortal(
          <BucketModal
            toggleModal={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </div>
  );
};

export default Sidebar;
