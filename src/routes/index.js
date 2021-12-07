import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import About from '../pages/About';

const RouteList = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/carrinho" element={<Cart />}/>
            <Route path="/produtos/produto" element={<Product />}/>
            <Route path="/produtos" element={<Products />}/>
            <Route path="/sobre" element={<About />}/>
        </Routes>
        </BrowserRouter>
    )
} 

export default RouteList;