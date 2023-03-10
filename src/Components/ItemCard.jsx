import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div className='w-3/12 h-1/5 border-[1px] border-black sm:m-2 rounded-md sm:p-2'>{item.name}</div>
  )
}

export default ItemCard