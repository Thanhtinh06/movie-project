import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "../../services/quanLyRap.services";

export const getTheaterList = createAsyncThunk(
  "quanLyRap/getTheaterList",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyRapServices.getTheaterList(payload);
      return res.data.content;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getTheaterGroup = createAsyncThunk(
  "quanLyRap/getTheaterGroup",
  async (payload, { rejectWithValue }) => {
    try {
      const { id } = payload;
      const query = `maHeThongRap=${id}&maNhom=GP07`;
      const res = await quanLyRapServices.getTheaterGroup(query);
      console.log(res.data.content[0])
      return res.data.content[0];
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
