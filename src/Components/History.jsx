import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const History = () => {
  const history = useSelector((store) => store?.history?.history);
  console.log(history);
  return (
    <motion.div
     initial={{ y: "50%", opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
    className="history w-full h-[800px] flex justify-center items-center">
      <div className=" w-3/4 h-3/4 relative bottom-24 border-[1px] rounded-lg shadow-2xl flex flex-col items-center">
        <p className="text-[30px] font-[200]">History</p>
        <div className="w-full h-full border-[1px]  px-5 py-3 ">
        <div className="w-full sm:h-6 flex justify-between my-2">
                <li className=" text-[18px] list-none text-red-600">Time</li>
                <li className="w-1/3 relative left-1 list-none text-[18px] ">Video</li>
                <li className="list-none w-1/3 relative right-5 text-blue-500 text-[18px]">URL</li>
              </div>
          {history.map((item) => {
            return (
              <div className="w-full sm:h-6 flex justify-between my-2">
                <li className=" text-[15px] text-red-600">{item?.time}</li>
                <li className="w-1/3 list-none text-[17px]">{item?.name}</li>
                <li className="list-none text-blue-500">{item?.link}</li>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default History;
