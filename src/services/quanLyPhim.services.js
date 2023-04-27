import http from '../constant/api'

export const quanLyPhimServices = {
  getMovieList : (query='') => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`)
  },
  getMovieById : (id) => {
    return http.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
  },
  getBanner : () =>{
    return http.get(`QuanLyPhim/LayDanhSachBanner`)
  }
} 
