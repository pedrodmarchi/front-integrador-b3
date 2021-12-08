import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem, CardGroup, Row, Container, Col } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Product = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        async function loadRepositoryData() {
          try {
            const response = await api.get(`products/${id}`);
            setProduct(response.data);
          } catch (error) {
            Swal.fire({
              title: error.response.status,
              icon: 'error',
              text: error.response.data.message
            })
          }
        }
        loadRepositoryData();
      }, [id]);


    return (
        <>
            <Row xs={1} md={2} className="g-4">
                {product.id && (
                    <Card style={{ width: '18rem' }} >
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
                            <Card.Link href="#" >Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                )
                }
            </Row> 
        </>
    )
}

export default Product;

