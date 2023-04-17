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

// export const getMovieById = createAsyncThunk ("quanLyPhim/getMovieById",
//   async (payload, {rejectWithValue}) => {
//     try {
//       const res = await quanLyPhimServices.getMovieById();
//       return res.data.content
//     } catch (error) {
//       rejectWithValue(error)
//     }
//   }
// )
