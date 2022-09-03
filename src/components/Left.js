import { Box, Container, Typography } from '@mui/material'
import crypto from '../Context-data/CryptoContext'
import { useContext } from 'react'
import React from 'react'

const Left = ({ dataArr, secondArr }) => {
  const { symboll } = useContext(crypto)
  const [img, price, dec,marketCap] = secondArr
  const [coingecko_rank, name] = dataArr

  return (
    <Box flex={1} sx={{ height: '80vh', borderRight: '1px solid #666', padding: '1rem', color: 'white', textAlign: 'center' }}>
      <img src={img} alt="" />

      <Typography variant='h2' sx={{ marginTop: '40px', fontWeight: 'bold' }}>{name}</Typography>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
          <Typography variant='h6' sx={{ marginTop: '40px', color: '#666' }}>
            {dec}
          </Typography>
          <Typography variant='h6' sx={{ marginTop: '40px', fontSize: '1.5rem' }}>Rank :
            <Typography variant='span' sx={{ color: '#666', fontSize: '1.1rem' }}> {coingecko_rank}</Typography>
          </Typography>
          <Typography variant='h6' sx={{ marginTop: '40px', fontSize: '1.5rem' }}>Price :
            <Typography variant='span' sx={{ color: '#666', fontSize: '1.1rem' }}> {price} {symboll} </Typography>
          </Typography>
          <Typography variant='h6' sx={{ marginTop: '40px', fontSize: '1.5rem' }}>marketCap :
            <Typography variant='span' sx={{ color: '#666', fontSize: '1.1rem' }}> {marketCap} {symboll}</Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Left
