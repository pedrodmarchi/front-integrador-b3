import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/index';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Header from '../pages/Home/Components/Header';
import Footer from "../pages/Home/Components/Footer/footer";

const RouteList = () => {
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/produtos/:id" element={<Product />} />
                    <Route path="/produtos/categorias/nome/:categoryName" element={<Products />} />
                    <Route path="/sobre" element={<About />} />
                </Routes>
            <Footer />    
            </BrowserRouter>
        </>
    )
}

export default RouteList;