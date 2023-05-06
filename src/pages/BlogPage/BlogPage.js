import React from 'react'
import TitlePage from '../../components/TitlePage/TitlePage'
import { FaBullhorn, FaThumbsUp, FaRegComment, FaEye } from 'react-icons/fa';
import styles from './blogPage.module.scss'
import imgUser1 from '../../images/instrutor7.jpg'
import imgUser2 from '../../images/instrutor6.jpg'
import imgUser3 from '../../images/instrutor3.jpg'
import ButtonV1 from '../../components/ButtonV1/ButtonV1';
export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
        <TitlePage title='BLOG' text='THÔNG TIN CÔNG NGHỆ SỐ!!!'/>
        <div className="container">
            <div className={styles.blogPageContainer}>
                <h3><FaBullhorn/> <span>Phù hợp với bạn</span></h3>
                <div className={styles.blogPageContent}>
                    <div className={styles.left}>
                        
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://unica.vn/media/imagesck/1616739999_cach-giu-quyet-tam-va-dong-luc.jpg?v=1616739999" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Thời gian và động lực</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.png" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Tailwind css và cách cài đặt cơ bản</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://irp.cdn-website.com/c57d8c85/dms3rep/multi/khai-niem-html.webp" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Cấu trúc cơ bản trong HTML</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://files.fullstack.edu.vn/f8-prod/blog_posts/1463/61a1bbd228640.jpg" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Material UI custom theme với TypeScript</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://codeschool.vn/wp-content/uploads/2020/07/how-to-create-react-component.jpg" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://niithanoi.edu.vn/pic/News/xu-ly-bat-dong-bo-trong-javascript.jpg" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>Xử lý bất đồng bộ trong Javascript (phần 2)</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                        <div className={styles.itemBlog}>
                            <div className={styles.image}>
                                <img src="https://blog.haposoft.com/content/images/2022/11/10b88c68-typescript-logo.png" alt="" />
                            </div>
                            <div className={styles.itemContent}>
                                <h3>TyperScrip là gì, Vì sao nên dùng TyperScript</h3>
                                <div className={styles.icon}>
                                    <p><FaThumbsUp/> <span>300</span></p>
                                    <p><FaRegComment/> <span>300</span></p>
                                    <p><FaEye/> <span>300</span></p>
                                </div>
                                <div className={styles.maker}>
                                    <p>Đăng bởi <span className={styles.nameMaker}>Jhony Nguyễn</span></p>
                                </div>
                                <p className={styles.text}>
                                    Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là "timetable". 
                                    Hay dân dã hơn thì người ta hay gọi là "Lịch thường nhật",...
                                </p>
                                <ButtonV1>Xem thêm</ButtonV1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.boxRightTop}>
                            <h3>Các chủ đề được đề xuất</h3>
                            <ul>
                                <li>Front-end / Mobile apps</li>
                                <li>UI / UX / Design</li>
                                <li>BACK-END</li>
                                <li>Thư viện</li>
                                <li>Chia sẻ người trong nghề</li>
                                <li>Châm ngôn IT</li>
                                <li>Chủ đề khác</li>
                            </ul>
                        </div>
                        <div className={styles.boxRightBot}>
                            <h3>Bài đăng được đề xuất</h3>
                            <ul>
                                <li>
                                    <h4>Lập trình hướng đối tượng OOP</h4>
                                    <p>Chúng ta sẽ cùng nhau tìm hiểu hướng đối tượng OOP...</p>
                                    <div className={styles.userPost}>
                                        <img src={imgUser1} alt="" />
                                        <p>Bảo Vy</p>
                                    </div>
                                </li>
                                <li>
                                    <h4>Routing trong reactjs</h4>
                                    <p>Chúng ta sẽ cùng nhau tìm hiểu hướng đối tượng OOP...</p>
                                    <div className={styles.userPost}>
                                        <img src={imgUser2} alt="" />
                                        <p>Nam Nguyễn</p>
                                    </div>
                                </li>
                                <li>
                                    <h4>Tailwind css và cách cài đặt cơ bản</h4>
                                    <p>Chúng ta sẽ cùng nhau tìm hiểu hướng đối tượng OOP...</p>
                                    <div className={styles.userPost}>
                                        <img src={imgUser3} alt="" />
                                        <p>Nam Nguyễn</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
