import React from 'react'
import './App.css'
import { hotels } from './assets/hotels'
import Hotel from './components/Hotel/Hotel'

const App = () => {
  return (
    <section className='hotels-section'>
        <div className='container'>
            <Hotel hotels={hotels}/>
        </div>
    </section>
  )
}

export default App
