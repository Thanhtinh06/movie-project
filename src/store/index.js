import { configureStore } from "@reduxjs/toolkit";
import { quanLyRapReducer } from "./quanLyRap/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyDatVeReducer } from "./quanLyDatVe/slice";
import { quanLyNguoiDungActions, quanLyNguoiDungReducer } from "./quanLyNguoiDung/slice";

export const store = configureStore({
  reducer : {
    quanLyRap : quanLyRapReducer,
    quanLyPhim : quanLyPhimReducer,
    quanLyDatVe : quanLyDatVeReducer,
    quanLyNguoiDung : quanLyNguoiDungReducer,
  }
})

store.dispatch(quanLyNguoiDungActions.getUser())