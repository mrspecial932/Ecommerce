import {  Routes , Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/productDetail";
import Checkout from "../pages/checkout";
import Login from "../pages/login";
import Signup from "../pages/Signup";

const Routers = () => {
    return (
    <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='shop/:id' element={<ProductDetails/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='Checkout' element={<Checkout/>} />
        <Route path='Login' element={<Login/>} />
        <Route path='signUp' element={<Signup/>} />
    </Routes>

    )
};
export default Routers;