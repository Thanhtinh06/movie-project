import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
  return (
    <div className="MainLayout flex flex-col ">
      <Header />
      <div className="MainContent min-h-screen bg-slate-100 ">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout