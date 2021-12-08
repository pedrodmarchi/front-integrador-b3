import api from '../../services/api';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, CardGroup, Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";

const Products = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        async function loadRepositoryData() {
            try {
                const response = await api.get(`products/categories/name/${categoryName}`);
                setProducts(response.data);
            } catch (error) {
                Swal.fire({
                    title: error.response.status,
                    icon: 'error',
                    text: error.response.data.message
                })
            }
        }
        loadRepositoryData();
    }, [categoryName]);


    return (
        <>
            <Row xs={1} md={2} className="g-4 justify-content-between px-5 py-5">
                {products.map((product) =>
                    <Card style={{ width: '18rem' }} key={product.id} className="py-3 px-3">
                        <Card.Img variant="top" src={product.image} alt="imagem do produto" className="card-img-top" />
                        <Card.Body className="">
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                                <Card.Link className="d-block mt-1">
                                    {product.category.name.toUpperCase()}
                                </Card.Link>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill />
                            </ListGroupItem>
                            <ListGroupItem className="mx-auto"><Badge bg="success">R$ {product.price}</Badge></ListGroupItem>
                        </ListGroup>
                        <Card.Body className="mx-auto">
                            <Card.Link href="#">
                                <Button as={Link} to={`/produtos/${product.id}`} variant="outline-success" clasName="d-flex">
                                    <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1" />
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


export default Products;

