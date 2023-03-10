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

const Content = () => {
  const [bucketData, setBucketdata] = useState([]);

  const [trick, setTrick] = useState(1);
  
  const showEditModal = useSelector(store=>store.modal.showEditModal)


  const BucketId = useSelector((store) => store?.bucket?.bucket);

  const ShowAddCardModal = useSelector(store=>store.modal?.showAddCardModal)

  const videosID = useSelector((store) => store?.videos?.items);

  const multipleSelect = useSelector(store=>store?.card?.checkbox)

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
  }, [BucketId,ShowAddCardModal,  showEditModal,videosID, trick]);

  return (
    <div className="content w-5/6 border-[1px] h-full sm:p-5">
      <p className="text-[30px]">{bucketData.name}</p>
      <button
        onClick={() => {

         multipleSelect? dispatch(uncheck()): dispatch(check())
        }}
        className="border-[1px] px-3"
      >
        Select
      </button>
      <button
        onClick={() => {
          videosID.length > 0
            ? deleteMultipleVideos(videosID) && dispatch(clearItems())
            : null;

        }}
        className="border-[1px] px-3"
      >
        Delete All
      </button>
      <ul className="max-w-full h-full flex justify-start  items-start flex-wrap">
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
    </div>
  );
};

export default Content;






