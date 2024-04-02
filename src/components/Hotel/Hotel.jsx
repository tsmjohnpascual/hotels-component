import React from 'react'
import styles from './Hotel.module.css'
import Sort from '../Sort/Sort'
import HotelCard from '../HotelCard/HotelCard'

const Hotels = ({ hotels }) => {
  return (
    <>
      <Sort/>
      <div className={styles.container}>
        {hotels.map((hotel) => {
          return <HotelCard hotel={hotel} key={hotel.id}/>
        })}
      </div>
    </>
  )
}

export default Hotels