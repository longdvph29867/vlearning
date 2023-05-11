import React from 'react'
import { useSelector } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import BackTopButton from '../components/BackTopButton/BackTopButton'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styles from './layout.module.scss'
export default function Layout({Component}) {
  const isSpinner = useSelector((state) => state.spinnerReducer.isSpinner)
  return (
    <div>
      <div className={styles.layout}>
        <Header/>
        <div className={styles.bodyLayout}>
          <Component/>
        </div>
        <Footer/>
        <BackTopButton/>
      </div>
      {isSpinner ? (
        <dir className={styles.spinner}>
          <SyncLoader color="#f2f3f2" />
        </dir>
      ) : <></>}
    </div>
  )
}
