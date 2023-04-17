import http from '../constant/api'


export const quanLyRapServices = {
  getTheaterList : () => {
    return http.get("QuanLyRap/LayThongTinHeThongRap")
  },
  getTheaterGroup : (query = '') => {
    return http.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?${query}`)
  },
  getMovieSchedule : (id) => {
    return http.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
  }
}