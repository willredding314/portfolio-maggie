import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GiMagicSwirl, GiDragonOrb } from "react-icons/gi"
import { HiOutlineDocument } from "react-icons/hi"
import { FaRocket } from "react-icons/fa";
import maggie_aboutjpeg from './imgs/maggie-about.jpeg'
import sara_gradJPG from './imgs/sara_grad.jpg'
import sara_grad2png from './imgs/sara_grad2.png'
import sara_grad3png from './imgs/sara_grad3.png'
import sara_grad4png from './imgs/sara_grad4.png'
import sara_grad5png from './imgs/sara_grad5.png'
import sara_grad6png from './imgs/sara_grad6.png'
import sara_grad7png from './imgs/sara_grad7.png'
import sara_grad8png from './imgs/sara_grad8.png'
import sara_grad9png from './imgs/sara_grad9.png'
import sara_grad10png from './imgs/sara_grad10.png'
import sara_grad11png from './imgs/sara_grad11.png'
import sara_grad12png from './imgs/sara_grad12.png'
import sara_grad13png from './imgs/sara_grad13.png'
import sara_grad14png from './imgs/sara_grad14.png'
import sara_grad15png from './imgs/sara_grad15.png'
import sara_grad16png from './imgs/sara_grad16.png'
import sara_grad17png from './imgs/sara_grad17.png'
import sara_grad18png from './imgs/sara_grad18.png'
import sara_grad19png from './imgs/sara_grad19.png'
import sara_grad20png from './imgs/sara_grad20.png'
import sara_grad21png from './imgs/sara_grad21.png'
import camp1jpg from './imgs/camp1.jpg'
import camp2png from './imgs/camp2.png'
import camp3jpg from './imgs/camp3.jpg'
import camp4jpg from './imgs/camp4.jpg'
import camp5jpg from './imgs/camp5.jpg'
import camp6png from './imgs/camp6.png'
import camp7jpg from './imgs/camp7.jpg'
import camp8jpg from './imgs/camp8.jpg'
import camp9jpg from './imgs/camp9.jpg'
import camp10jpg from './imgs/camp10.jpg'
import camp11jpg from './imgs/camp11.jpg'


const Photo = () => {

    const particlesInit = async (engine: any) => {
        await loadFull(engine);
    };

    return (<section>
        <Container fluid className="about-container">
            <Particles id="#tsparticles" 
                    init={particlesInit}
                    options={{
                        background: {
                            color: {
                              value: "#0B192C",
                            },
                          },
                          fpsLimit: 120,
                          interactivity: {
                            events: {
                              onClick: {
                                enable: false,
                                mode: "push",
                              },
                              onHover: {
                                enable: false,
                                mode: "repulse",
                              },
                              resize: true,
                            },
                            modes: {
                              push: {
                                quantity: 4,
                              },
                              repulse: {
                                distance: 200,
                                duration: 0.4,
                              },
                              bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.5,
                                size: 40
                              },
                            },
                          },
                          particles: {
                            color: {
                              value: "#ffffff",
                            },
                            collisions: {
                              enable: false,
                            },
                            move: {
                              direction: "bottom",
                              enable: true,
                              outModes: {
                                default: "out",
                              },
                              random: false,
                              speed: 1,
                              straight: false,
                            },
                            number: {
                              density: {
                                enable: true,
                                area: 800,
                              },
                              value: 80,
                            },
                            opacity: {
                              value: 0.2,
                            },
                            shape: {
                              type: "circle",
                            },
                            size: {
                              value: { min: 1, max: 5 },
                            },
                          },
                          emitters: {
                            rate: {
                              delay: 0.05,
                              quantity: 2,
                            },
                            position: { x: 0, y: 0 }, // spawn near top
                             size: {
                              width: 800,
                              height: 0,
                            }
                        }
                    }}
                />
            <Container fluid className="about-section">
                <h1 className="white pagetitle">Photography</h1>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_gradJPG} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad2png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad3png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad4png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad5png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad6png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad7png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad14png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad9png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad13png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad17png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad19png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad16png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad21png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={sara_grad18png} width="281" height="421"></img>
                            <figcaption className="white caption">Sara's Graduation Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp1jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Pilgrim Pines Photos</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp2png} width="385" height="259"></img>
                            <figcaption className="white caption">Josiah and Elizabeth</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp3jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Pilgrim Pines Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp4jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Lucy Timmer</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp5jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Josiah Gustafson</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp6png} width="385" height="259"></img>
                            <figcaption className="white caption">Elizabeth Gustafson</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp7jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Chris Kiernan</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp8jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Silas, Josiah, Maja</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp9jpg} width="385" height="259"></img>
                            <figcaption className="white caption">Pilgrim Pines Photos</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="6">
                        <br></br>
                        <figure>
                            <img src={camp10jpg} width="281" height="421"></img>
                            <figcaption className="white caption">Elizabeth Gustafson</figcaption>
                        </figure>
                    </Col>
                    <Col md="6">
                        <br></br>
                        <figure>
                            <img src={camp11jpg} width="281" height="421"></img>
                            <figcaption className="white caption">Krista Johnson</figcaption>
                        </figure>
                    </Col>
                </Row>
            </Container>

        </Container>
    </section>
    )
}

export default Photo;