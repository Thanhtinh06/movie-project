import { createSlice } from "@reduxjs/toolkit";
import { getMovieList} from './thunkAction';

const initialState = {
  movieList : [],
  updateList : [],
}

export const { 
  reducer: quanLyPhimReducer,
  actions: quanLyPhimActions
} = createSlice({
  name: 'quanLyPhim',
  initialState,
  reducers: {
    updateMovieList : (state, action) => {
        state.updateList = action.payload
    },
  },
  extraReducers : (builder) => {
    builder
      .addCase(
        getMovieList.fulfilled,(state,action) => {
          state.movieList = action.payload
          state.updateList = action.payload
        }
      )
  }
})