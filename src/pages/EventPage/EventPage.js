import React from 'react'
import imgSlider from '../../images/sliderEvent.png'
import imgDetail from '../../images/imgEventDetail.png'
import imgSpeecher1 from '../../images/instrutor1.jpg'
import imgSpeecher2 from '../../images/instrutor2.jpg'
import imgSpeecher3 from '../../images/instrutor3.jpg'
import imgSpeecher4 from '../../images/instrutor4.jpg'
import imgSpeecher5 from '../../images/instrutor5.jpg'
import imgSpeecher6 from '../../images/instrutor6.jpg'
import imgSpeecher7 from '../../images/instrutor7.jpg'
import imgSpeecher8 from '../../images/instrutor8.jpg'
import metaDonor from '../../images/metaDonors.jpg'
import microsofDonor from '../../images/microsofDonors.jpg'
import googleDonor from '../../images/googleDonors.jpg'
import amazonDonor from '../../images/amazonDonors.jpg'
import styles from './eventPage.module.scss'
import ButtonV1 from '../../components/ButtonV1/ButtonV1'
import ButtonV2 from '../../components/ButtonV2/ButtonV2'
export default function EventPage() {
  return (
    <div className={styles.eventPage}>
        <div className={styles.sliderEvent}>
            <div className="container">
                <div className={styles.sliderContainer}>
                    <div className={styles.timeEvent}>
                        <div className={styles.countDownEvent}>
                            <p>
                                <span className={styles.dayEvent}>00</span>
                                <span>Ngày</span>
                            </p>
                            <p>
                                <span className={styles.hoursEvent}>00</span>
                                <span>Giờ</span>
                            </p>
                            <p>
                                <span className={styles.minEvent}>00</span>
                                <span>Phút</span>
                            </p>
                            <p>
                                <span className={styles.secondEvent}>00</span>
                                <span>Giây</span>
                            </p>
                        </div>
                        <h3>SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2023</h3>
                        <h5>20 - 25 THÁNG 12, 2023, VIỆT NAM</h5>
                    </div>
                    <div className={styles.rightSlider}>
                        <img src={imgSlider} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.eventDetail}>
            <div className="container">
                <div className={styles.detailContainer}>
                    <div className={styles.imgDetail}>
                        <img src={imgDetail} alt="" />
                    </div>
                    <div className={styles.detalContent}>
                        <h3>Sự kiện công nghệ dành cho startup</h3>
                        <h5>Nơi gặp gỡ của những tư tưởng lớn</h5>
                        <p>
                            Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại 
                            Việt Nam tập trung vào cả bốn mảng tiêu biểu của công 
                            nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), 
                            Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và 
                            Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)
                        </p>
                        <div className={styles.btnDetail}>
                            <ButtonV2>Tham gia</ButtonV2>
                            <ButtonV1>Tìm hiểu thêm</ButtonV1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.speecher}>
            <div className="container">
                <div className={styles.speecherContainer}>
                    <h2>CÁC NHÀ ĐỒNG SÁNG TẠO</h2>
                    <div className={styles.listSpeecher}>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher1} alt="" />
                            <h4>NGUYỄN NHẬT</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher2} alt="" />
                            <h4>NGUYỄN NHẬT NAM</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher3} alt="" />
                            <h4>NGUYỄN NAM</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher4} alt="" />
                            <h4>JHONNY ĐẶNG</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher5} alt="" />
                            <h4>NGÔ HENRY</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher6} alt="" />
                            <h4>VƯƠNG PHẠM VN</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher7} alt="" />
                            <h4>ROBER IMACU</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                        <div className={styles.itemSpeecher}>
                            <img src={imgSpeecher8} alt="" />
                            <h4>KHOA PUG</h4>
                            <p>CEO TECHVIET PRODUCTION</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.donors}>
            <div className="container">
                <h2>NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h2>
                <div className={styles.listDonors}>
                    <div className={styles.itemDonor}>
                        <img src={metaDonor} alt="" />
                        <h4>FACEBOOK</h4>
                    </div>
                    <div className={styles.itemDonor}>
                        <img src={microsofDonor} alt="" />
                        <h4>MICROSOFT</h4>
                    </div>
                    <div className={styles.itemDonor}>
                        <img src={googleDonor} alt="" />
                        <h4>GOOGLE</h4>
                    </div>
                    <div className={styles.itemDonor}>
                        <img src={amazonDonor} alt="" />
                        <h4>AMAZON</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
