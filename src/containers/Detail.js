import React, { useEffect, useState } from 'react';
import Aux from '../hoc/Auxiliar';
import Sidebar from "../components/UI/Sidebar/sidebar";
import Navbar from "../components/UI/Navbar/navbar";
import FormSearchPokemon from "../components/UI/Search/search";
import CardImagesPokemon from "../components/UI/CardImages/cardImages";
import CardDetailPokemon from "../components/UI/CardDetail/cardDetail";
import BackButton from "../components/UI/Back/back";

import { useParams, useHistory } from "react-router-dom";

import { 
    Container, 
    Row, 
    Col } from 'react-bootstrap';

export default function Detail() {

    const { id }= useParams();
    let history = useHistory();
    const [ searchInputPokemon, setSearchInputPokemon ] = useState("");
    const [ infoCardImages, setInfoCardImages ] = useState(<p>Cargando...</p>);
    const [ infoCardDetail, setInfoCardDetail ] = useState(<p>Cargando...</p>);

    useEffect(() => {
        getDetailPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }, []);

    async function getDetailPokemon(url) {

        await fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setInfoCardImages(<CardImagesPokemon pokemon={result} />);
                    setInfoCardDetail(<CardDetailPokemon pokemon={result} />);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    function handleInputPokemon(event) {
        setSearchInputPokemon(event.target.value);
      }

    const searchPokemon = e => {
        e.preventDefault();
        if (searchInputPokemon !== "") {
            getDetailPokemon(`https://pokeapi.co/api/v2/pokemon/${searchInputPokemon.toLowerCase()}`);
        } else {
            back();
        }
    }

    function back() {
        history.push("/");
    }

    return (<Aux>
        <Navbar />
        <Container fluid>
            <Row>
                <Col md={3} className="text-center">
                    <Sidebar static="true" />
                </Col>
                <Col md={9} className="p-5 form-search">
                    <Row className="d-flex bar-search-back justify-content-between">
                        <Col xs={2} sm={2} md={2}>
                            <BackButton back={back} />
                        </Col>
                        <Col xs={10} sm={10} md={8}>
                            <FormSearchPokemon 
                                handleInputPokemon={handleInputPokemon} 
                                searchPokemon={searchPokemon}
                                back="true" />
                        </Col>
                    </Row>

                    <Row className="mt-3 mb-5">
                        <Col md={4}>
                            { infoCardImages }
                        </Col>
                        <Col md={8}>
                            {infoCardDetail}
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    </Aux>);
}