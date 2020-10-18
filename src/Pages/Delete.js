import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "@reach/router";

export const Delete=({id})=>{
    const [message, setMessage]=useState("");
    useEffect(()=>{
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then(res=>setMessage("Author is deleted"))
        .catch(err=>setMessage(`There was an error deleting this author ${err}`));
    }, [id])
return(
    <>
    <h1>{message}</h1>
    <Link to="/">Home</Link>
    </>
);
}