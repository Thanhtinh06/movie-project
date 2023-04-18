import { createSlice } from "@reduxjs/toolkit";
import { getListBoxTicket } from "./thunkActions";


const initialState = {
  dataSeat : [],
  listSeat : [],
}

export const { reducer: quanLyDatVeReducer, actions:quanLyDatVeActions } = createSlice({
  name : "quanLyDatVe",
  initialState,
  reducers :{},
  extraReducers :(builder)=>{
    builder
      .addCase(getListBoxTicket.fulfilled,(state,action)=>{
        state.dataSeat = action.payload;
        state.listSeat = action.payload.danhSachGhe
        console.log(state.dataSeat)
      })
  }
})