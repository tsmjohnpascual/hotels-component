import React from 'react'
import { useState } from 'react'
import styles from './Hotel.module.css'
import Sort from '../Sort/Sort'
import HotelCard from '../HotelCard/HotelCard'

const Hotels = ({ hotels }) => {
  const [hotelSortOrder, setHotelSortOrder] = useState(hotels)
  const [activeSort, setActiveSort] = useState('price')
  
  return (
    <>
      <Sort hotelSortOrder={hotelSortOrder} setHotelSortOrder={setHotelSortOrder} activeSort={activeSort} setActiveSort={setActiveSort}/>
      <div className={styles.container}>
        {hotelSortOrder.map((hotel) => {
          return <HotelCard hotel={hotel} key={hotel.id}/>
        })}
      </div>
    </>
  )
}

export default Hotels