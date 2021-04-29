import Carousel from 'react-bootstrap/Carousel';
import imagem01 from '../../assets/img/carousel01.jpg';
import imagem02 from '../../assets/img/carousel02.jpg';
import imagem03 from '../../assets/img/carousel03.jpg';
import './style.css';

export const CriarCarousel = () => {
    return (
        <div className="carousel-sombra">
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="carousel"
                    src={imagem02}
                    alt="imagem crianças brincando"/>
                <Carousel.Caption>
                    <h3 className="carousel-texto-h3">Casa da Dinda</h3>
                    <p className="carousel-paragrafo">Um espaço gostoso para a criança brincar e aprender.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={imagem01}
                    alt="imagem crianças brincando"/>
 

                <Carousel.Caption>
                    <h3 className="carousel-texto-h3">Criatividade</h3>
                    <p className="carousel-paragrafo">Estimule a imaginação, a coordenação motora, a socialização</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={imagem03}
                    alt="imagem crianças brincando"/>

                <Carousel.Caption>
                    <h3 className="carousel-texto-h3">Diversão</h3>
                    <p className="carousel-paragrafo">Muita diversão para os pequenos!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}