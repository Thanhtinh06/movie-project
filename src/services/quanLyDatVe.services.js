import http, { httpAuthor } from "../constant/api"

export const quanLyDatVeServices = {
  getListBoxTicket : (id) => {
    return http.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
  },
  bookTicket : (payload) =>{
    return httpAuthor.post(`QuanLyDatVe/DatVe`,payload)
  } 
}