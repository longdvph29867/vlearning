import React from 'react'
import imgLogo from "../../../images/logo.png"
import styles from "./headerDesktop.module.scss"
import { Input} from 'antd';
import MenuHeader from './MenuHeader/MenuHeader';
import UserHeader from './UserHeader/UserHeader';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const { Search } = Input;


export default function HeaderDesktop() {
    const navigate = useNavigate()
    const onSearch = (value) => {
        if(value) {
            navigate(`/search/${value}`)
        }
    };

  return (
    <div className={styles.container}>
            <div className={styles.headerbody}>
                <div className={styles.left}>
                    <NavLink to={'/'}>
                        <img src={imgLogo} alt="" className={styles.logo}/>
                    </NavLink>
                    <Search className={styles.search}
                    placeholder="Tìm kiếm"
                    onSearch={onSearch}
                    style={{
                        width: 200,
                    }}
                    />
                </div>
                <div className={styles.right}>
                    <MenuHeader/>
                    <UserHeader/>
                </div>
            </div>
        </div>
  )
}
