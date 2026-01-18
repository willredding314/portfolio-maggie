import React, { useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './imgs/Maggie-Logo.png'
import { Link } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai'
import { FaCameraRetro, FaPencilAlt } from 'react-icons/fa'
import { LuChefHat } from "react-icons/lu";
import "./styles.css"

const Banner = () => {
    return (
        <div className="banner">
            <Navbar className="navbar" expand="md" variant="dark" id="banner" style={{ padding: "10px" }} >
                <Navbar.Brand href="/" className="logo">
                    <img
                        src={logo}
                        width="120"
                        height="120"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="/" className="justify-content-center">
                    <h2 className="title-text"><strong>Maggie Redding</strong></h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                    <Nav>
                        <Nav.Link className="banner-link" href="/graphics">
                            <FaPencilAlt size="25"/> Graphics
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/photo">
                            <FaCameraRetro size="25"/> Photo/Video 
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/makes-and-bakes">
                            <LuChefHat size="25"/> Makes/Bakes
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/about">
                            <AiFillEye size="25"/> About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Banner;