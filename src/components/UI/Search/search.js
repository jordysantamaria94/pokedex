import React from 'react';
import Search from '../../../assets/Icons/Search.svg';
import Aux from '../../../hoc/Auxiliar';

import { 
    Image, 
    Button,
    Form } from 'react-bootstrap';

import "./search.css";

const search = props => (
    <Aux>
        <Form className="form-search" onSubmit={props.searchPokemon} inline>
            <Form.Control type="text" className={`shadow ${props.back ? "search-input" : "search-full-input"} w-100`} onChange={props.handleInputPokemon} placeholder="Search" />
            <Button type="submit" variant="primary" className={`shadow main search-btn`}>
                <Image src={Search} fluid />
            </Button>
        </Form>
    </Aux>
);

export default search;