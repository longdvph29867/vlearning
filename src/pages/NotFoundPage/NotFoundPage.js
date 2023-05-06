import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonV1 from '../../components/ButtonV1/ButtonV1'
import imgNotFound from '../../images/notFound.gif'
import styles from './notFoundPage.module.scss'
export default function NotFoundPage() {
    const navigate = useNavigate()
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <img src={imgNotFound} alt="" />
      <div className={styles.btnHome}>
        <ButtonV1
        onClick={() => {navigate('/')}}>Quay về trang chủ</ButtonV1>
      </div>
    </div>
  )
}
