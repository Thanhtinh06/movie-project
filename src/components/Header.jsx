import React from "react";
import { NavLink } from "react-router-dom";
import '../css/index.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="../logo2.jpeg" alt="logo"/>
      </div>
      <div className="navbar">
        <NavLink className="navlink-primary" to="/home" > Home </NavLink>
        <NavLink className="navlink-primary" to="/news"> News </NavLink>
        <NavLink className="navlink-primary" to="/contact"> Contact </NavLink>
      </div>
      <div className="group-btn">
        <NavLink className="btn-primary" to="/login">Login</NavLink>
        <NavLink className="btn-primary" to="/register" >Register</NavLink>
      </div>
    </header>
  );
};

export default Header;
