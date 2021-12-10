import './style.scss';
import { Nav, Navbar, NavDropdown, Container, Button, Dropdown } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
//import {Helmet} from 'react-helmet';
//import useAxios from '../../hooks/useAxios';
import logo from './img/logo.png';
import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";

const Header = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products/categories")
            .then((response) => {
                setProducts(response.data);
                console.log(products);
            })
            .catch((error) => {
                console.log(error);
            })


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container fluid>
                    <Navbar.Brand as={Link} to={"/"}>
                        <img as={Link} to={"/"} id="logo" src={logo} className="img-fluid" alt="logo da Tech Store" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>

                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                {products.map((product) =>
                                    <NavDropdown.Item as={Link} to={`produtos/categorias/nome/${product.name}`}>{product.name}</NavDropdown.Item>
                                )}
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#cart">
                            <Button variant="light" className="d-inline-flex align-items-center">
                                <BsFillCartFill className="me-2" />
                                <p className="align-self-center mb-0 d-none d-md-block"> Carrinho </p>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar> */}




            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
            <Container fluid>
            <Navbar.Brand as={Link} to={"/"}>
                <img id="logo" src={logo} class="img-fluid" alt= "logo da Tech Store"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav px-2">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/produtos"}>Todos</NavDropdown.Item>
                        <Dropdown.Divider /> 
                        {products.map((product) =>               
                                    <NavDropdown.Item as={Link} to={`produtos/categorias/nome/${product.name}`}>{product.name}</NavDropdown.Item>
                                    )}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
                <Nav className="px-2">
                    <Nav.Link as={Link} to={"/carrinho"}>
                        <Button variant="outline-success" className="d-inline-flex align-items-center">
                            <BsFillCartFill className="me-2"/>
                            <p className="align-self-center mb-0 d-none d-md-block"> Carrinho </p>
                            <span class="badge bg-light text-dark ms-1 rounded-pill">0</span>
                        </Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;