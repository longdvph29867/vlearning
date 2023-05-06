import React from 'react'
import styles from './bannerHome.module.scss'
import bannerImg from '../../images/bannerHome.png'
import bannerImg1 from '../../images/imgBanner1.png'
import ButtonV1 from '../ButtonV1/ButtonV1'

export default function BannerHome() {
  return (
    <div className={styles.banner}>
        <div className='container'>
            <div className={styles.sloganBox}>
                <div className={styles.triangleLeftRight}></div>
                <div className={styles.smallboxLeftTop}></div>
                <div className={styles.smallboxRightTop}></div>
                <div className={styles.smallboxRightBottom}></div>
                <div className={styles.sloganContainer}>
                    <div>
                        <img src={bannerImg1} alt="" />
                    </div>
                    <h1>Chào mừng</h1>
                    <h1>đến với môi trường </h1>
                    <h1>V<span>learning</span></h1>
                    <div>
                        <ButtonV1>Bắt đâu nào</ButtonV1>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    </div>
  )
}
