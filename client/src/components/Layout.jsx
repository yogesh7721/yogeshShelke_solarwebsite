import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/" || location.pathname === "/home";

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className={`flex-grow ${isHomePage ? "" : "pt-[80px]"}`}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
