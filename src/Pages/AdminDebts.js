import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from '../components/Navbar'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const url = 'https://los-techos.herokuapp.com/api/debt'





let info;
const AdminDebts = () => {

    async function getDebts(){
        await axios.get(url, {
            headers: {
                'access-token': localStorage.getItem("access-token")
            }
        }).then(r => {
            console.log(r.data)
            info = r.data;
            console.log(info)
            for (let i = 0; i < r.data; i++) {
                rows.fill(createData(info.data[i].uName))
            }
        })
    }
    function createData(id, name, expire, debt, button) {
        return { id, name, expire, debt, button};
    }
    const rows = [
        createData(70, "Uriel", 7950, "2021-12-06T04:19:34.620Z", <Link to="/paymemts"><button>Open</button></Link>),
        createData(71, "Joel", 17950, "2021-12-06T04:38:41.666Z", <Link to="/payments"><button>Open</button></Link>)

    ];
    useEffect(() => {
        getDebts();
    });

    return (
        <div>
            <Navbar/>
            <h2>Debts</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Expire Date</TableCell>
                            <TableCell align="right">Debt</TableCell>
                            <TableCell align="right"></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>

                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.debt}</TableCell>
                                <TableCell align="right">{row.expire}</TableCell>
                                <TableCell align="right">{row.button}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default AdminDebts;