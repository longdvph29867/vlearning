import React from 'react'
import { NavLink } from 'react-router-dom';
import imgLogo from "../../../images/logo.png"
import styles from "./headerMobile.module.scss"
import UserMobile from './UserMobile/UserMobile';

export default function HeaderMobile() {

  return (
    <div className={styles.container}>
            <div className={styles.headerbody}>
                <div className={styles.left}>
                    <NavLink to={'/'}>
                        <img src={imgLogo} alt="" className={styles.logo}/>
                    </NavLink>
                </div>
                <div className={styles.right}>
                    <UserMobile/>
                </div>
            </div>
        </div>
  )
}
