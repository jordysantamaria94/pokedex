import React from "react";
import Logo from '../../../assets/logo.png';
import { 
    Navbar, 
    Image } from "react-bootstrap";

import "./navbar.css";

const navbar = (props) => (
    <Navbar className="main" expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand className="text-center w-100" href="/">
            <Image src={Logo} className="w-25" fluid />
        </Navbar.Brand>
    </Navbar>
);

export default navbar;