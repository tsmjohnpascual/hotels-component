import React from 'react'
import Sort from '../Sort/Sort'
import HotelCard from '../HotelCard/HotelCard'

const Hotels = ({ hotels }) => {
  return (
    <>
      <Sort/>
      <div className='hotel-cards-container'>
        {hotels.map((hotel) => {
          return <HotelCard hotel={hotel} key={hotel.id}/>
        })}
      </div>
    </>
  )
}

export default Hotels