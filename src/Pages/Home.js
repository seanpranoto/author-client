import React, {useState, useEffect} from 'react';
import { Link } from "@reach/router";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import axios from "axios";

export const Home = () => {
    const [rows, setRows]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author")
        .then(res=>setRows(res.data))
        .catch(err=>console.log(err));
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            width:355
        },
    });
    

    const classes = useStyles();
    return (
        <>
            <Link to="/new">Add an author</Link>
            <p>We have quotes by: </p>
            <TableContainer component={Paper} style={{marginLeft:"37rem", boxShadow:"none"}}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Author</StyledTableCell>
                        <StyledTableCell align="right">Actions Available</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right"><Link style={{textDecoration:"none"}} to={`/${row._id}/edit`}><Button style={{marginRight:"0.3rem"}} variant="contained" color="primary">Edit</Button></Link><Link style={{textDecoration:"none"}}  to={`/${row._id}/delete`}><Button variant="contained" color="secondary" >Delete</Button></Link></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
};

