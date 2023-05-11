import React, { useEffect, useState } from 'react'
import { FaDesktop } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemCourseV2 from '../../components/ItemCourseV2/ItemCourseV2';
import { SET_LOADING_OFF, SET_LOADING_ON } from '../../redux/constant/spinnerConstant';
import { courseService } from '../../service/courseService';
import styles from './categoryCoursePage.module.scss'

export default function CategoryCoursePage() {
    const params = useParams();
    const dispatch = useDispatch();
    const [listCourse, setListCourse] = useState([])
    useEffect(() => {
        dispatch({type: SET_LOADING_ON})
        courseService.getCategoryCourse(params.id)
        .then((res) => {
            dispatch({type: SET_LOADING_OFF})
            setListCourse(res.data)
        })
        .catch((err) => {
            dispatch({type: SET_LOADING_OFF})
            console.log(err);
        });
    }, [params.id])
    
  return (
    <div className={styles.categoryCoursePage}>
        <div className="container">
            <div className={styles.categoryTitle}>
                <div>
                    <FaDesktop/>
                    <span>{listCourse[0]?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</span>
                </div>
            </div>
            <div className={styles.listCourse}>
                {listCourse?.map((item, index) => {
                    return <ItemCourseV2 key={index} item={item}/>
                })}
            </div>
        </div>
    </div>
  )
}
