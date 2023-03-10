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
  export const AddItem = (name,url,bucketId)=>{
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