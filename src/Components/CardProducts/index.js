/* eslint-disable no-lone-blocks */
import './style.scss';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
        <Row xs={1} md={2}  className="g-4">
            {products.map((product) => 
                <Card style={{ width: '18rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.image} alt="imagem do produto" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroupItem>{product.category.name}</ListGroupItem>
                        <ListGroupItem>R$ {product.price}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button as={Link} to={`/produtos/${product.id}`}>Comprar</Button>
                    </Card.Body>
                </Card>
            )
            }
        </Row>
        </>
    )
}




export default CardProducts;