export const addBucket = async (name) => {
  let newBucket = {
    name: name,
  };
  await fetch("http://localhost:5000/buckets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newBucket),
  });
};
export const addVideo = async (name, url, bucketId) => {
  console.log(bucketId);
  let newCard = {
    bucketId: bucketId,
    name: name,
    link: url,
  };

  await fetch("http://localhost:5000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newCard),
  });
};

export const deleteMultipleVideos = async (videoIds) => {
  // find a better approach
  await videoIds.map((id) => {
    fetch(`http://localhost:5000/videos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).catch((error) => console.error(error));
  });
  return true;
};
export const deleteVideo = async (id) => {
  await fetch(`http://localhost:5000/videos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const editVideo = async (id, name, link, bucketId) => {
  let newVideo = {
    bucketId: bucketId,
    name: name,
    link: link,
  };

  await fetch(`http://localhost:5000/videos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newVideo),
  });

  console.log("edited video");
};

export const moveVideo = async (videoData, bucketId) => {
  console.log(videoData, bucketId, videoData[0]?.id);

  let newVideoData = {
    bucketId: bucketId,
    name: videoData[0]?.name,
    link: videoData[0]?.link,
  };

  await fetch(`http://localhost:5000/videos/${videoData[0]?.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newVideoData),
  });
};
