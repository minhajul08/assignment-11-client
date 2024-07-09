import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const Main = () => {
    return (
        <div> 
            <div className="mx-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;