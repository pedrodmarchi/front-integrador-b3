import './style.scss';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';


const Header = () => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Tech Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>

                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Celulares</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">TVs</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Informática</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">Carrinho</Nav.Link>
                            <Nav.Link href="#">Produtos</Nav.Link>
                            <Nav.Link href="#">Sobre nós</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;