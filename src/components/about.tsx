import { Col, Container, Row } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import MovingText from 'react-moving-text'
import './styles.css'
import maggie_aboutjpg from './imgs/maggie-about.jpg'
import willandkevin from './imgs/willandkevin.png'
import willandabbys from './imgs/willandabbys.png'

const About = () => {

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
                <h1 className="white pagetitle">About Me</h1>
                <br></br>
                <Row>
                    <Col md="6">
                        <h5 className="white">Email: meredding23@gmail.com</h5>
                    </Col>
                    <Col md="6">
                        <a target="_blank" href="https://docs.google.com/document/d/1z_FOua_48rrJovqQFK-pT30eA-HQu0cj/edit?usp=sharing&ouid=101031123672540542377&rtpof=true&sd=true">
                            <button className="resume-button">Check out my resume!</button>
                        </a>
                    </Col>
                </Row>
                <br></br>
                <Row>
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
                            communications work at Pilgrim Pines. 
                        </p>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={maggie_aboutjpg} width="286" height="382"></img>
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

export default About;