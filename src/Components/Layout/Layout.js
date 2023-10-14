import React ,{Fragment} from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import Nav from "../Navbar/Nav";
// import FooterN from "../FooterN/FooterN";

const Layout= ()=>{
    return (
        <Fragment>
            <Navbars/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </Fragment>
    )
}
export default Layout;