import { Link } from '@reach/router';
import React, {useState} from 'react';
import { Form } from "../Components/Form";
import axios from "axios";

export const New = () => {

    const createAuthor = (author, setMessage) => {
        axios.post("http://localhost:8000/api/author/", author)
            .then(res => console.log(res))
            .catch(err => setMessage(err.response.data.errors.name.message))
    };

    return (
        <>
            <Link to="/">Home</Link>
            <p>Add a new author:</p>
            <Form onSubmitProps={createAuthor} nameProps=""  />
        </>
    )
}
