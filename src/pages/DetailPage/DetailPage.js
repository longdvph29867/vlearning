import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import TitlePage from '../../components/TitlePage/TitlePage'
import { SET_LOADING_OFF, SET_LOADING_ON } from '../../redux/constant/spinnerConstant'
import { courseService } from '../../service/courseService'
import styles from './detailPage.module.scss'
import InfoCourse from './InfoCourse/InfoCourse'
import RegisterCourse from './RegisterCourse/RegisterCourse'


export default function DetailPage() {
    const params = useParams();
    const dispatch = useDispatch();
    const [course, setCourse] = useState({})
    
    useEffect(() => {
        dispatch({type: SET_LOADING_ON})
        courseService.getDetailCourse(params.id)
        .then((res) => {
            dispatch({type: SET_LOADING_OFF})
            setCourse(res.data)
        })
        .catch((err) => {
            dispatch({type: SET_LOADING_ON})
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
