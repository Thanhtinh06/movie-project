import { createSlice } from "@reduxjs/toolkit";
import { getMovieList } from './thunkAction';

const initialState = {
  movieList : []
}

export const { 
  reducer: quanLyPhimReducer,
  actions: quanLyPhimActions
} = createSlice({
  name: 'quanLyPhim',
  initialState,
  reducer : {},
  extraReducers : (builder) => {
    builder
      .addCase(
        getMovieList.fulfilled,(state,action) => {
          state.movieList = action.payload
        }
      )
  }
})