import { createSlice } from "@reduxjs/toolkit";
import { getBanner, getMovieList} from './thunkAction';

const initialState = {
  movieList : [],
  updateList : [],
  banner : [],
  isLoading : false,
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
    .addCase(getMovieList.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getMovieList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movieList = action.payload;
      state.updateList = action.payload;
    })
    .addCase(getBanner.fulfilled, (state,action)=>{
      state.banner = action.payload
    })
  }
})