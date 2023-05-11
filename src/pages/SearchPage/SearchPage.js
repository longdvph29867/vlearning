import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import TitlePage from '../../components/TitlePage/TitlePage'
import { SET_LOADING_OFF, SET_LOADING_ON } from '../../redux/constant/spinnerConstant'
import { courseService } from '../../service/courseService'
import FilterSearch from './FilterSearch/FilterSearch'
import ResultSearch from './ResultSearch/ResultSearch'
import styles from './searchPage.module.scss'
export default function SearchPage() {
    const params = useParams()
    const dispatch = useDispatch();
    const [listResult, setListResult] = useState([])
    useEffect(() => {
        dispatch({type: SET_LOADING_ON})
        courseService.getListCourseSearch(params.value)
        .then((res) => {
            dispatch({type: SET_LOADING_OFF})
            setListResult(res.data)
        })
        .catch((err) => {
            dispatch({type: SET_LOADING_OFF})
            setListResult([])
        });
    
    }, [params.value])
    
  return (
    <div className={styles.searchPage}>
        <TitlePage title='TÌM KIẾM' text='KẾT QUẢ TÌM KIẾM KHÓA HỌC!!!'/>
        <div className="container">
            <div className={styles.searchContainer}>
                <div className={styles.item}>
                    <FilterSearch/>
                </div>
                <div className={styles.item}>
                    <ResultSearch listResult={listResult}/>
                </div>
            </div>
        </div>
    </div>
  )
}
