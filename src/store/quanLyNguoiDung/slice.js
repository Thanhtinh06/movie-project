import { createSlice } from "@reduxjs/toolkit";
import { getInforUser, loginUser } from "./thunkActions";

const initialState = {
  user: undefined,
  inforAccount: undefined,
};

export const {
  reducer: quanLyNguoiDungReducer,
  actions: quanLyNguoiDungActions,
} = createSlice({
  name: "quanLyNguoiDung",
  initialState,
  reducers: {
    logOut: (state, action) => {
      localStorage.removeItem("user");
      state.user = null;
      state.inforAccount = undefined;
    },
    getUser: (state, action) => {
      const data = localStorage.getItem("user");
      if (data !== undefined && data !== null) {
        try {
          state.user = JSON.parse(data);
        } catch (error) {
          console.log("Error parsing user data:", error);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(getInforUser.fulfilled, (state, action) => {
        state.inforAccount = action.payload;
      });
  },
});
