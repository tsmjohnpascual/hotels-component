import React from 'react'
import { useState } from 'react'
import styles from './Hotel.module.css'
import Sort from '../Sort/Sort'
import HotelCard from '../HotelCard/HotelCard'
import { sortAlphabetically, sortByPrice, sortByRating } from '../../utils/sort'

const Hotels = ({ hotels }) => {
  const defaultSort = sortByPrice(hotels)
  const [hotelSortOrder, setHotelSortOrder] = useState(defaultSort)
  
  return (
    <>
      <Sort/>
      <div className={styles.container}>
        {hotelSortOrder.map((hotel) => {
          return <HotelCard hotel={hotel} key={hotel.id}/>
        })}
      </div>
    </>
  )
}

export default Hotels