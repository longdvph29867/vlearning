import React, { useEffect, useState } from 'react'
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import styles from "./header.module.scss";
import HeaderMobile from './HeaderMobile/HeaderMobile';
export default function Header() {
  const [headerFixed, setHeaderFixed] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 150) {
        setHeaderFixed(true)
      }
      else {
        setHeaderFixed(false)
      }
    })
  }, [])
  
  return (
    <header className={headerFixed ? styles.headerFixed : undefined}>
        <div className={styles.desktop}>
            <HeaderDesktop/>
        </div>
        <div className={styles.mobile}>
            <HeaderMobile/>
        </div>
    </header>
  )
}
