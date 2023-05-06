import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import TitlePage from '../../components/TitlePage/TitlePage'
import { setInfoAccoutUser } from '../../redux/action/userAction'
import { localUserService } from '../../service/localService'
import FormUpdateInfo from './FormUpdateInfo/FormUpdateInfo'
import styles from './infoUserPage.module.scss'
import TabsInfo from './TabsInfo/TabsInfo'
export const fetchInfoAccount = (dispatch) => {
    let data = {
        "taiKhoan": localUserService.get()?.taiKhoan
    }
    dispatch(setInfoAccoutUser(data))
}
export default function InfoUserPage() {
    const dispatch = useDispatch();
    const infoAccount = useSelector((state) => state.userReducer.infoAccountUser)
    useEffect(() => {
        let data = {
            "taiKhoan": localUserService.get()?.taiKhoan
        }
        dispatch(setInfoAccoutUser(data))
    // eslint-disable-next-line
    }, [])
    
  return (
    <div className={styles.infoUserPage}>
        <TitlePage title='THÔNG TIN CÁ NHÂN' text='THÔNG TIN HỌC VIÊN'/>
        <div className="container">
            <dir className={styles.infoContent}>
                <div className={styles.infoLeft}>
                    <div className={styles.contentLeft}>
                        <img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" alt="" />
                        <h4>{infoAccount?.hoTen}</h4>
                        <p>Lập trình viên Front-end</p>
                        <button className={styles.btnInfo}>Hồ sơ cá nhân</button>
                    </div>
                </div>
                <div className={styles.infoRingh}>
                    <TabsInfo/>
                </div>
            </dir>
        </div>
        <FormUpdateInfo/>
    </div>
  )
}
