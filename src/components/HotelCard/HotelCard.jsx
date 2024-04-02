import React from 'react'
import { getImageURL } from '../../utils/image-util'

const HotelCard = ({ hotel }) => {
  const { image } = hotel

  return (
    <div>
      <div>
        <div>
          <img src={getImageURL(image.fileName)} alt={image.alt} />
        </div>
        <div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default HotelCard