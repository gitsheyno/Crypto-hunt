import styled from '@emotion/styled'
import { Box, Container, createTheme, Stack, ThemeProvider, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Left from '../components/Left'
import Right from '../components/Right'
import crypto from '../Context-data/CryptoContext'

const CoinPage = () => {
  const { symboll, currensy } = useContext(crypto)
  const { id } = useParams()
  const [coin, setCoin] = useState([])
  const [img, setImg] = useState('')
  const [price, setPrice] = useState('')
  const [dec, setDec] = useState('')
  const [marketCap, setMarketCap] = useState('')
  const [chart, setChart] = useState([])
  console.log(id)
  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        setCoin(res.data)
        setImg(res.data.image.large)
        setPrice(res.data.market_data.current_price[`${currensy.toLowerCase()}`])
        setDec((res.data.description.bg).split('.')[3])
        setMarketCap(res.data.market_data.market_cap[`${currensy.toLowerCase()}`])
        console.log(res.data)
      } catch (err) {
        console.log(err.message)
      }
    }

    const fetchChart = async (id, currency, days) => {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
        setChart(res.data.prices)
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchData(id)
    fetchChart(id, currensy, 1)
  }, [id, currensy])

  const StyledBox = styled(Box)({
    background: '#121212',
    minHeight:'100vh'
  })
  const Theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#000'
      }
    },
    typography: {
      h2: {
        color: '#fff',
        cursor: 'pointer',
      },
    },
  })
  const { coingecko_rank, name } = coin
  const dataArr = [coingecko_rank, name]
  const secondArr = [img, price, dec, marketCap]

  return (
    <ThemeProvider theme={Theme}>
      <StyledBox style={{ margin: 0 }}>
        <Container maxWidth="xxl">
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" style={{ color: 'white' }}>
            <Left
              dataArr={dataArr}
              secondArr={secondArr}
            />
             <Right
              chart={chart}
            /> 
          </Stack>
        </Container>
      </StyledBox>

    </ThemeProvider>
  )
}

export default CoinPage
