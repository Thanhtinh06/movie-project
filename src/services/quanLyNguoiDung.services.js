import http from '../constant/api'

export const quanLyNguoiDungServices = {
  registerUser : (payload) =>{
    return http.post(`QuanLyNguoiDung/DangKy`,payload)
  },
  loginUser : (payload) => {
    return http.post('QuanLyNguoiDung/DangNhap',payload)
  },
  getInforUser : () =>{
    return http.get('QuanLyNguoiDung/ThongTinTaiKhoan')
  }
}