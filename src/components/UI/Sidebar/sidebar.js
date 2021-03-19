import React from "react";
import Aux from '../../../hoc/Auxiliar';
import Logo from '../../../assets/logo.png';
import Avatar from '../../../assets/avatar.png';
import Logout from '../../../assets/Icons/Logout.svg';
import { 
    Image, 
    Button } from 'react-bootstrap';

import "./sidebar.css";

const sidebar = props => (
    <Aux>
        <div className={`main p-4 ${props.static ? "sidebar-static" : "sidebar-scroll"}`}>
            <Image src={Logo} className="mb-5 w-75" fluid />
            <Image src={Avatar} fluid roundedCircle />
            <h4 className="mt-4">ASHK123</h4>
            <h5 className="text-placeholder">Level 1</h5>
            <p className="text-placeholder mt-4">"Work hard on your test"</p>
            <Button variant="primary" className="w-75 btn-logout">
                <Image src={Logout} className="btn-img-logout" fluid />
                LOG OUT
            </Button>
        </div>
    </Aux>
);

export default sidebar;