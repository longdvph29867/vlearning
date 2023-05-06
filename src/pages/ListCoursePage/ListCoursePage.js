import React, { useEffect, useState } from 'react'
import TitlePage from '../../components/TitlePage/TitlePage'
import styles from './listCoursePage.module.scss'
import { FaLaptop, FaCamera, FaBriefcase, FaBook, FaPlay, FaDiceD20, FaBookmark } from 'react-icons/fa';
import { Pagination } from 'antd';
import { courseService } from '../../service/courseService';
import ItemCourseV2 from '../../components/ItemCourseV2/ItemCourseV2';
export default function ListCoursePage() {
    const [listCourse, setlistCourse] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        courseService.getListCoursePageSplit(page)
        .then((res) => {
            setlistCourse(res.data.items)
        })
        .catch((err) => {
            console.log(err);
        });
    }, [page])
    let onChange = (page) => {
        setPage(page)
    }
  return (
    <div className={styles.listCoursePage}>
        <TitlePage title='KHÓA HỌC' text='BẮT ĐẦU HÀNH TRÌNH NÀO!!!'/>
        <div className="container">
            <div className={styles.listBoxCourse}>
                <div className={styles.itemBoxCourse}>
                    <h3>Chương trình học</h3>
                    <FaLaptop/>
                    <p>300</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>NHÀ SÁNG TẠO</h3>
                    <FaCamera/>
                    <p>10000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>NHÀ THIẾT KẾ</h3>
                    <FaBriefcase/>
                    <p>400</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>BÀI GIẢNG</h3>
                    <FaBook/>
                    <p>3000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>VIDEO</h3>
                    <FaPlay/>
                    <p>40000</p>
                </div>
                <div className={styles.itemBoxCourse}>
                    <h3>LĨNH VỰC</h3>
                    <FaDiceD20/>
                    <p>200</p>
                </div>
            </div>
            <div className={styles.listContainer}>
                <h3><FaBookmark/> <span>Danh sách khóa học</span></h3>
                <div className={styles.listContent}>
                    {listCourse?.map((item, index) => {
                        return <ItemCourseV2 item={item} key={index}/>
                    })}
                </div>
            </div>
            <div className={styles.btnPage}>
                <Pagination onChange={onChange} defaultCurrent={1} total={40} />
            </div>
        </div>
    </div>
  )
}
