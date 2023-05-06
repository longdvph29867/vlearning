import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TitlePage from '../../components/TitlePage/TitlePage'
import { courseService } from '../../service/courseService'
import FilterSearch from './FilterSearch/FilterSearch'
import ResultSearch from './ResultSearch/ResultSearch'
import styles from './searchPage.module.scss'
export default function SearchPage() {
    const params = useParams()
    const [listResult, setListResult] = useState([])
    useEffect(() => {
        courseService.getListCourseSearch(params.value)
        .then((res) => {
            setListResult(res.data)
        })
        .catch((err) => {
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
