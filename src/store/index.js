import { configureStore } from "@reduxjs/toolkit";
import { quanLyRapReducer } from "./quanLyRap/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";

export const store = configureStore({
  reducer : {
    quanLyRap : quanLyRapReducer,
    quanLyPhim : quanLyPhimReducer,
  }
})