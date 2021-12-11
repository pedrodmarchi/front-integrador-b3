import { useCart } from "../../Context/index";
/* import { CartItens } from '../Home/Components/Cart/index' */
import { Helmet } from 'react-helmet';
import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

/* const Cart = () => {
    /* const { cart, clearCart } = useCart();
    console.log(cart, clearCart);
    const { cartItens } = cart;
    console.log("isso é:", cartItens, cart); */


            /* <h2 className="text-center my-4">404 Manutenção</h2>
            <Container fluid="lg" >
                <Row>
                    <Col md={12} lg={9}>
                        <ul>
                            {
                                cartItens.map((item) => {
                                    return (
                                        <CartItens product={item} key={item.id} />
                                    )
                                })
                            }
                        </ul>
                    </Col>
                    <Col md={12} lg={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">Total:</Card.Title>
                                <Card.Text className="fw-bolder fs-2">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(CartItens.reduce((acc, curr) => acc + curr.price * curr.count, 0))}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between">
                                <Button variant="dark">Pagamento</Button>
                                <Button variant="outline-danger" onClick={clearCart} >Limpar</Button>
                            </Card.Footer>
                        </Card>

                    </Col>
                </Row>
            </Container>

        <Helmet>
                <title>Tech Store | Carrinho</title>
        </Helmet> */

export default function Cart() {
    const { add, cart, remove } = useCart();

    return (
        <>
        <Helmet>
                <title>Tech Store | Carrinho</title>
        </Helmet>
        <Row className="g-4 flex-column mx-auto flex-md-row justify-content-between px-5 py-5 ">
            {cart.map((product) => 
                <Card  style={{ width: '18rem' }} key={product.id} className="py-3 px-3 mx-auto">
                    <Card.Img variant="top" src={product.image} alt="imagem do produto" className="card-img-top"/>
                    <Card.Body className="">
                        <Card.Title as={Link} to={`/produtos/${product.id}`}>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                            <Card.Link as={Link} to={product.category.name} className="d-block mt-1">
                                {product.category.name.toUpperCase()}
                            </Card.Link>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush"> 
                        <ListGroupItem>
                            <BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/>
                        </ListGroupItem>             
                        <ListGroupItem className="mx-auto"><Badge bg="success">R$ {product.price}</Badge></ListGroupItem>
                    </ListGroup>
                    <Card.Body className="mx-auto">
                    </Card.Body>
                </Card>
            )
            }
        </Row>
        </>
    )
}
