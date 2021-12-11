import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import About from '../pages/About';
import Header from '../pages/Home/Components/Header';
import Footer from "../pages/Home/Components/Footer";
import CartProvider from '../Context/index';
import useCart from '../Context/index';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

const RouteList = () => {
    return (
        <>
            <CartProvider>
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
            </CartProvider>
        </>
    )
}

export default RouteList;

export const TotalCartItens = () => {

    const {cart} = useCart();
    let itens = cart.length;
    console.log("soma:" , itens);
    return itens;
    

    {/* <ListGroup>
        <ListGroupItem className="mx-auto"><Badge bg="success">{itens}</Badge></ListGroupItem>
    </ListGroup> */}
}