
import Products from "./component/pages/products";
import Products_add from "./component/pages/products_add";
import Login from "./component/pages/login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="products_add" element={<Products_add />} />
                <Route path="contact" element={<Login />} />

                


                

            </Routes>
        </BrowserRouter>
    );
};

export default App;