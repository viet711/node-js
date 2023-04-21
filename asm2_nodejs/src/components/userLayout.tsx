import { Outlet } from "react-router-dom"

import Header from "./header"
import Slider from "./slider"
import Footer from "./Footer"
import Products from "./Products"


const UserLayout = () => {
    return <>
        <Header/>
      
        <Outlet/>
        <Footer/>
        
    </>
}

export default UserLayout