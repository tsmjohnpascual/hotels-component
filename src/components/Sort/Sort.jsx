import React from 'react'
import styles from './Sort.module.css'

const Sort = () => {
  return (
    <div className={styles.container}>
      <aside>
        <ul>
          <li>
            <button><div>sort <strong>alphabetically</strong></div><SortAZIcon /></button>
          </li>
          <li><button><div>sort by <strong>price</strong></div><SortPriceIcon /></button>
          </li>
          <li><button><div>sort by <strong>star rating</strong></div><SortStarIcon /></button></li>
        </ul>
      </aside>
    </div>
  )
}

const SortAZIcon = () => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <line fill="none" stroke="#17317f" stroke-width="2" stroke-miterlimit="10" x1="23" y1="26.1" x2="23" y2="5"></line> <polyline fill="none" stroke="#17317f" stroke-width="2" stroke-miterlimit="10" points="18.7,21.8 23,26.1 27.3,21.8 "></polyline> <polyline fill="none" stroke="#17317f" stroke-width="2" stroke-miterlimit="10" points="12,15 12,14 9.1,6 8.9,6 6,14 6,15 "></polyline> <line fill="none" stroke="#17317f" stroke-width="2" stroke-miterlimit="10" x1="6" y1="12" x2="12" y2="12"></line> <polyline fill="none" stroke="#17317f" stroke-width="2" stroke-miterlimit="10" points="5,18 12,18 12,19 6,25 6,26 13,26 "></polyline> </g></svg>
  )
}

const SortPriceIcon = () => {
  return (
    <svg fill="#17317f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path> <path d="M340.812,384H171.188v-25.969c22.844-10.812,43.359-34.062,43.359-61.906c0-7,0-13.188-1.547-20.562h-38.344v-32.906 h32.938c-1.562-10.469-3.5-23.25-3.5-36.031c0-47.641,33.688-78.625,81.75-78.625c20.5,0,35.641,4.656,43.75,9.281l-8.531,36.031 c-7.375-3.875-18.188-7.359-33.297-7.359c-29.047,0-39.109,19.375-39.109,42.219c0,12.797,1.531,23.641,4.25,34.484h54.188v32.906 h-49.938c0.375,11.625,0.375,23.25-2.688,34.484c-3.891,13.172-11.625,24.375-22.5,34.062v0.766h108.844V384z"></path> </g> </g></svg>
  )
}

const SortStarIcon = () => {
  return (
    <svg fill="#17317f" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131-10.955 33.544.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" fill-rule="evenodd"></path> </g></svg>
  )
}

export default Sort