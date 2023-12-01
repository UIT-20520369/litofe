import * as React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
function LayOut (){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}

export default LayOut;