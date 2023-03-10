export const addBucket = async (name) => {
    let newBucket = {
      name: name
    };
   await fetch("http://localhost:8000/buckets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newBucket),
    });
  };
  export const AddVideo = async (name,url,bucketId)=>{
    console.log(bucketId);
    let newCard = {
      "bucketId":bucketId,
      "name":name,
      "link":url
    }

   await  fetch('http://localhost:8000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
      },
      body: JSON.stringify(newCard)
    })

  }



  export const deleteMultipleVideos = async (videoIds)=>{
// find a better approach
   await videoIds.map(id=>{
       fetch(`http://localhost:8000/videos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    }

  }).catch(error => console.error(error))
    })
    return true
  }
export const deleteVideo = async (id)=>{

 await fetch(`http://localhost:8000/videos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    }
    })
}


export const editVideo = async (id,name,link,bucketId)=>{


  let newVideo = {
    "bucketId":bucketId,
    "name":name,
    "link":link,
  }

  await fetch(`http://localhost:8000/videos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: "application/json",
    },
    body: JSON.stringify(newVideo)
  })


  console.log('edited video');
}