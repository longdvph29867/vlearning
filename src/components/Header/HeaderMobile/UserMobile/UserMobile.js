import React, { useRef, useState } from 'react'
import styles from "./userMobile.module.scss";
import { AiOutlineMenu, AiFillCloseSquare } from "react-icons/ai";
import MenuMobile from '../MenuMobile/MenuMobile';
import ButtonV1 from '../../../ButtonV1/ButtonV1';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function UserMobile() {
  const menuRef = useRef(null);
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  let login = false;
  let userInfo = useSelector((state) => state.userReducer.infoUser)
  if(userInfo) {
    login = true;
  }
  else {
    login = false;
  }
  
  useEffect(() => {
    const handleMouseDownOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        console.log(123)
        setIsOpenMenu(false);
      }
    }
    document.addEventListener('mousedown', handleMouseDownOutside);

    return () => {
      document.removeEventListener('mousedown', handleMouseDownOutside);
    };
  }, [])
  
  let setOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }
  let setCloseMenu = () => {
    setIsOpenMenu(false)
  }
  return (
    <div>
      <div className={styles.headerAvatar}>
        {login ? (<NavLink to={'/infouser'}><img src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600" alt="" /></NavLink>)
        : <NavLink to={'/login'}><ButtonV1>Đăng nhập</ButtonV1></NavLink>  
        }
        <span className={styles.iconShowMenu}>
          <div onClick={setOpenMenu} className={styles.icon}>
            {isOpenMenu ? <AiFillCloseSquare/> : <AiOutlineMenu/>}
          </div>
          <div className={styles.menuMobile}>
            {isOpenMenu && 
            (<div ref={menuRef}><MenuMobile  isLogin={login} setCloseMenu={setCloseMenu} /></div>)
          }
          </div>
        </span>
      </div>
    </div>
  )
}
