import React from 'react'
import styles from "./userHeader.module.scss";
import { AiOutlinePoweroff, AiFillCaretDown } from "react-icons/ai";
import ButtonV1 from '../../../ButtonV1/ButtonV1';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { localUserService } from '../../../../service/localService';

export default function UserHeader() {
  let userInfo = useSelector((state) => state.userReducer.infoUser)
  return (
    <div>
      {userInfo ? (<div className={styles.headerAvatar}>
        <NavLink to={'/infouser'}>
          <img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" alt="" />
        </NavLink>
        <span onClick={() => {
          localUserService.remove();
          window.location.href = '/';
        }} className={styles.logout}>
          <AiOutlinePoweroff/>
        </span>
        <span className={styles.iconShowMenu}>
          <AiFillCaretDown/>
        </span>
      </div>) : <NavLink to={'/login'} ><ButtonV1>Đăng nhập</ButtonV1></NavLink>
      }
      
    </div>
  )
}
