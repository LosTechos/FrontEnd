import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://los-techos.herokuapp.com/api/debt'
const AdminDebts = () => {
    // const [state, setState] = useState();
    let info = {
        data: []
    }
    async function getDebts(){
        await axios.get(url, {
            headers: {
                'access-token': localStorage.getItem("access-token")
            }
        }).then(r => {
            console.log(r.data);
            info.data = r.data;
            console.log(info);
        })
    }

    return (
        <div>
            <Navbar/>
            <h2>Debts</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            {/*<TableCell align="right">Calories</TableCell>*/}
                            {/*<TableCell align="right">Name</TableCell>*/}
                            {/*<TableCell align="right">Debt</TableCell>*/}
                            {/*<TableCell align="right">Data</TableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            info.data.map(row => {
                                return (
                                    <TableRow key={row.uId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell align="right">{row.uName}</TableCell>
                                    </TableRow>
                                )
                            })
                        }

                        {/*{rows.map(row => (*/}
                        {/*    return (*/}
                        {/*    <TableRow*/}
                        {/*        key={row.uName}*/}
                        {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                        {/*    >*/}
                        {/*        <TableCell component="th" scope="row">*/}
                        {/*            {row.name}*/}
                        {/*        </TableCell>*/}
                        {/*
                        */}
                        {/*        <TableCell align="right"></TableCell>*/}
                        {/*        <TableCell align="right"></TableCell>*/}
                        {/*        <TableCell align="right"></TableCell>*/}

                        {/*    </TableRow>*/}
                        {/*))}*/}
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={getDebts}>test</button>
        </div>
    )
}

export default AdminDebts;