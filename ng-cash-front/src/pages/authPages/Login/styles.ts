import styled from 'styled-components';
import { Button, Grid, TextField } from '@mui/material';

export const GridContainer = styled(Grid)({
    height: "100vh",
    width: '100% !important',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: "url('https://ng.cash/_nuxt/img/banner-landing-page.0bd7f55.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
})

export const StyledTextField = styled(TextField)({
    margin: '5px 5px 8px 5px !important',
    width: '98%'
})

export const StyledButton = styled(Button)({
    margin: '5px !important',
    width: '98%',
    backgroundColor: 'black !important',
    color: 'white !important',
})