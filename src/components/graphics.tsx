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
import winterfestpng from './imgs/winterfest.png'
import work_and_worshippng from './imgs/work_and_worship.png'
import winterjampng from './imgs/winterjam.png'
import pilgrim_pines_campstaffpng from './imgs/pilgrim_pines_campstaff.png'
import daily_paddlepng from './imgs/daily_paddle.png'
import camp_squanto_campstaffpng from './imgs/camp_squanto_campstaff.png'
import december_issuepng from './imgs/December_Issue.png'
import Tartan_Logopng from './imgs/Tartan_Logo.png'
import The_Tartan_Novemberpng from './imgs/The_Tartan_November.png'



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
                <h1 className="white">Pilgrim Pines Marketing Internship</h1>
                <Row>
                    <Col md="6">
                        <br></br>
                        <figure>
                            <img src={winterfestpng} width="648" height="432"></img>
                            <figcaption className="white caption">Winterfest Retreat Graphic</figcaption>
                        </figure>
                    </Col>
                    <Col md="6">
                        <br></br>
                        <br></br>
                        <p className="white about-text">
This graphic was to promote Winterfest 2025, a January retreat at Pilgrim Pines designed to foster community and enthusiasm for a weekend with friends and youth groups. The design centers around a teenage audience, while also aiming to feel inviting and grounded through bold shapes, clear typography, and a strong visual identity. 
The arched badge shape reinforces Pilgrim Pines’ outdoor retreat setting and sense of tradition. A cohesive green palette reflects the evergreen landscapes and winter themes. The layered line patterns and movement as a visual interest without distracting from the event details. Furthermore, the snowflake icon serves as a recognizable symbol of winter and gathering, anchoring the composition. 
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="6">
                        <br></br>
                        <p className="white about-text">
This graphic was designed to promote community work and worship at Pilgrim Pines, where the participants spend the weekend on-site helping with maintenance and touch-ups before the summer season. The design was focused to communicate togetherness and service while also feeling inviting and reflective. The toolbox icon serves a focus visual element to symbolize hands-on labor and care for camp. Where the nature-inspired background, neutral color palette, and clean typography maintain clarity while reflecting the retreat’s outdoor setting and mission-driven tone. 
This piece highlights my ability to translate an event’s purpose into visual symbolism, creating clear, brand-aligned promotional materials that are able to communicate both function and meaning within a faith-centered community. 
                        </p>
                    </Col>
                    <Col md="6">
                        <figure>
                            <img src={work_and_worshippng} width="648" height="432"></img>
                            <figcaption className="white caption">Work and Worship Retreat Graphic</figcaption>
                        </figure>
                    </Col>
                </Row>
              <Row>
                    <Col md="6">
                        <br></br>
                        <figure>
                            <img src={winterjampng} width="648" height="432"></img>
                            <figcaption className="white caption">Winterjam Retreat Graphic</figcaption>
                        </figure>
                    </Col>
                    <Col md="6">
                        <br></br>
                        <p className="white about-text">
                            This graphic was designed to promote the ‘Winterjam’ Retreat. 
                            The goal of this project was to create an eye-catching visual that 
                            would appeal to a middle school audience while still aligning with the Pilgrim Pines brand. 
                            I used a vinyl record motif in order to evoke a nostalgic and community feel, 
                            pairing it with a vibrant gradient color palette to create excitement and visual movement. 
                            The curved typography and line patterns guide the viewer’s eye toward the event name and date, 
                            reinforcing readability. The inclusion of the website URL guides the audience to where they 
                            are able to sign up for the retreat. 
                        <br></br>
                        <br></br>
                            This piece demonstrates my ability to combine brand storytelling, typography, and color theory 
                            in order to create marketing materials that balance creativity with a purpose and clarity. 
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={pilgrim_pines_campstaffpng} width="264" height="408"></img>
                            <figcaption className="white caption">Staff Booklet Graphic 2025</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={daily_paddlepng} width="264" height="408"></img>
                            <figcaption className="white caption">Weekly Pamphlet Graphic 2025</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={camp_squanto_campstaffpng} width="264" height="408"></img>
                            <figcaption className="white caption">Staff Booklet Graphic 2025</figcaption>
                        </figure>
                    </Col>
                </Row>
                <Row>
                  <Col md="12">
                        <br></br>
                        <p className="white about-text">
This graphic series was created for summer staff booklets (Camp Squanto & Mayflower) and weekly programming (at Mayflower) designed to clearly communicate the staff at each camp and their roles in the 2025 summer season. Each booklet served as a practical reference tool and community-building source for staff and families. The design for each shared visual language to reflect camp culture while supporting quick recognition and readability. All of the colors were chosen from the ‘25 Pilgrim Pines color palette showcasing a bright and joyful environment. The color variation and logo placement were used to distinguish campuses and staff groups without sacrificing brand consistency. The mountain icon was chosen to highlight the ‘25 summer theme: Elevate. This project demonstrates my ability to design information-driven, multi-location graphic systems that balance usability, clarity, and visual identity while serving both organizational and community needs. 
                        </p>
                    </Col>
                </Row>
                <br></br>
                <h1 className="white pagetitle">The Tartan Instagram Graphics</h1>
                <Row>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={december_issuepng} width="350" height="350"></img>
                            <figcaption className="white caption">The Tartan December Issue Graphic</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={Tartan_Logopng} width="324" height="398"></img>
                            <figcaption className="white caption">Gordon Collge 'The Tartan' Logo Graphic</figcaption>
                        </figure>
                    </Col>
                    <Col md="4">
                        <br></br>
                        <figure>
                            <img src={The_Tartan_Novemberpng} width="324" height="398"></img>
                            <figcaption className="white caption">The Tartan November Issue Graphic</figcaption>
                        </figure>
                    </Col>
                </Row>
                <Row>
                  <Col md="12">
                        <br></br>
                        <p className="white about-text">
These social media graphics were designed for The Tartan (Gordon College student newspaper) instagram and facebook account to promote the monthly issues, articles, and campus news in a visually engaging format. The goal was to translate traditional journalism into social media content while also maintaining The Tartan’s credibility as a student-run newspaper. The left and right design use bold headlines, both online and student photography, and consistent branding in order to highlight key stories and draw readers to the full articles. The logo was made on adobe illustrator using vectors in order to fill the original Tartan “T” logo. Each element like pulling quotes and logo-based imagery establish a recognizable visual identity across posts. This series demonstrates my ability to design editorial graphics for digital platforms, combining journalism, typography, and visual branding in order to increase accessibility, clarity, and engagement for a student and Gordon College community audience while preserving the integrity of the publication. 
                        </p>
                    </Col>
                </Row>
            </Container>

        </Container>
    </section>
    )
}

export default Graphics;