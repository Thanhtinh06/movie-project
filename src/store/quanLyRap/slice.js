import { createSlice } from "@reduxjs/toolkit";
import {
  getTheaterList,
  getTheaterGroup,
} from "./thunkAction";

const initialState = {
  theateList: [],
  theateGroup: [],
  movieSchedule: {

  },
};

export const {
  reducer: quanLyRapReducer,
  actions: quanLyRapActions,
} = createSlice({
  name: "quanLyRap",
  initialState,
  reducers: {
    updateSchedule : (state,action) => {
      state.movieSchedule = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheaterList.fulfilled, (state, action) => {
        state.theateList = action.payload;
      })
      .addCase(getTheaterGroup.fulfilled, (state, action) => {
        if (action.payload) {
          state.theateGroup = action.payload.lstCumRap;
          state.movieSchedule = action.payload.lstCumRap[0]
        }
      })   
  },
});
