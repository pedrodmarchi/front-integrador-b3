import './style.scss';
import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button,Badge } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import api from '../../../../services/api';
import CardProducts from '../../../../Components/CardProducts';


const Carrossel = () => {

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
   
  const getRandom = (arr, nr) => arr
  .slice() // criar uma cópia para não mudar a array inicial
  .sort(() => 0.5 - Math.random()) // misturar
  .slice(0, nr) // retirar N elementos da nova array misturada

    return (
        <Carousel variant="dark">
          {getRandom(products, 3).map((product) => 
          <Carousel.Item key={product.id}>
            <Row className="y-4">
              <Col md={4} sm={6}>
                <Card  style={{ width: '18rem' }} key={product.id} className="py-3 px-3">
                    <Card.Img variant="top" src={product.image} alt="imagem do produto" className="card-img-top"/>
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
                            <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/>
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
                </Col>
           </Row>
          </Carousel.Item>
          
          
          )}
        </Carousel>
    )
}

export default Carrossel;
