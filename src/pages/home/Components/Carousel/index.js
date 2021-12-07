import './style.scss';

import Carousel from 'react-bootstrap/Carousel'
import {Row,Col} from 'react-bootstrap';



const Carrossel = () => {
   

    return (
        <Carousel variant="dark">
          <Carousel.Item>
            <Row>
              <Col md={4} sm={6}>
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/61hAn48vroL._AC_SL1500_.jpg"
                  alt="Second slide"
                />
              </Col>
              <Col md={4} sm={6} className="d-none d-sm-block">
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/61Khvv7MSGL._AC_SL1000_.jpg"
                  alt="Second slide"
                />
              </Col>
              <Col md={4} sm={6} className="d-none d-md-block">
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/61IJBsHm97L._AC_SL1500_.jpg"
                  alt="Second slide"
                />
              </Col>
           </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col md={4} sm={6}>
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/613cWkz9GtS._AC_SL1107_.jpg"
                  alt="Second slide"
                />
              </Col>
              <Col md={4} sm={6} className="d-none d-sm-block">
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/81JdWsw6h4L._AC_SL1500_.jpg"
                  alt="Second slide"
                />
              </Col>
              <Col md={4} sm={6} className="d-none d-md-block">
                <img
                  className="d-block w-100 h-75"
                  src="https://m.media-amazon.com/images/I/81ugUo9f9PL._AC_SL1500_.jpg"
                  alt="Second slide"
                />
              </Col>
           </Row>
          </Carousel.Item>
        </Carousel>
    )
}

export default Carrossel;