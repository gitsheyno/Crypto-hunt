import React, { useContext } from 'react'
import { AppBar, createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Container, typography } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import crypto from '../Context-data/CryptoContext'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Header = () => {
    const { currensy, handleSubmit } = useContext(crypto)
    
    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff'
            }
        },
        typography: {
            h4: {
                color: 'gold',
                cursor: 'pointer',
            },
        },

    })

    const StyledTool = styled(Toolbar)({

        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
    })


    const Navigate = useNavigate()
    return (
        <ThemeProvider theme={theme}>
            <AppBar position='relative'>
                <Container
                    maxWidth='xxl'>
                    <StyledTool sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', }}>
                        <Typography
                            onClick={e => Navigate('/')}
                            variant='h4'>CryptoHunter
                        </Typography>
                        <FormControl
                            style={{
                                width: 100,
                            }}>
                            <InputLabel id="demo-simple-select-label"><CurrencyExchangeIcon /></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                value={currensy}
                                onChange={handleSubmit}
                            >
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'JPY'}>jpy</MenuItem>

                            </Select>
                        </FormControl>

                    </StyledTool>
                </Container>
            </AppBar >
        </ThemeProvider>
    )
}

export default Header
