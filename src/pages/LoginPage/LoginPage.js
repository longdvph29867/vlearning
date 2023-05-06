import React from 'react'
import bgLogin from "../../images/bg-login.png"
import bgOverlay from "../../images/bg-overlay-login.png"

import styles from "./loginPage.module.scss";
import SignIn from './SignIn';
import SignUp from './SignUp';
export default function LoginPage() {
    const handleSignUp = () => {
        document.querySelector(`.${styles.container}`).classList.add(styles.activeSignUp)
    }
    const handleSignIn = () => {
        document.querySelector(`.${styles.container}`).classList.remove(styles.activeSignUp)
    }

  return (
    <div className={styles.loginPage} style={{backgroundImage: `url(${bgLogin})`}}>
        <div className={`${styles.container}`}>
            <div className={`${styles.containerForm} ${styles.signup}`}>
                <SignUp/>
                <span onClick={handleSignIn} className={styles.changeForm}>Đăng nhập</span>
            </div>
            <div className={`${styles.containerForm} ${styles.signin}`}>
                <SignIn/>
                <span onClick={handleSignUp} className={styles.changeForm}>Đăng ký</span>

            </div>
            <div className={`${styles.overlayContainer}`}>
                <div className={`${styles.overlay}`}  style={{backgroundImage: `url(${bgOverlay})`}}>
                    <div className={`${styles.overlayLeft}`} >
                        <h1>Chào mừng bạn đã trở lại!</h1>
                        <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
                        <button onClick={handleSignIn} className={styles.btnStyle}>Đăng nhập</button>
                    </div>
                    <div className={`${styles.overlayRight}`} >
                        <h1>Xin chào!</h1>
                        <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
                        <button onClick={handleSignUp} className={styles.btnStyle}>Đăng ký</button>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    )
}
