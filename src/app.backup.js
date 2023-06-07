import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import '@fontsource-variable/inter';
import "./styles.css";
import Home from "./HomePage";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './logo.svg'
import Restaurant from './restaurant.svg'
import Inicio from './inicio.svg'
import Norte from './norte.svg'
import Nordeste from './nordeste.svg'
import CentroOeste from './centro-oeste.svg'
import Sudeste from './sudeste.svg'
import Sul from './sul.svg'
import PRbook from './PR-bookmark.png'
import PR from './pr.jpg'

import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
        <nav>
          <Link to="/">Brasil</Link>
          <Link to="/norte">Norte</Link>
          <Link to="/nordeste">Nordeste</Link>
          <Link to="/centro-oeste">Centro-Oeste</Link>
          <Link to="/sudeste">Sudeste</Link>
          <Link to="/sul">Sul</Link>
          <Link to="/pr">PR</Link>
        </nav>
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <>
    <Routes location={displayLocation}>
        <Route path="*" element={
        <>
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between", paddingBottom: 2}}>
        <img style={{ minWidth: "320px" }} src={Logo} alt={"post.imageText"} />
        <img src={Restaurant} />

        {<img style={{ display: 'none' }} src={Norte} alt={"Norte"} />}
        {<img style={{ display: 'none' }} src={Nordeste} alt={"Nordeste"} />}
        {<img style={{ display: 'none' }} src={CentroOeste} alt={"Centro-Oeste"} />}
        {<img style={{ display: 'none' }} src={Sudeste} alt={"Sudeste"} />}
        {<img style={{ display: 'none' }} src={Sul} alt={"Sul"} />}

    </Container>
    <Divider sx={{ height: "2px", backgroundColor:"#BE952B"}} />
        </>
        } />
        <Route path="/pr" element={
        <>

        </>
        } />        
    </Routes>

    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}
        className={`${transitionStage}`}
        onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
            }
    }}>
    <Routes location={displayLocation}>
        <Route path="/" element={
        <>
            <img src={Inicio} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione uma região no mapa</Typography>
        </>
        } />
        <Route path="/norte" element={
        <>
            <img src={Norte} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />    
        <Route path="/nordeste" element={
        <>
            <img src={Nordeste} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/centro-oeste" element={
        <>
            <img src={CentroOeste} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/sudeste" element={
        <>
            <img src={Sudeste} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/sul" element={
        <>
            <img src={Sul} style={{width: '100%', minWidth: "320px", position: "absolute"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   

        <Route path="/pr" element={
        <>
                <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between", paddingBottom: 2}}>
        <img style={{ minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={PR} alt={"post.imageText"} />
        <img src={PRbook} style={{width: '80px', position: "absolute", right: "20px", top: "-20px", background: "none"}}/>


            </Container>
            <Divider sx={{ height: "2px", backgroundColor:"#BE952B"}} />
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   

    </Routes>

    </Container>

    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center"}}
        className={`${transitionStage}`}
        onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
            }
    }}>
<Routes>
<Route path="/pr" element={
        <>
        <Container maxWidth="md" sx={{display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between", paddingBottom: 0}}>
            <img style={{ minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={PR} alt={"post.imageText"} />
            <img src={PRbook} style={{width: '80px', position: "absolute", right: "20px", top: "-20px", background: "none"}}/>
            <Typography variant="h3" align={'center'} style={{color: '#fff', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </Container>
        </>
        } />   

    </Routes>

    </Container>

    <Divider sx={{ height: "2px", backgroundColor:"#BE952B"}} />


    </>
  );
}