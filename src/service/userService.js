import { https } from "./config"


export const userService = {
    signIn: (data) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', data);
    },
    signUp: (data) => {
        return https.post('/api/QuanLyNguoiDung/DangKy', data);
    },
    getInfoAccountUser: (data) => {
        return https.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan', data)
    },
    putInfoUpdate: (data) => {
        return https.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', data)
    }
}