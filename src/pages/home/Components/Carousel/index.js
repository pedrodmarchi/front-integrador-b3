import './style.scss';
import { Card, ListGroup, ListGroupItem, CardGroup, Row, Container, Col, Button, Badge } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../services/api';
import CardProducts from '../../../../Components/CardProducts';



const Carrossel = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products")
            .then((response) => {
                setProducts(response.data);
                console.log(products.id)
            })
            .catch((error) => {
                console.log(error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // const getRandom = (arr, nr) => arr
    //     .slice() // criar uma cópia para não mudar a array inicial
    //     .sort(() => 0.5 - Math.random()) // misturar
    //     .slice(0, nr) // retirar N elementos da nova array misturada

    return (
        <>
            <Carousel variant="dark bg-white mx-auto">
                <Carousel.Item className="mx-auto">
                    <Row className="y-4">
                    <Col md={4} sm={6}>
                        {products[1] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3 border-0">
                                <Card.Img variant="top" src={products[1].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[1].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/1`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                    <Col md={4} sm={6} className="d-none d-sm-block">
                    {products[10] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3 border-0">
                                <Card.Img variant="top" src={products[10].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[10].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/10`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                    <Col md={4} sm={6} className="d-none d-md-block">
                    {products[15] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3 border-0">
                                <Card.Img variant="top" src={products[15].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[15].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/15`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className="mx-auto">
                <Row>
                    <Col md={4} sm={6}>
                    {products[22] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3 border-0">
                                <Card.Img variant="top" src={products[22].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[22].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/22`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                    <Col md={4} sm={6} className="d-none d-sm-block">
                    {products[3] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3 border-0">
                                <Card.Img variant="top" src={products[3].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[3].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/3`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                    <Col md={4} sm={6} className="d-none d-md-block">
                    {products[9] && (
                            <Card style={{ width: '18rem' }} className="py-3 px-3  border-0">
                                <Card.Img variant="top" src={products[9].image} alt="imagem do produto" className="card-img-top" />
                                <Card.Body className="">
                                    <Card.Title>{products[9].title}</Card.Title>
                                    <Card.Link href="#">
                                        <Button as={Link} to={`/produtos/9`} variant="outline-success" clasName="d-flex">
                                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
                                            <p className="mb-0 d-inline-flex"> Comprar </p>
                                        </Button>
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
        </>
    )
}




export default Carrossel;
