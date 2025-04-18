import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayouts = () => {
    return (
        <>
        <Navbar></Navbar>
          <div className="min-h-[calc(100vh-116px)]">
            <h2></h2>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayouts;