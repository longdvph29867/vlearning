import React from 'react'
import BackTopButton from '../components/BackTopButton/BackTopButton'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './layout.module.scss'
export default function Layout({Component}) {
  return (
    <div className={styles.layout}>
        <Header/>
        <div className={styles.bodyLayout}>
          <Component/>
        </div>
        <Footer/>
        <BackTopButton/>
    </div>
  )
}
