import { createSlice } from "@reduxjs/toolkit";
import { getListBoxTicket, bookTicket } from "./thunkActions";

const initialState = {
  dataSeat: [],
  listSeat: [],
  inforMoive: undefined,
  chooseSeat: [],
  listTicket: undefined,
  reRender: false,
  chooseSeatOrtherPeople: [],
};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeActions } =
  createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
      addSeat: (state, action) => {
        const index = state.chooseSeat?.findIndex(
          (item) => item.value.stt === action.payload.value.stt
        );
        if (index !== -1) {
          state.chooseSeat?.splice(index, 1);
        } else {
          state.chooseSeat.push(action.payload);
        }
      },

      updatechooseSeatOrtherPeople: (state, action) => {
        state.chooseSeatOrtherPeople = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getListBoxTicket.fulfilled, (state, action) => {
          state.dataSeat = action.payload;
          state.listSeat = action.payload.danhSachGhe;
          state.inforMoive = action.payload.thongTinPhim;
        })
        .addCase(bookTicket.fulfilled, (state, action) => {
          state.chooseSeat = [];
          state.listTicket = action.payload;
          state.reRender = !state.reRender;
        });
    },
  });

