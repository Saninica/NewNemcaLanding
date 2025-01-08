import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";


const BaseLayout: React.FC = () => {

    return (
        <div>
            <Navbar />

            
            <main className="flex-grow bg-gray-900" >
                <Outlet />
            </main>

            
            <Footer />

        </div>
    )
}

export default BaseLayout;