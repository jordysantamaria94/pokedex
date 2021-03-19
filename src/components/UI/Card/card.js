import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./card.css";

const card = (props) => (
    <Link to={`/detail/${props.id}`}>
        <Card className="shadow text-center p-4 ml-4 mt-3 mr-3">
            <Card.Title>{ props.name }</Card.Title>
            <p className="mb-3">{ props.id }</p>
            <Card.Img src={ props.image } fluid="true" />
            <Card.Body>
                { props.types.map((type) => <Badge key={type.type.name} variant="success">{ type.type.name }</Badge>) }
            </Card.Body>
        </Card>
    </Link>
)

export default card;