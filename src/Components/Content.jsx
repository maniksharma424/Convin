import React, { useState } from "react";
import { createPortal } from "react-dom";
import AddCard from "./AddCard";
import CardModal from "./CardModal";
import ItemCard from "./ItemCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { deleteMultipleVideos } from "../utilities";
import { clearItems } from "../videoSlice";

const Content = ({ BucketId }) => {
  const [AddVideoModal, setAddVideoModal] = useState(false);
  const [bucketData, setBucketdata] = useState([]);
  const [deleteVideos, setDeleteVideos] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const json = await fetch(`http://localhost:8000/videos`).then((res) =>
        res.json()
      );

      const videoData = json.filter((video) => video.bucketId === BucketId);

      setBucketdata(videoData);
    };
    getData();
  }, [BucketId, AddVideoModal,deleteVideos]);

  const videosID = useSelector((store) => store?.videos?.items);
  console.log(videosID);
  const dispatch = useDispatch();

  return (
    <div className="content w-5/6 border-[1px] h-full sm:p-5">
      <p className="text-[30px]">{bucketData.name}</p>
      <button
        onClick={(e) => {
          setDeleteVideos((n) => !n);
        }}
        className="border-[1px] px-3"
      >
        Select
      </button>
      <button
        onClick={(e) => {
          videosID.length > 0
            ? deleteMultipleVideos(videosID) & dispatch(clearItems())
            : true;
          deleteVideos ? setDeleteVideos((n) => !n) : true;
        }}
        className="border-[1px] px-3"
      >
        Delete All
      </button>
      <ul className="max-w-full h-full flex justify-start  items-start flex-wrap">
        {bucketData?.map((item) => (
          <ItemCard key={item.id} checkbox={deleteVideos} item={item} />
        ))}
        <AddCard
          toggleModal={() => {
            setAddVideoModal(true);
          }}
        />
      </ul>
      {AddVideoModal &&
        createPortal(
          <CardModal
            bucketId={BucketId}
            toggleModal={() => {
              setAddVideoModal(false);
            }}
          />,
          document.body
        )}
    </div>
  );
};

export default Content;
