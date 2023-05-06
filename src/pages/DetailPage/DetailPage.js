import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TitlePage from '../../components/TitlePage/TitlePage'
import { courseService } from '../../service/courseService'
import styles from './detailPage.module.scss'
import InfoCourse from './InfoCourse/InfoCourse'
import RegisterCourse from './RegisterCourse/RegisterCourse'


export default function DetailPage() {
    const params = useParams();
    const [course, setCourse] = useState({})
    
    useEffect(() => {
        courseService.getDetailCourse(params.id)
        .then((res) => {
            setCourse(res.data)
        })
        .catch((err) => {
            console.log(err);
        });
    // eslint-disable-next-line
    }, []);
    
  return (
    <div className={styles.detailCourse}>
        <TitlePage title='Thông tin khóa học' text='Tiến lên và không chần chừ !!!'/>
        <div className="container">
            <div className={styles.content}>
                <div className={styles.left}>
                    <InfoCourse course={course}/>
                </div>
                <div className={styles.right}>
                    <RegisterCourse course={course}/>
                </div>
            </div>
        </div>
    </div>
  )
}
