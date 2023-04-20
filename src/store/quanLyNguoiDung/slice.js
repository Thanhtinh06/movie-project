import { createSlice } from "@reduxjs/toolkit";
import { getInforUser, loginUser } from "./thunkActions";


const initialState = {
  user : undefined,
  inforAccount : undefined,
}

export const {reducer : quanLyNguoiDungReducer, actions: quanLyNguoiDungActions} = createSlice(
  {
    name : 'quanLyNguoiDung',
    initialState,
    reducers:{
      logOut : (state,action)=>{
        localStorage.removeItem('user')
        state.user = undefined
        state.inforAccount = undefined

      },
      getUser : (state,action)=> {
        const data = localStorage.getItem('user')
        if(data){
          state.user = JSON.parse(data)
        }
      }
    },
    extraReducers : (builder)=>{
      builder 
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.user = action.payload
        localStorage.setItem('user',JSON.stringify(action.payload))
      })
      .addCase(getInforUser.fulfilled,(state,action)=>{
        state.inforAccount = action.payload
      })
    },

  }
)