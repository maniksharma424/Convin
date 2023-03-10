import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Body = () => {
  const [bucketId, setBucketId] = useState(1);

  const handleBucket = (id) => {
    setBucketId(id);
  };


  return (
    <div className="max-w-full h-[765px] flex">
      <Sidebar handleBucket={handleBucket} />
      <Content BucketId={bucketId} />
    </div>
  );
};

export default Body;
