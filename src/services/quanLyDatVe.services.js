import http from "../constant/api"

export const quanLyDatVeServices = {
  getListBoxTicket : (id) => {
    return http.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
  },
  bookTicket : (payload) =>{
    return http.post(`QuanLyDatVe/DatVe`,payload)
  } 
}