import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { courseService } from '../../../../service/courseService';
import styles from "./menuHeader.module.scss"

export default function MenuHeader() {
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
    
  return (
    <nav className={styles.menu}>
        <ul>
            <li className={styles.menuChildList}>
                <span><AiOutlineMenu/> DANH MỤC</span>
                <ul className={styles.menuChild}>
                    {courseMenu.map((item, index) => {
                        return ( <li  key={index}>
                                    <NavLink to={`/category/${item.maDanhMuc}`}>
                                    {item.tenDanhMuc}
                                    </NavLink>
                                </li>
                        )
                    })}
                </ul>
            </li>
            <li>
                <NavLink to={'/listcourse'}>
                    <span>KHÓA HỌC</span>
                </NavLink>
            </li>
            <li>
                <NavLink to={'/blog'}>
                    <span>BLOG</span>
                </NavLink>
            </li>
            <li className={styles.menuChildEven}>
                <span>SỰ KIỆN</span>
                <ul className={styles.menuChild}>
                    <li><NavLink to={'/event/sale'}>SỰ KIỆN SALE CUỐI NĂM</NavLink></li>
                    <li><NavLink to={'/event/christmas'}>SỰ KIỆN GIÁNG SINH</NavLink></li>
                    <li><NavLink to={'/event/noel'}>SỰ KIỆN NOEL</NavLink></li>
                </ul>
            </li>
            <li>
                <NavLink to={'/about'}>
                    <span>THÔNG TIN</span>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
