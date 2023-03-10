export const addBucket = (name) => {
    let newBucket = {
      name: name
    };
    fetch("http://localhost:8000/buckets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newBucket),
    });
  };
  export const AddVideo = (name,url,bucketId)=>{
    console.log(bucketId);
    let newCard = {
      "bucketId":bucketId,
      "name":name,
      "link":url
    }

    fetch('http://localhost:8000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      },
      body: JSON.stringify(newCard)
    })

    console.log('item added');
  }



  export const deleteMultipleVideos = (videoIds)=>{
    console.log('initiated');
// find a better approach
    videoIds.map(id=>{
      fetch(`http://localhost:8000/videos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    }

  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    })
    return true
  }
