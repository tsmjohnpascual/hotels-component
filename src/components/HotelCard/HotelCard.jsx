import React from 'react'
import styles from './HotelCard.module.css'
import { getImageURL } from '../../utils/image-util'

const HotelCard = ({ hotel }) => {
  const { image, name, location, guests, date, departure, price, description } = hotel

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={getImageURL(image.fileName)} alt={image.alt} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.hotelName}>{name}</h3>
          <p className={styles.location}>{location}</p>
          <p><strong>{guests.adults}</strong> Adults, <strong>{guests.children}</strong> children & <strong>{guests.infants}</strong> infant</p>
          <p><strong>{date.date}</strong> for <strong>{date.duration} days</strong></p>
          <p>departing from <strong>{departure}</strong></p>
          <button className={styles.button}>
            <div>
              <p><strong>Book now</strong></p>
              <p className={styles.price}><strong>{price.currency + price.amount}</strong></p>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.overviewContainer}>
        <h4 className={styles.overview}>Overview</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HotelCard