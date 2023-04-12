import http from '../constant/api'

export const quanLyPhimServices = {
  getMovieList : (query='') => {
    return http.get(`QuanLyPhim/LayDanhSachPhim${query}`)
  },
} 