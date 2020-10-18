import React, { useState } from 'react';
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@material-ui/core';
const styles = {
    paper: {
        width: "20rem",
        padding: "1rem",
        margin: "auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%",
        margin: "0.4rem"
    }
}
export const Form = ({ onSubmitProps, nameProps}) => {
    const [message, setMessage]=useState("");
    const [name, setName] = useState(nameProps);

    const onChange = (e) => setName(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitProps({ name }, setMessage);
        setName("");
    }

    return (
        <Paper elevation={3} style={styles.paper}>
            <form onSubmit={onSubmit}>
                <p>{message}</p>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput onChange={onChange} value={name} type="text" />
                </FormControl>
                <Button type="submit" variant="contained" color="primary" style={styles.button}>
                    Submit
                </Button>
            </form>
        </Paper>
    )
}
