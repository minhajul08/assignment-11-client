import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import "./navbar.css"

const Main = () => {
    return (
        <div> 
             <div className="sticky">
             <Navbar></Navbar>
             </div>
            <div className=" mx-1 md:mx-5 lg:mx-10">
            
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;