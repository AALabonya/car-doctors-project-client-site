import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Header/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;