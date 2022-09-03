import React from 'react'
import { Box, Container, createTheme, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, ThemeProvider, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useEffect, useContext, useState } from 'react'
import crypto from '../Context-data/CryptoContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SearchCoin from './SearchCoin'
import ReactApexChart from 'react-apexcharts'


const Wrapper = styled(Box)({
    height: '100vh'
})
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#000'
        }
    },
    typography: {
        h4: {
            color: '#fff',
            cursor: 'pointer',
        },
    },
})
const CoinTable = () => {
    const { currensy, symboll } = useContext(crypto)
    const [searchRes, setSearchRes] = useState('')
    const [searched, setSearched] = useState('')
    const [data, setData] = useState([])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledBox = styled(Box)({
        backgroundColor: '#121212',
        height: '60vh'
    })
    useEffect(() => {
        const fetchData = async (currency) => {
            console.log(currensy)
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            setData(res.data)
            console.log(res)
        }

        fetchData(currensy)
    }, [currensy])


    const columns = [
        { id: 'coin', label: 'Coin', minWidth: 30, maxWidth: 30 },
        { id: 'price', label: 'Price', minWidth: 20 },
        {
            id: '24h change',
            label: '24h Change',
            minWidth: 20,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'market cap',
            label: 'Market Cap',
            minWidth: 20,
            align: 'right',
            format: (value) => value.toLocaleString('en-US'),
        },
        
    ];

    return (
        <ThemeProvider theme={darkTheme}>
            <StyledBox>

                <Container maxWidth='xl' style={{ textAlign: 'center' }}>
                    <Typography variant='h4'>Coin Table</Typography>
                    <SearchCoin setSearchRes={setSearchRes} searchRes={searchRes} setSearched={setSearched} data={data} />

                    <Paper sx={{ overflow: 'hidden', height: '43vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: '90%', margin: '0 auto' }}>
                        <TableContainer sx={{ maxHeight: '90%', width: '90%', margin: '0 auto' }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead style={{ backgroundColor: 'gold' }}>
                                    <TableRow >
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth, backgroundColor: 'gold', color: 'black', fontWeight: 'bold' }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {searched == '' && data
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            const { id, symbol, name, current_price, market_cap_change_percentage_24h, image, market_cap } = row
                                            return (
                                                <TableRow hover >
                                                    <>
                                                        <TableCell style={{ textAlign: 'left', width: '20%', padding: '1rem' }} >
                                                            <Link to={`coins/${id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                                                                <div style={{ marginRight: '10px' }}>
                                                                    <img src={image} width="60" />
                                                                </div>
                                                                <div>
                                                                    <p style={{ fontSize: '1.3rem', marginBottom: '-15px' }}>{symbol.toUpperCase()}</p>
                                                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{name}</p>
                                                                </div>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'left', width: '20%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.1rem', textDecoration: 'none', color: 'white' }}>
                                                                <span style={{ fontSize: '1.3rem', marginRight: '5px' }}>{symboll}</span>
                                                                <span>{current_price}</span>
                                                            </Link>

                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'right', width: '20%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>

                                                                <p
                                                                    style=
                                                                    {{ color: market_cap_change_percentage_24h > 0 ? "rgb(14, 203, 129)" : "red" }}
                                                                >{market_cap_change_percentage_24h.toFixed(2)}%</p>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'right', width: '20%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>
                                                                <p style={{ color: 'white' }}><span style={{ fontSize: '1.3rem', marginRight: '5px' }}>$</span>{market_cap}</p>
                                                            </Link>
                                                        </TableCell>
                                                   
                                                    </>


                                                </TableRow>
                                            );
                                        })}

                                    {searched && searched

                                        .map((row) => {
                                            const { id, symbol, name, current_price, market_cap_change_percentage_24h, image, market_cap } = row
                                            return (
                                                <TableRow hover>
                                                    <>
                                                        <TableCell style={{ textAlign: 'left', width: '25%', padding: '1rem' }} >
                                                            <Link to={`coins/${id}`} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
                                                                <div style={{ marginRight: '10px' }}>
                                                                    <img src={image} width="60" />
                                                                </div>
                                                                <div>
                                                                    <p style={{ fontSize: '1.3rem', marginBottom: '-15px' }}>{symbol.toUpperCase()}</p>
                                                                    <p style={{ fontSize: '0.9rem', color: '#666' }}>{name}</p>
                                                                </div>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'left', width: '25%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.1rem', textDecoration: 'none', color: 'white' }}>
                                                                <span style={{ fontSize: '1.3rem', marginRight: '5px' }}>{ }</span>
                                                                <span>{current_price}</span>
                                                            </Link>

                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'right', width: '25%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>

                                                                <p
                                                                    style=
                                                                    {{ color: market_cap_change_percentage_24h > 0 ? "rgb(14, 203, 129)" : "red" }}
                                                                >{market_cap_change_percentage_24h.toFixed(2)}%</p>
                                                            </Link>
                                                        </TableCell>
                                                        <TableCell style={{ textAlign: 'right', width: '25%' }} >
                                                            <Link to={`coins/${id}`} style={{ fontSize: '1.2rem', textDecoration: 'none' }}>
                                                                <p style={{ color: 'white' }}><span style={{ fontSize: '1.3rem', marginRight: '5px' }}>$</span>{market_cap}</p>
                                                            </Link>
                                                        </TableCell>
                                                    </>


                                                </TableRow>
                                            );
                                        })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Container>
            </StyledBox>
        </ThemeProvider>
    )
}

export default CoinTable
