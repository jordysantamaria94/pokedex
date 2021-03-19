import React from "react";

import { Card, Form, Badge } from "react-bootstrap";

import "./cardDetail.css";

const cardDetail = ({pokemon}) => (
    <Card className="shadow p-4 mt-3">
        <h2>{ pokemon.name }</h2>
        <Card.Body>
            { pokemon.types.map((type) => <Badge key={type.type.name} variant="success">{ type.type.name }</Badge>) }
        </Card.Body>
        <Card.Title>Pokedex Number</Card.Title>
        <p>{ pokemon.id }</p>
        <hr />
        <Card.Title>Height</Card.Title>
        <p>{ pokemon.height }</p>
        <hr />
        <Card.Title>Weight</Card.Title>
        <p>{ pokemon.weight }</p>
        <hr />
        <Card.Title>Shiny</Card.Title>
        <Form inline className="w-100">
            <Card.Img src={pokemon.sprites.front_shiny} className="images mr-4" fluid="true" />
            <Card.Img src={pokemon.sprites.back_shiny} className="images" fluid="true" />
        </Form>
    </Card>
)

export default cardDetail;