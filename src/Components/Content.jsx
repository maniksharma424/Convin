import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddCard from "./AddCard";
import CardModal from "./CardModal";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMultipleVideos } from "../utilities";
import { clearItems } from "../videoSlice";
import CardEditModal from "./CardEditModal";
import { check, uncheck } from "../cardSlice";
import MoveModal from "./MoveModal";
import DeleteVideoModal from "./DeleteVideoModal";
import { motion } from "framer-motion";



const Content = () => {
  const [bucketData, setBucketdata] = useState([]);
  const [bucketName,setBucketName] = useState('')
  const [trick, setTrick] = useState(1);
  
  const showEditModal = useSelector(store=>store.modal.showEditModal)

  const BucketId = useSelector((store) => store?.bucket?.bucket);

  const ShowAddCardModal = useSelector(store=>store.modal?.showAddCardModal)

  const videosID = useSelector((store) => store?.videos?.items);

  const multipleSelect = useSelector(store=>store?.card?.checkbox)

  const showMoveVideoModal = useSelector(store=>store?.modal.moveModal)
  
  const showDeleteVideoModal = useSelector(store=>store?.modal?.deleteModal)
  

  const dispatch = useDispatch();

  useEffect(() => {
    const getBucketData = async () => {
      const json = await fetch(`http://localhost:8000/videos`).then((res) =>
        res.json()
      );

      const videoData = json.filter((video) => video.bucketId === BucketId[0]);

      setBucketdata(videoData);
    };
    getBucketData();
  }, [BucketId,ShowAddCardModal,showMoveVideoModal, showDeleteVideoModal, showEditModal,videosID, trick]);

  useEffect(()=>{
   const  getBucketname = async ()=>{
       const json = await fetch(`http://localhost:8000/buckets/${BucketId}`).then(res=>res.json()).then(res=>setBucketName(res.name))
    }
    getBucketname()

  })

  return (
    <motion.div
    
    initial={{ y: "50%", opacity: 0, scale: 0.5 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    className="content w-5/6 border-[1px] rounded-3xl h-full sm:p-5 overflow-scroll">
      <div className="w-full flex justify-center">

 <p className="sm:text-[40px] text-[20px] sm:mb-5 m-5">{bucketName}</p>
      </div>
      <motion.button
      whileHover={{scale:1.1}}
        onClick={() => {

         multipleSelect? dispatch(uncheck()): dispatch(check())
        }}
        className="sm:w-1/12 sm:py-1 border-[1px] sm:mb-3 rounded-md bg-white hover:bg-[#80669d] hover:text-white shadow-md overflow-scroll sm:text-[16px] text-[8px] sm:ml-0 ml-5"
      >
        Select
      </motion.button>
      <motion.button
            whileHover={{scale:1.1}}

        onClick={() => {
          videosID.length > 0
            ? deleteMultipleVideos(videosID) && dispatch(clearItems())
            : null;

        }}
        className="sm:w-1/12 sm:py-1 border-[1px] sm:mb-3 rounded-md bg-white hover:bg-[#ffbd03] hover:text-white mx-10 shadow-md sm:text-[16px] text-[8px]"
      >
        Delete All
      </motion.button>
      
      <ul  className="max-w-full h-full flex justify-start  items-start flex-wrap">
        {bucketData?.map((item) => (
          <ItemCard
          
            key={item.id}
            update={() => {setTrick((n) => n + 1)}}
            item={item}
          />
        ))}
        <AddCard />
      </ul>
      {ShowAddCardModal &&createPortal(<CardModal bucketId={BucketId[0]}/>,document.body)}
      {showEditModal &&createPortal(<CardEditModal />,document.body)}
      {showMoveVideoModal && createPortal(<MoveModal/>,document.body)}
      {showDeleteVideoModal && createPortal(<DeleteVideoModal/>,document.body)}

    </motion.div>
  );
};

export default Content;






