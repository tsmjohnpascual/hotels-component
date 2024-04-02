import React from 'react'
import styles from './App.module.css'
import { hotels } from './assets/hotels'
import Hotel from './components/Hotel/Hotel'

const App = () => {
  return (
    <section className={styles.hotelsSection}>
        <div className={styles.container}>
            <Hotel hotels={hotels}/>
        </div>
    </section>
  )
}

export default App
