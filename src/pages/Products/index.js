import api from '../../services/api';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

    
    return(
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

    export default Products;

