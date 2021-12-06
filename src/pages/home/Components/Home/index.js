import'./style.scss';
import Carousel from 'react-bootstrap/Carousel';


const Home=() =>{

    return(
        <>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-60"
                src="https://imagens.trocafone.com/images/banners/20211203164808-Brazil-banner7.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-60"
                src="https://imagens.trocafone.com/images/banners/20211203170726-Brazil-banner1.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Home;