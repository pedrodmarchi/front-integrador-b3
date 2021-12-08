import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";

const Product = () => {

    
    return(
        <>
            <Container className="vw-100 mx-auto py-4">
                <Row class="row-2 gx-4 gx-lg-5 vw-100">
                    <Col md={8} sm={8}>
                        <img className="mb-5 mb-md-0 max-auto d-flex" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="..."/>
                        <div className="d-inline-block">
                        <h1 class="display-5 fw-bolder mt-3">Shop item template</h1>
                        <div>
                            <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/>
                        </div>
                        <p class="lead mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                            
                        </div>
                        </div>
                    </Col>

               
                    <Col md={4} sm={6}>
                        <Row className="row-2 bg-white border border-grey rounded py-4">
                        <ListGroup className="list-group-flush"> 
                            <ListGroupItem className="mx-auto mt-2"><Badge bg="success">R$</Badge></ListGroupItem>         
                            <ListGroupItem className="mx-auto mt-2">À vista no PIX com até <p className="fw-bolder d-inline">15% OFF</p></ListGroupItem>
                            <ListGroupItem className="mx-auto mt-2">Em até 12x de R$ 27,44 sem juros no cartão <p>Ou em 1x no cartão com até <strong>10% OFF</strong></p></ListGroupItem>
                        </ListGroup>
                        <div className="d-flex justify-content-center mt-2">
                        <Button variant="outline-success" clasName="d-flex">
                                <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1"/>
                                <p className="mb-0 d-inline-flex"> Adicionar ao carrinho </p>
                        </Button>
                        </div>
                        </Row>
                    </Col> 
                </Row>
            </Container>
        </>
    )
    }

    export default Product;
