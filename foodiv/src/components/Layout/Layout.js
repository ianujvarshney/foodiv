import React from 'react';
import Header from '../../header/Header.jsx';
import Home from '../../pages/Home.jsx'
const Layout = () => {
  return (
    <div>
      <Header />
      <div>
       <Home/>
      </div>
    </div>
  );
};

export default Layout;
