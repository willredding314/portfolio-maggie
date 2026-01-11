import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from './imgs/PortfolioNew.png'
import d20 from './imgs/d20outline.png'
import { AiFillGithub, AiOutlineFileImage } from 'react-icons/ai'
import { IoDocumentTextOutline } from "react-icons/io5"
import { BiCameraMovie } from 'react-icons/bi'
import { FaBridge } from "react-icons/fa6";
import maggie_aboutjpeg from './imgs/maggie-about.jpeg'


const Graphics = () => {
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
                <h1 className="white pagetitle">Graphic Design</h1>
                <br></br>
                <h1 className="white">Thing 1</h1>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={maggie_aboutjpeg} width="286" height="382"></img>
                            <figcaption className="white caption">Me at Gyeongbokgung Palace in Seoul</figcaption>
                        </figure>
                    </Col>
                    <Col md="8">
                        <br></br>
                        <br></br>
                        <br></br>
                        <p className="white about-text">
                            Korean-born and American-raised, I was born in Jeju-do, Jeju Island in South Korea, 
                            before being adopted and growing up in North Attleboro, MA. I exercised my creative mind 
                            and love for the arts early through my education in North Attleboro and at Whitinsville
                            Christian School, before heading to Gordon College to study Communication Arts and 
                            Graphic Design. Here at school, I'm heavily involved in the student newspaper "The Tartan", 
                            and I've spent my summers learning more about marketing and design through my graphics and 
                            communications work at Pilgrim Pines over the summer. 
                        </p>
                    </Col>
                </Row>
                <br></br>
                <h1 className="white">Thing 2</h1>
                <Row>
                    <Col md="8">
                        <br></br>
                        <br></br>
                        <p className="white about-text">
                            Korean-born and American-raised, I was born in Jeju-do, Jeju Island in South Korea, 
                            before being adopted and growing up in North Attleboro, MA. I exercised my creative mind 
                            and love for the arts early through my education in North Attleboro and at Whitinsville
                            Christian School, before heading to Gordon College to study Communication Arts and 
                            Graphic Design. Here at school, I'm heavily involved in the student newspaper "The Tartan", 
                            and I've spent my summers learning more about marketing and design through my graphics and 
                            communications work at Pilgrim Pines over the summer. 
                        </p>
                    </Col>
                    <Col md="4">
                        <figure>
                            <img src={maggie_aboutjpeg} width="286" height="382"></img>
                            <figcaption className="white caption">Me at Gyeongbokgung Palace in Seoul</figcaption>
                        </figure>
                    </Col>
                </Row>
                <br></br>
            </Container>

        </Container>
    </section>
    )
}

export default Graphics;