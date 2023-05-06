import React from 'react'
import styles from "./userMobile.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import MenuMobile from '../MenuMobile/MenuMobile';
import ButtonV1 from '../../../ButtonV1/ButtonV1';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function UserMobile() {
  let login = true;
  let userInfo = useSelector((state) => state.userReducer.infoUser)
  if(userInfo) {
    login = true;
  }
  else {
    login = false;
  }
  return (
    <div>
      <div className={styles.headerAvatar}>
        {login ? (<NavLink to={'/infouser'}><img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" alt="" /></NavLink>)
        : <NavLink to={'/login'}><ButtonV1>Đăng nhập</ButtonV1></NavLink>  
      }
        
        <span className={styles.iconShowMenu}>
          <label htmlFor="showMenu">
            <AiOutlineMenu/>
          </label>
          <input type="checkbox" name="" id="showMenu" />
          <div className={styles.menuMobile}>
            <label htmlFor="showMenu">
              <MenuMobile isLogin={login}/>
            </label>
          </div>
        </span>
      </div>
    </div>
  )
}
