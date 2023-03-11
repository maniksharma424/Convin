import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {

  const history = useSelector(store=>store?.history?.history)
  console.log(history);
  return (
    <div>{
      
      history.map(item=>{
       return  <>
        <li>{item?.name}</li>
        <li>{item?.link}</li>
        <li>{item?.time}</li>
        </>
      })
      }</div>
  )
}

export default History