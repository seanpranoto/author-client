import { Link } from "@reach/router";
import React, { useEffect, useState } from "react";
import { Form } from "../Components/Form";
import axios from "axios";

export const Edit = ({ id }) => {
    const [name, setName] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}/`)
            .then(res => {
                setName(res.data.name);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [id]);

    const edit = (author, setMessage) => {
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => setMessage("This author is edited!"))
            .catch(err => setMessage(err.response.data.errors.name.message))
    };


    return (
        <>
            {loaded &&
                <>
                    <Link to="/">Home</Link>
                    <p>Edit this author</p>
                    <Form onSubmitProps={edit} nameProps={name} />
                </>
            }
        </>
    );
}