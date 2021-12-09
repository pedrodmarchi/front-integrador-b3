/* eslint-disable no-lone-blocks */
import './style.scss';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CardProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api
            .get("/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
              });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
        <Row className="g-4 flex-column mx-auto flex-md-row justify-content-between px-5 py-5 ">
            {products.map((product) => 
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
                        <Card.Link href="#">
                            <Button as={Link} to={`/produtos/${product.id}`} variant="outline-success" clasName="d-flex">
                                <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1"/>
                                <p className="mb-0 d-inline-flex"> Comprar </p>
                            </Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            )
            }
        </Row>
        </>
    )
}




export default CardProducts;

