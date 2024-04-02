import React from 'react'
import styles from './HotelCard.module.css'
import { getImageURL } from '../../utils/image-util'

const HotelCard = ({ hotel }) => {
  const { image, name, location, rating, guests, date, departure, price, description } = hotel

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={getImageURL(image.fileName)} alt={image.alt} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.hotelName}>{name}</h3>
          <p className={styles.location}>{location}</p>
          <div className={styles.starContainer}>
          {Array.from({length: rating}).map((_, index) => (
            <Star key={index} />
          ))}
          </div>
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

const Star = () => {
  return (
    <svg fill="#fedc07" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#fedc07"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131-10.955 33.544.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" fillRule="evenodd"></path> </g></svg>
  )
}

export default HotelCard