import './style.scss';
import { Nav, Navbar, NavDropdown, Container, Button, Dropdown } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
//<<<<<<< HEAD
import {Link} from 'react-router-dom';
//import {Helmet} from 'react-helmet';
//=======
import { Helmet } from 'react-helmet';
//>>>>>>> 5deffa6a2dfbc1812ccb03c0096d0d4d439d2174
//import useAxios from '../../hooks/useAxios';
import logo from './img/logo.png';

const Header = () => {


    return (
        <>
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
                        <NavDropdown.Item as={Link} to={"/produtos"}>Celulares</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">TVs</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Informática</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
                <Nav className="px-2">
                    <Nav.Link href="#cart">
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