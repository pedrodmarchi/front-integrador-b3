import { Card, ListGroup, ListGroupItem, CardGroup,Row, Container, Col, Button, Badge } from 'react-bootstrap';
import { BsFillCartPlusFill, BsFillStarFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/api';
import './style.scss';

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      async function loadRepositoryData() {
        try {
          const response = await api.get(`products/${id}`);
          setProduct(response.data);
          console.log(product)
        } catch (error) {
          console.log(error);
        }
      }
      loadRepositoryData();
    }, [id]);
    
    return(
        <>
        {product.id &&(
            <div className="master-div mw-auto mx-auto py-4 px-3 mx-md-auto d-md-inline-flex">
            <div className="product-img-div gx-4 mx-md-0 d-md-inline-block">
                <div className="d-block">
                    <img className="product-img mb-5 mb-md-0 mx-auto w-100" src={product.image} alt="..."/>
                </div>
            
                <div>
                    <div className="d-block">
                        <div className="d-block">
                            <h1 class="display-5 fw-bolder mt-3">{product.title}</h1>
                            <div>
                            <   BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/>
                            </div>
                            <p class="lead mt-3">{product.description}</p>
                            <div class="d-flex">
                            
                            </div>
                        </div>
                    </div>
                </div>
           </div>

            <div className="purchase-div bg-white border border-grey rounded py-4 text-center d-inline-flex w-100 justify-content-center">
                <div>
                    <ListGroup className="list-group-flush"> 
                        <ListGroupItem className="mx-auto mt-2"><Badge bg="success">R$ {product.price}</Badge></ListGroupItem>         
                        <ListGroupItem className="mx-auto mt-2">À vista no PIX com até <p className="fw-bolder d-inline">15% OFF</p></ListGroupItem>
                        <ListGroupItem className="mx-auto mt-2">Em até 12x de R$ {((product.price)/12).toFixed(2)} sem juros no cartão <p>Ou em 1x no cartão com até <strong>10% OFF</strong></p></ListGroupItem>
                    </ListGroup>
                    <div className="d-flex justify-content-center mt-2">
                    <Button variant="outline-success" clasName="d-flex">
                            <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1"/>
                            <p className="mb-0 d-inline-flex"> Adicionar ao carrinho </p>
                    </Button>
                    </div>
                </div>
            </div>
        </div>         
        )}
    </> 
    )}
    /* return(
        <>
            <div className="master-div mw-auto mx-auto py-4 px-3 mx-md-auto d-md-inline-flex">
                <div className="product-img-div gx-4 mx-md-0 d-md-inline-block">
                    <div className="d-block">
                        <img className="product-img mb-5 mb-md-0 mx-auto w-100" src={product.image} alt="..."/>
                    </div>
                
                    <div>
                        <div className="d-block">
                            <div className="d-block">
                                <h1 class="display-5 fw-bolder mt-3">{product.title}</h1>
                                <div>
                                <   BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/><BsFillStarFill fill="#ffc107"/>
                                </div>
                                <p class="lead mt-3">{product.description}</p>
                                <div class="d-flex">
                                
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
    
                <div className="purchase-div bg-white border border-grey rounded py-4 text-center d-inline-flex w-100 justify-content-center">
                    <div>
                        <ListGroup className="list-group-flush"> 
                            <ListGroupItem className="mx-auto mt-2"><Badge bg="success">R$ {product.price}</Badge></ListGroupItem>         
                            <ListGroupItem className="mx-auto mt-2">À vista no PIX com até <p className="fw-bolder d-inline">15% OFF</p></ListGroupItem>
                            <ListGroupItem className="mx-auto mt-2">Em até 12x de R$ {(product.price)/12} sem juros no cartão <p>Ou em 1x no cartão com até <strong>10% OFF</strong></p></ListGroupItem>
                        </ListGroup>
                        <div className="d-flex justify-content-center mt-2">
                        <Button variant="outline-success" clasName="d-flex">
                                <BsFillCartPlusFill className="align-self-start d-inline-flex me-2 mb-1"/>
                                <p className="mb-0 d-inline-flex"> Adicionar ao carrinho </p>
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
 */
export default Product;
