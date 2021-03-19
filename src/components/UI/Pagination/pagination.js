import React from 'react';
import { Pagination } from 'react-bootstrap';

import "./pagination.css";

const pagination = (props) => (
    <Pagination>
        <Pagination.Item onClick={() => props.paginate(props.previous)}>
            Anterior
        </Pagination.Item>
        <Pagination.Item onClick={() => props.paginate(props.next)}>
            Siguiente
        </Pagination.Item>
    </Pagination>
)

export default pagination;