import React, { useEffect, useState } from 'react'
import { courseService } from '../../../../service/courseService';
import styles from "./menuMobile.module.scss";
import { Input} from 'antd';
import { NavLink } from 'react-router-dom';
import { localUserService } from '../../../../service/localService';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;


export default function MenuMobile({isLogin}) {
  const navigate = useNavigate()
  const [courseMenu, setCourseMenu] = useState([]);
  useEffect(() => {
    courseService.getCourseMenu()
    .then((res) => {
        setCourseMenu(res.data)
    })
    .catch((err) => {
        console.log(err);
      });
  }, [])
  const onSearch = (value) => {
    navigate(`/search/${value}`)
  };
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Search className={styles.search}
          placeholder="Tìm kiếm"
          onSearch={onSearch}
          style={{
              width: '100%',
          }}
          />
        </li>
        <li className={styles.menuChildList}>
          <span>DANH MỤC</span>
          <ul className={styles.menuChild}>
            {courseMenu.map((item, index) => {
              return ( <NavLink key={index} to={`/category/${item.maDanhMuc}`}>
                <li>{item.tenDanhMuc}</li>
              </NavLink>
              )
            })}
            </ul>
        </li>
        <li>
          <NavLink onClick={() => {console.log(123)}} to={'/listcourse'}>
            <label htmlFor="showMenu">
              <span>KHÓA HỌC</span>
            </label>
          </NavLink>
        </li>
        <li>
          <NavLink  to={'/blog'}>
            <span>BLOG</span>
          </NavLink>
        </li>
        <li className={styles.menuChildEven}>
          <span>SỰ KIỆN</span>
          <ul className={styles.menuChild}>
            <li><NavLink to={'/event/sale'}>SỰ KIỆN SALE CUỐI NĂM</NavLink></li>
            <li><NavLink to={'/event/christmas'}>SỰ KIỆN GIÁNG SINH</NavLink></li>
            <li><NavLink to={'event/noel'}>SỰ KIỆN NOEL</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to={'/about'}>
            <span>THÔNG TIN</span>
          </NavLink>
        </li>
        {isLogin ? (
          <li onClick={() => {
            localUserService.remove();
            window.location.href = '/';
          }}>
          <span>Đăng xuất</span>
        </li>
        ) : <></>
      }
        
      </ul>
    </nav>
  )
}
