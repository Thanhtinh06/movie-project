import React from "react";
import { NavLink } from "react-router-dom";
import "../css/index.css";
import { useDispatch, useSelector } from "react-redux";
import { quanLyNguoiDungActions } from "../store/quanLyNguoiDung/slice";

const Header = () => {
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const dispatch = useDispatch()
  return (
    <header>
      <div className="logo">
        <img src="../logo2.jpeg" alt="logo" />
      </div>
      <div className="navbar">
        <NavLink className="navlink-primary" to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink className="navlink-primary" to="/news">
          {" "}
          News{" "}
        </NavLink>
        <NavLink className="navlink-primary" to="/contact">
          {" "}
          Contact{" "}
        </NavLink>
      </div>

      {!!!user && (
        <div className="group-btn">
          <NavLink className="btn-primary" to="/login">
            Login
          </NavLink>
          <NavLink className="btn-primary" to="/register">
            Register
          </NavLink>
        </div>
      )}

      { 
      user && (
        <div className="group-btn">
          <NavLink to={'/user'} className="text-white font-nunito bg-neutral-600 py-2 px-3 rounded-lg cursor-pointer hover:bg-red-400">{user.taiKhoan}</NavLink>
          <button className="btn-primary" onClick={()=>{
            dispatch(quanLyNguoiDungActions.logOut())
          }}>Log Out</button>
        </div>
      )
      }
    </header>
  );
};

export default Header;
