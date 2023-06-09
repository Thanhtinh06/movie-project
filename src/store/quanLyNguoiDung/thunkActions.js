import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung.services";


export const loginUser = createAsyncThunk('quanLyNguoiDung/loginUser',
  async (payload,{rejectWithValue}) => {
    try {
      const res =  await quanLyNguoiDungServices.loginUser(payload)
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const getInforUser = createAsyncThunk('quanLyNguoiDung/getInforUser',
  async (payload,{rejectWithValue}) => {
    try {
      const res = await quanLyNguoiDungServices.getInforUser()
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk('quanLyNguoiDung/updateUser',
  async(payload,{rejectWithValue})=>{
    try {
      const res = await quanLyNguoiDungServices.updateUser(payload)
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
)



