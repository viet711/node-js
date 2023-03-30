import { Outlet, Link } from "react-router-dom";
import { menuList } from "../data/data";
const Navbar = () => {
  return /*html*/<>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">MENU</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">

          <span className="text-2xl text-decoration-none text-light block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            < Link to="/">Home</Link >
          </span>
          <span className="text-2xl text-decoration-none text-light block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            < Link to="/products_add">Thêm</Link >
          </span>
        


        </div>
        <div>
          <a href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"></a>
        </div>
      </div>
    </nav>

  </>
}
export default Navbar

