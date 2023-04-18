import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/quanLyDatVe.services";


export const getListBoxTicket = createAsyncThunk(
  "quanLyDatVe/getListBoxTicket", 
  async (payload, {rejectWithValue}) =>{
    const {id} = payload
    try {
      const res = await quanLyDatVeServices.getListBoxTicket(id);
      return res.data.content
      
    } catch (error) {
      rejectWithValue(error)
    }

  }
)