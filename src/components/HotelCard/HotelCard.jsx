import React from 'react'
import { getImageURL } from '../../utils/image-util'

const HotelCard = ({ hotel }) => {
  const { image, name, location, guests, date, departure, price, description } = hotel

  return (
    <div>
      <div>
        <div>
          <img src={getImageURL(image.fileName)} alt={image.alt} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
          <p><strong>{guests.adults}</strong> Adults, <strong>{guests.children}</strong> children & <strong>{guests.infants}</strong> infant</p>
          <p><strong>{date.date}</strong> for <strong>{date.duration} days</strong></p>
          <p>departing from {departure}</p>
          <button>Book now {price.currency + price.amount}</button>
        </div>
      </div>
      <div>
        <h4>Overview</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default HotelCard