import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import BucketModal from "./BucketModal";

const Sidebar = ({ handleBucket }) => {
  const [buckets, setBuckets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const json = await fetch("http://localhost:8000/buckets").then((res) =>
        res.json()
      );
      console.log(json);
      setBuckets(json);
    };
    getData();
  }, [showModal]);
  return (
    <div className="w-1/6 border-[1px] h-full flex flex-col justify-start items-center">
      <p>Buckets</p>
      {buckets.map((bucket) => (
        <button
          onClick={() => handleBucket(bucket.id)}
          key={bucket.id}
          className="sm:w-11/12 sm:py-1 border-[1px]"
        >
          {bucket.name}
        </button>
      ))}
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="sm:px-10 sm:py-1 border-[1px]"
      >
        +
      </button>
      {showModal &&
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
