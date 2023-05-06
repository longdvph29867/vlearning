import React from 'react'
import imageItem1 from '../../images/aboutItem1.png'
import imageItem2 from '../../images/aboutItem2.png'
import imageItem3 from '../../images/aboutItem3.png'
import imageItem4 from '../../images/aboutItem4.png'
import styles from './aboutPage.module.scss'
export default function AboutPage() {
  return (
    <div className={styles.about}>
        <div className={styles.sliderAbout}>
            <div className="container">
                <div className={styles.sliderContent}>
                    <h3>V learning học là vui </h3>
                    <h1>Cùng nhau khám phá nhưng điều mới mẻ</h1>
                    <p>Học đi đôi với hành</p>
                </div>
            </div>
        </div>
        <div className={styles.itemAbout}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h3>V learning ?</h3>
                        <h2>Nơi hội tụ kiến thức</h2>
                        <p>
                            Đây là nền tảng giảng dạy và học tập trực tuyến được xây 
                            dựng để hỗ trợ phát triển giáo dục trong thời đại công 
                            nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn 
                            bộ các nhu cầu cần thiết của một lớp học offline. Từ đó 
                            đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử 
                            dụng cho giáo viên và học sinh, giúp tạo nên một lớp học 
                            trực tuyến thú vị và hấp dẫn.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src={imageItem1} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.itemAbout}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h3>CHƯƠNG TRÌNH HỌC V LEARNING</h3>
                        <h2>Hệ thống học hàng đầu</h2>
                        <p>
                            Giảng viên đều là các chuyên viên thiết kế đồ họa và 
                            giảng viên của các trường đại học danh tiếng trong 
                            thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết 
                            bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình 
                            LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một 
                            máy riêng.100% các buổi học đều là thực hành trên máy tính. 
                            Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho 
                            học viên những kiến thức hữu ích nhất, sát với thực tế nhất.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src={imageItem2} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.itemAbout}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h3>TẦM NHÌN V LEARNING</h3>
                        <h2>Đào tạo lập trình chuyên sâu</h2>
                        <p>
                            Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề 
                            hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên 
                            môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại 
                            công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, 
                            đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người 
                            học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học 
                            tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src={imageItem3} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.itemAbout}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h3>SỨ MỆNH V LEARNING</h3>
                        <h2>Phương pháp đào tạo hiện đại</h2>
                        <p>
                            Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền 
                            tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương 
                            pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực 
                            tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ 
                            các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát 
                            triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, 
                            sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.
                        </p>
                    </div>
                    <div className={styles.right}>
                        <img src={imageItem4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
