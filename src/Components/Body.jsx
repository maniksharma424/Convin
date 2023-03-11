import React from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="max-w-full h-[765px] flex">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Body;
