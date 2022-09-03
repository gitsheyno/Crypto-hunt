import styled from '@emotion/styled'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import image from '../Banner/img/banner.jpeg'
import { useEffect } from 'react'
import Carrusel from '../Carrusel'
const Banner = () => {

    const StyledBanner = styled(Box)({
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    })
    const StyledBannerContent = styled(Container)({
        height: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',

    })

    const StyledContent = styled(Box)({

        height: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    })


    return (
        <StyledBanner>
            <StyledBannerContent maxWidth={'xl'}>
                <StyledContent>
                    <Typography
                        variant="h2"
                        color="#fff"
                        textTransform='capitalize'
                        fontWeight='bold'
                        marginBottom="30px"
                    >
                        crypto hunter
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="darkgrey"
                        textTransform='capitalize'
                        fontWeight='bold'
                    >
                        get all th einfo regarding your faivorite crypto currency
                    </Typography>
                </StyledContent>
                <Carrusel />
            </StyledBannerContent>
        </StyledBanner>
    )
}

export default Banner
