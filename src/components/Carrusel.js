import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import { useEffect, useRef, useContext, useState } from 'react'
import axios from 'axios'
import crypto from '../Context-data/CryptoContext'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Link } from 'react-router-dom'
import { textAlign } from '@mui/system'

const Carrusel = () => {

    const [data, setData] = useState([])
    const { currensy,symboll } = useContext(crypto)
    console.log(currensy)
    const effectFetch = useRef(false)
    console.log(effectFetch.current)
    useEffect(() => {
        const fetchData = async (currency) => {
            console.log(currency)
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
            setData(res.data)
            console.log(res)
        }
        fetchData(currensy)
    }, [currensy])
    
    const StyledCarrusel = styled(Box)({

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: '80%',
        margin: '0 auto',
        position: 'relative',
        color: 'white',
        padding: '1rem',
        overflow: 'hidden',
        ul: {
            li: {
                textAlign: 'center',
                p: {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.2rem'

                },
                div: {
                    h5: {
                        marginRight: '5px',
                        color: 'white',
                        fontSize: '1rem',
                        marginRight: '10px'
                    },
                    span: {
                        fontSize: '1.2rem'
                    }
                    ,
                    marginBottom: '-30px'
                }
            }
        }
    })
    const handleDragStart = (e) => e.preventDefault();
    const items = data.map(element => (
        <Link key={element.id} to={`/coins/${element.id}`} style={{ textDecoration: 'none' }}>
            <img src={element.image} onDragStart={handleDragStart} height="80" />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h5>{(element.symbol).toUpperCase()}</h5>
                <span
                    style=
                    {{ color: element.price_change_percentage_24h_in_currency > 0 ? "rgb(14, 203, 129)" : "red" }}
                >{element.price_change_percentage_24h_in_currency.toFixed(2)}%</span>
            </div>
            <p>{symboll}{element.current_price}</p>
        </Link>

    ))

    const responsive = {
        0: {
            items: 2
        },
        1024: {
            items: 5
        }
    }

    return (
        <StyledCarrusel>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={300}
                animationDuration={1000}
                disableDotsControls
                responsive={responsive}
                disableButtonsControls
                autoPlay
                items={items} />

        </StyledCarrusel>
    )
}

export default Carrusel
