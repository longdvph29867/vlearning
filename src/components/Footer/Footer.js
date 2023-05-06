import React from 'react'
import styles from './footer.module.scss'
import { 
  FaRegKeyboard, 
  FaPhoneAlt, 
  FaMailBulk, 
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineChevronRight } from 'react-icons/hi';
import FormFooter from './FormFooter/FormFooter';
export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className={styles.footerContainer}>
          <div className={styles.footerItem}>
            <div>
              <span className={styles.textLogo}>
                <span className={styles.textE}>V</span> 
                learning 
                <FaRegKeyboard className={styles.iconLogo}/>
              </span>
            </div>
            <ul>
              <li><span><FaPhoneAlt/></span><span>1800-123-4567</span></li>
              <li><span><FaMailBulk/></span><span>devit@gmail.com</span></li>
              <li><span><FaMapMarkerAlt/></span><span>Đà Nẵng</span></li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h3 className={styles.textFooterTitle}>Liên kết</h3>
            <ul className={styles.menuFooter}>
              <li><HiOutlineChevronRight/> Trang chủ</li>
              <li><HiOutlineChevronRight/> Dịch vụ</li>
              <li><HiOutlineChevronRight/> Nhóm</li>
              <li><HiOutlineChevronRight/> Blog</li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <h3 className={styles.textFooterTitle}>Khóa học</h3>
            <ul className={styles.menuFooter}>
              <li><HiOutlineChevronRight/> Front End</li>
              <li><HiOutlineChevronRight/> Back End</li>
              <li><HiOutlineChevronRight/> Full stack</li>
              <li><HiOutlineChevronRight/> Node Js</li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.formFooter}>
              <h3 className={styles.textFooterTitle}>Đăng kí tư vấn</h3>
              <FormFooter/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.extraFooter}>
        <div className='container'>
          <div>
            <p>Copyright © 2021. All rights reserved.</p>
          </div>
          <div className={styles.divGlobal}>
            <ul>
              <li><span><FaInstagram/></span></li>
              <li><span><FaFacebookF/></span></li>
              <li><span><FaTwitter/></span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
