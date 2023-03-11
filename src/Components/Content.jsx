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



const Content = () => {
  const [bucketData, setBucketdata] = useState([]);

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
    const getData = async () => {
      const json = await fetch(`http://localhost:8000/videos`).then((res) =>
        res.json()
      );

      const videoData = json.filter((video) => video.bucketId === BucketId[0]);

      setBucketdata(videoData);
    };
    getData();
  }, [BucketId,ShowAddCardModal,showMoveVideoModal, showDeleteVideoModal, showEditModal,videosID, trick]);

  return (
    <div className="content w-5/6 border-[1px] rounded-3xl h-full sm:p-5">
      <p className="text-[30px]">{bucketData.name}</p>
      <button
        onClick={() => {

         multipleSelect? dispatch(uncheck()): dispatch(check())
        }}
        className="sm:w-1/12 sm:py-1 border-[1px] mb-3 rounded-md bg-white hover:bg-[#ffbd03] hover:text-white shadow-md overflow-scroll"
      >
        Select
      </button>
      <button
        onClick={() => {
          videosID.length > 0
            ? deleteMultipleVideos(videosID) && dispatch(clearItems())
            : null;

        }}
        className="sm:w-1/12 sm:py-1 border-[1px] mb-3 rounded-md bg-white hover:bg-[#ffbd03] hover:text-white mx-10 shadow-md"
      >
        Delete All
      </button>
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
      {ShowAddCardModal &&
        createPortal(
          <CardModal
            bucketId={BucketId[0]}
            toggleModal={() => {

            }}
          />,
          document.body
        )}

      {showEditModal &&
        createPortal(
          <CardEditModal />,
          document.body
        )}

        {showMoveVideoModal && createPortal(<MoveModal/>,document.body)}
        {showDeleteVideoModal && createPortal(<DeleteVideoModal/>,document.body)}
    </div>
  );
};

export default Content;






