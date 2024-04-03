import React from 'react'
import { useState } from 'react'
import styles from './HotelCard.module.css'
import { getImageURL } from '../../utils/image-util'

const HotelCard = ({ hotel }) => {
  const { image, name, location, rating, guests, date, departure, price, description } = hotel

  const [showDescription, setShowDescription] = useState(false)

  const handleToggle = () => {
    setShowDescription(!showDescription)
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={getImageURL(image.fileName)} alt={image.alt} />
          <div className={styles.toggleContainer} onClick={handleToggle}>
            <div className={styles.toggleInnerContainer}>
              {showDescription ? 
                <>
                  <p className={styles.toggle}><strong>Read more</strong> about this hotel</p>
                  <DownArrow />
                </>
                :
                <>
                  <p className={styles.toggle}><strong>Read more</strong> about this hotel</p>
                  <RightArrow />
                </>
              }
            </div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.hotelName}>{name}</h3>
          <p className={styles.location}>{location}</p>
          <div className={styles.starContainer}>
          {Array.from({length: rating}).map((_, index) => (
            <Star key={index} />
          ))}
          </div>
          <p>
            <strong>{guests.adults}</strong>
            {guests.adults > 1 ? ' Adults' : ' Adult'}
            {guests.children ? <strong>, {guests.children}</strong> : null}
            {guests.children ? guests.children === 1 ? ' child' : ' children' : null}
            {guests.infants ? ' & ' : null}
            {guests.infants ? <strong>{guests.infants}</strong> : null}
            {guests.infants ? guests.infants === 1 ? ' infant' : ' infants' : null}
          </p>
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
      {showDescription ?
        <>
          <div className={styles.overviewContainer}>
            <h4 className={styles.overview}>Overview</h4>
            <p>{description}</p>
          </div>
        </>
        :
        null
      }
    </div>
  )
}

const Star = () => {
  return (
    <svg fill="#fedc07" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#fedc07"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131-10.955 33.544.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" fillRule="evenodd"></path> </g></svg>
  )
}

const RightArrow = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#17317f"></path> </g></svg>
  )
}

const DownArrow = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#17317f"></path> </g></svg>
  )
}

export default HotelCard