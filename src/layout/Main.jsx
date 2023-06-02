import React from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import CopyRight from '../components/CopyRight/CopyRight';

const Main = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
            <CopyRight/>
        </div>
    );
};

export default Main;