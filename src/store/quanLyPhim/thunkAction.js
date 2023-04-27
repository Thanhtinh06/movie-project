import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhim.services";
export const getMovieList = createAsyncThunk(
  "quanLyPhim/getMovieList",
  async (payload, { rejectWithValue }) => {
    const query = "?maNhom=GP07";
    try {
      const res = await quanLyPhimServices.getMovieList(query);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getBanner = createAsyncThunk("quanLyPhim/getBanner",
  async (payload, {rejectWithValue}) =>{
    try {
      const res = await quanLyPhimServices.getBanner()
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
)