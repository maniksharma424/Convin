import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddCard from "./AddCard";
import BucketModal from "./BucketModal";
import CardModal from "./CardModal";
import ItemCard from "./ItemCard";

const Content = ({ bucketData,bucket }) => {
  const [showModal, setShowModal] = useState(false);
    console.log(bucket);
  return (
    <div className="content w-5/6 border-[1px] h-full sm:p-5">
      <p className="text-[30px]">{bucketData.name}</p>
      <ul className="max-w-full h-full flex justify-start  items-start">
        {bucketData?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
        <AddCard
          toggleModal={() => {
            setShowModal(true);
          }}
        />
      </ul>
      {showModal &&
        createPortal(
          <CardModal
          bucketId={bucket}
            toggleModal={() => {
              setShowModal(false);
            }}
          />,
          document.body
        )}
    </div>
  );
};

export default Content;
