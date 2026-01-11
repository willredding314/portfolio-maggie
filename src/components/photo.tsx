import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { GiMagicSwirl, GiDragonOrb } from "react-icons/gi"
import { HiOutlineDocument } from "react-icons/hi"
import { FaRocket } from "react-icons/fa";
import maggie_aboutjpeg from './imgs/maggie-about.jpeg'

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
                            <img src={maggie_aboutjpeg} width="286" height="382"></img>
                            <figcaption className="white caption">Me at Gyeongbokgung Palace in Seoul</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={maggie_aboutjpeg} width="286" height="382"></img>
                            <figcaption className="white caption">Me at Gyeongbokgung Palace in Seoul</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={maggie_aboutjpeg} width="286" height="382"></img>
                            <figcaption className="white caption">Me at Gyeongbokgung Palace in Seoul</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
                <h1 className="white pagetitle">Videography</h1>
            </Container>

        </Container>
    </section>
    )
}

export default Photo;