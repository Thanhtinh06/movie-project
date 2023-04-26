import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeServices } from "../../services/quanLyDatVe.services";
import { quanLyDatVeActions } from "./slice";
import { connection} from "./../../index"



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


export const bookTicket = createAsyncThunk("quanLyDatVe/bookTicket",
  async(payload,{rejectWithValue,getState})=>{
    try {
      const res = await quanLyDatVeServices.bookTicket(payload);
      const userName = getState().quanLyNguoiDung.user.taiKhoan
      const codeMovie = getState().quanLyDatVe.inforMoive.maLichChieu
      connection.invoke("datGheThanhCong",userName,codeMovie)
      return res.data.content
    } catch (error) {
      rejectWithValue(error)
    }
  }
)

export const addSeat = createAsyncThunk("quanLyDatVe/addSeat",
  async(payload, {rejectWithValue,getState,dispatch}) => {
    try {
      //add seat
      await dispatch(quanLyDatVeActions.addSeat(payload))
      const chooseSeat = getState().quanLyDatVe.chooseSeat.map(item => item.value)
      const chooseSeatStr = JSON.stringify(chooseSeat)
      const userName = getState().quanLyNguoiDung.user.taiKhoan
      const codeMovie = getState().quanLyDatVe.inforMoive.maLichChieu
      //call signalR
      connection.invoke("datGhe",userName,chooseSeatStr,codeMovie)

    } catch (error) {
      rejectWithValue(error)
    }
  }
)