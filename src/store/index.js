import { configureStore } from "@reduxjs/toolkit";
import { quanLyRapReducer } from "./quanLyRap/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyDatVeReducer } from "./quanLyDatVe/slice";

export const store = configureStore({
  reducer : {
    quanLyRap : quanLyRapReducer,
    quanLyPhim : quanLyPhimReducer,
    quanLyDatVe : quanLyDatVeReducer,
  }
})