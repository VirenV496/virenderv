import React from 'react';
import Navbar2 from './navbar2/Navbar2';
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
    <div className="layout">
    {/* <Navbar2 /> */}
    <div className="content">{children}</div>
    {/* <Footer /> */}
   </div>
   </>
  );
};

export default Layout;