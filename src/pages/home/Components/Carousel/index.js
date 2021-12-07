import './style.scss';

import Carousel from 'react-bootstrap/Carousel'
import {Row,Col} from 'react-bootstrap';



const Carrossel = () => {
   

    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <Row>
              <Col md={3} sm={6}>
                <img
                  className="d-block w-100"
                  src=""
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-sm-block">
                <img
                  className="d-block w-100"
                  src=""
                  alt="Second slide"
                />
              </Col>
              <Col md={3} sm={6} className="d-none d-md-block">
                <img
                  className="d-block w-100"
                  src=""
                  alt="Second slide"
                />
              </Col>
           </Row>
          </Carousel.Item>
        </Carousel>
    )
}

export default Carrossel;