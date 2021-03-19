import React from "react";

import { Card, Form } from "react-bootstrap";

import "./cardImages.css";

const cardImages = ({pokemon}) => (
    <Card className="shadow text-center p-4 mt-3">
        <Card.Img src={pokemon.sprites.other.dream_world.front_default} fluid="true" />
        <Form inline className="w-100 mt-3 justify-content-center">
            <Card.Img src={pokemon.sprites.front_default} className="image-sm mr-4" fluid="true" />
            <Card.Img src={pokemon.sprites.back_default} className="image-sm" fluid="true" />
        </Form>
    </Card>
)

export default cardImages;