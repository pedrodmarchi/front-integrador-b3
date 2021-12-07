import './style.scss';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
<<<<<<< HEAD
import {Link} from 'react-router-dom';
//import {Helmet} from 'react-helmet';
=======
import { Helmet } from 'react-helmet';
>>>>>>> 5deffa6a2dfbc1812ccb03c0096d0d4d439d2174
//import useAxios from '../../hooks/useAxios';
import logo2 from './img/logo2.svg';

const Header = () => {


    return (
        <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to={"/"}><img id="logo" src={logo2} class="img-fluid" alt= "logo da Tech Store"/>
            Tech Store
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>
                    <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">TVs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Informática</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#cart">
                        <Button variant="light" className="d-inline-flex align-items-center">
                            <BsFillCartFill className="me-2"/>
                            <p className="align-self-center mb-0 d-none d-md-block"> Carrinho </p>
                            <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;