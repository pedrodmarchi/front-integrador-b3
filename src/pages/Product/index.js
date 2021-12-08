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
                        <h1 class="display-5 fw-bolder">Shop item template</h1>
                        <div>
                            <BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/><BsFillStarFill/> 
                        </div>
                        <div class="fs-5 my-4">
                            <span>$40.00</span>
                        </div>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                        <div class="d-flex">
                            
                        </div>
                        </div>
                    </Col>
                
               
                    <Col md={4} sm={6}>
                        <Row className="row-2 bg-white border border-grey rounded py-4">
                        <ListGroup className="list-group-flush"> 
                        <ListGroupItem>
                            1 x 1000
                        </ListGroupItem>             
                        <ListGroupItem className="mx-auto"><Badge bg="success">R$</Badge></ListGroupItem>
                        </ListGroup>
                        <div className="d-flex justify-content-center">
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
