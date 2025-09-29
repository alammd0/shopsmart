import { Outlet } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

export default function MainLayout() {
    return(
        <div>
            <nav>
                <Navbar/>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}