import React from "react";
import Back from "../../../assets/Icons/Back.svg";
import { Button, Image } from "react-bootstrap";

import "./back.css";

const back = props => (
    <Button variant="primary" className="shadow main btn-back" onClick={() => props.back()}>
        <Image src={Back} fluid />
    </Button>
);

export default back;