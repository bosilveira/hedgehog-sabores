import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './logo.svg'
import Restaurant from './restaurant.svg'
import Inicio from './inicio.svg'
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between", paddingBottom: 2}}>
        <img style={{ minWidth: "320px" }} src={Logo} alt={"post.imageText"} />
        <img src={Restaurant} />
      </Container>
      <Divider sx={{ height: "2px", backgroundColor:"#BE952B"}} />
      <Container maxWidth="md" sx={{flexDirection: "column"}}>
      <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif"}}>Selecione uma região no mapa</Typography>
        <img src={Inicio} style={{width: '100%', minWidth: "320px"}}/>
      </Container>

    </React.Fragment>
  );
}