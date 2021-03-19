import React, { useEffect, useState } from 'react';
import Aux from '../hoc/Auxiliar';
import Navbar from "../components/UI/Navbar/navbar";
import Sidebar from "../components/UI/Sidebar/sidebar";
import CardPokemon from "../components/UI/Card/card";
import PaginationPokemon from "../components/UI/Pagination/pagination";
import FormSearchPokemon from "../components/UI/Search/search";

import { 
    Container, 
    Row, 
    Col } from 'react-bootstrap';

export default function Home() {

    const [ previous, setPrevious ] = useState("");
    const [ next, setNext ] = useState("");
    const [ pokemons, setPokemons ] = useState([]);
    const [ searchInputPokemon, setSearchInputPokemon ] = useState("");

    useEffect(() => {
        getAllPokemons("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0");
    }, []);

    function getAllPokemons(currentPage) {
        fetch(currentPage)
            .then(res => res.json())
            .then(
                (result) => {
                    setPokemons([]);

                    setPrevious(result.previous);
                    setNext(result.next);

                    if (result.results) {
                        const pokemones = result.results;
                        pokemones.map((pokemon) => getDetailPokemon(pokemon.url));
                    } else {
                        setPokemons(pokemons => [...pokemons, result]);    
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    async function getDetailPokemon(url) {

        await fetch(url)
            .then(res => res.json())
            .then(
                (response) => {
                    setPokemons(pokemons => [...pokemons, response]);
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    const cards = pokemons.map((pokemon) => 
        <Col key={pokemon.id} lg={4} md={6} sm={6}>
            <CardPokemon 
                key={pokemon.name}
                id={pokemon.id} 
                name={pokemon.name} 
                image={pokemon.sprites.other.dream_world.front_default} 
                types={pokemon.types} />
        </Col>
    );

    function paginate(url) {
        getAllPokemons(url);
    }

    function handleInputPokemon(event) {
        setSearchInputPokemon(event.target.value);
      }

    const searchPokemon = e => {
        e.preventDefault();
        if (searchInputPokemon !== "") {
            getAllPokemons(`https://pokeapi.co/api/v2/pokemon/${searchInputPokemon.toLowerCase()}?limit=9&offset=0`);
        } else {
            getAllPokemons(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=0`);
        }
    }

    return (<Aux>
        <Navbar />
        <Container fluid>
            <Row>
                <Col md={3} className="text-center">
                    <Sidebar />
                </Col>
                <Col md={9}>
                    <Row className="mt-4 justify-content-end">
                        <Col sm={12} md={8}>
                            <FormSearchPokemon 
                                handleInputPokemon={handleInputPokemon} 
                                searchPokemon={searchPokemon} />
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        { cards }
                    </Row>

                    <Row className="mt-5 justify-content-center">
                        <PaginationPokemon 
                            paginate={paginate} 
                            previous={previous} 
                            next={next} />
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    </Aux>);
}