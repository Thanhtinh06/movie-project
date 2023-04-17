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
