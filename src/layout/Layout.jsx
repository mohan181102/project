import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Hearder";
import Footer from "../footer/Footer";

function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout