import Header from "./Adminheader"
import Navbar from "./AdminNavbar"
import Productlist from "./page/Product list"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return <>
        <div className="flex flex-col h-screen">
            {/* header */}
            <Header />
            <div className="flex-1 flex flex-row">
                {/* Productlist */}
                {/* <Productlist /> */}

            </div>
            <div className="flex-1 flex flex-row w=">
                {/* Navbar */}
                <Navbar />
                <div>
                    <Outlet/>
                </div>

            </div>
        </div>

    </>
}

export default Layout