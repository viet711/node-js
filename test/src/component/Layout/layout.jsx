import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products_add">Thêm</Link>
                    </li>
                    {/* <li>
                        <Link to="/login">Login</Link>
                    </li> */}
                    <li>
                        <Link to="/Registration">Registration</Link>
                    </li>

                   
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;