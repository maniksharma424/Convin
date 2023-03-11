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

const showBucketModal= useSelector(store=>store?.modal?.showBucketModal)

const dispatch = useDispatch()

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
    <div className="w-1/6 border-[1px] h-full flex flex-col justify-start items-center">
      <p>Buckets</p>
      {buckets.map((bucket) => (
        <button
          onClick={() => {
            dispatch(setItem(bucket?.id))
          }}
          key={bucket.id}
          className={"sm:w-11/12 sm:py-1 border-[1px]" }
        >
          {bucket.name}
        </button>
      ))}
      <button
        onClick={() => {
          dispatch(show())
        }}
        className="sm:px-10 sm:py-1 border-[1px]"
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
