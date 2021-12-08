import './style.scss';

import Carousel from 'react-bootstrap/Carousel'
import {Row,Col} from 'react-bootstrap';



const Carrossel = () => {
   

    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <Row className="y-4">
              <Col md={4} sm={6}><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/01/00/img/134511/8/134511869_1SZ.jpg"
                  alt="Second slide"
                /></a>
              </Col>
              <Col md={4} sm={6} className="d-none d-sm-block"><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/01/00/img/134472/3/134472396_1SZ.jpg"
                  alt="Second slide"
                /></a>
              </Col>
              <Col md={4} sm={6} className="d-none d-md-block"><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/01/00/img/3223550/4/3223550430_1SZ.jpg"
                  alt="Second slide"
                /></a>
              </Col>
           </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={4} sm={6}><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/3042339096/imagens/smartphone-redmi-note-9-128gb-48mp-tela-6-53-preto/3042339096_1_xlarge.jpg"
                  alt="Second slide"
                /></a>
              </Col>
              <Col md={4} sm={6} className="d-none d-sm-block"><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/01/00/img/3191812/1/3191812182_1SZ.jpg"
                  alt="Second slide"
                /></a>
              </Col>
              <Col md={4} sm={6} className="d-none d-md-block"><a href="#">
                <img
                  className="d-block w-100 h-75"
                  src="https://images-americanas.b2w.io/produtos/01/00/img/2520061/5/2520061536_1SZ.jpg"
                  alt="Second slide"
                /></a>
              </Col>
           </Row>
          </Carousel.Item>
        </Carousel>
    )
}

export default Carrossel;