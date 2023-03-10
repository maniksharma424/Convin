import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import { useState,useEffect } from 'react'

const Body = () => {
    const[bucket,setBucket] = useState(1)
    const[bucketData,setBucketdata]=useState([])


    useEffect(() => {
        const getData = async()=>{
            const json = await fetch(`http://localhost:8000/videos`).then(res=>res.json())

            const videodata = json.filter(video=>video.bucketId === bucket)
            console.log(videodata);
            setBucketdata(videodata)

        }
        getData()    
      
    }, [bucket])

    const handleBucket = (id)=>{
        setBucket(id)
    }
    
  return (
    <div className='max-w-full h-[765px] flex'>
        <Sidebar handleBucket={handleBucket}/>
        <Content bucket={bucket} bucketData={bucketData}/>
    </div>
  )
}

export default Body