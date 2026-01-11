import React, { useCallback } from "react"
import "./styles.css"
import { Container, Row, Col } from "react-bootstrap"
import headshot from './imgs/headshot.jpeg'
import cartoon from './imgs/maggie_cartoon.png'
import maggie_headshot from './imgs/maggie_headshot.png'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import d20 from './imgs/d20outline.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { FaSpotify } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";

const Home = () => {

    const particlesInit = async (engine:any) => {
        await loadFull(engine);
    };

    return (
        <section>
            <Container fluid className="home-container">
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
                <Container className="home-top">
                    <Row>
                        <Col md={5} className="headshot">
                            <img src={cartoon} width="450" height="450"></img>
                        </Col>
                        <Col md={7} className="mainCard">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                                <h1 className="heyThere"><strong>Welcome!</strong></h1>
                            <br></br>
                            <h1 className="white imwill">I'm Maggie.</h1>
                            <h2 className="white">Student at Gordon College and Graphic Designer</h2>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container fluid className="home-bottom">
                    <Row>
                        <Col md="7" className="home-desc">
                            <br></br>
                            <br></br>
                            <h3 className="white">
                                I'm studying Communication Arts and Graphic Design, with an interest in 
                                marketing. I'm well rounded in the creative space, with technical skills 
                                in editing and design and a talent for photography and videography. 
                            </h3>
                            <br></br>
                            <h3 className="white">
                                I also love to make all kinds of things! I'm a prolific baker, and have 
                                lots of other projects included across this page.
                            </h3>
                        </Col>
                        <Col md="5" className="d20col">
                            <img src={maggie_headshot} width="448" height="576"></img>
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container fluid className="contact-card">
                    <Row>
                        <Col md="12">
                            <a target="_blank" href="https://www.linkedin.com/in/maggie-e-redding/" className="social-link"><AiOutlineLinkedin size={60}/></a>
                            <a target="_blank" href="https://www.instagram.com/maggieredding_/" className="social-link"><AiOutlineInstagram size={60}/></a>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default Home;