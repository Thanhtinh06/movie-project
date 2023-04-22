import http, { httpAuthor } from '../constant/api'

export const quanLyNguoiDungServices = {
  registerUser : (payload) =>{
    return http.post(`QuanLyNguoiDung/DangKy`,payload)
  },
  loginUser : (payload) => {
    return http.post('QuanLyNguoiDung/DangNhap',payload)
  },
  getInforUser : () =>{
    return httpAuthor.post('QuanLyNguoiDung/ThongTinTaiKhoan')
  },
  updateUser : (payload) =>{
    return httpAuthor.put('QuanLyNguoiDung/CapNhatThongTinNguoiDung',payload)
  }
}