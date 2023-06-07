import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  useLocation,
  Route,
  Routes
} from "react-router-dom";
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
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
import RSbook from './RS-bookmark.png'
import SCbook from './SC-bookmark.png'

import PR from './pr.jpg'
import SC from './sc.jpg'
import RS from './rs.jpg'


import SemiCircleTop from './semicircletop.svg'
import SemiCircleBottom from './semicirclebottom.svg'
import PreparoTop from './preparotop.svg'
import PreparoBottom from './preparobottom.svg'

import PreparoTopSul from './preparotopsul.svg'
import PreparoBottomSul from './preparobottomsul.svg'

import {ReactComponent as ReactInicio} from './inicio.svg';

import Brasil from "./Brasil";
import RegiaoSul from './Sul'
import RegiaoSudeste from './Sudeste'
import RegiaoCentroOeste from './CentroOeste'
import RegiaoNorte from './Norte'
import RegiaoNordeste from './Nordeste'

import ReceitaPR from "./ReceitaPR";
import ReceitaSC from "./ReceitaSC";
import ReceitaRS from "./ReceitaRS";


import Chip from '@mui/material/Chip';
import { Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';

export default function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
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
            <Container maxWidth="md" sx={{display: "flex", height: '240px', flexDirection: "row", alignItems:"center", justifyContent: "space-between", padding: 0,
            borderBottom: "2px solid #BE952B"}}>
                <img style={{ minWidth: "320px" }} src={Logo} alt={"post.imageText"} />
                <img src={Restaurant} />
            </Container>
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
            <Typography variant="h3" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", background: "none"}}>Selecione uma região no mapa</Typography>
            <Brasil />
        </>
        } />
        <Route path="/norte" element={
        <>
            <RegiaoNorte/>
            <Typography variant="h3" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />    
        <Route path="/nordeste" element={
        <>
            <RegiaoNordeste/>
            <Typography variant="h3" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/centro-oeste" element={
        <>
            <RegiaoCentroOeste/>
            <Typography variant="h3" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/sudeste" element={
        <>
            <RegiaoSudeste/>
            <Typography variant="h3" align={'center'} style={{fontSize: '20px',color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   
        <Route path="/sul" element={
        <>
            <RegiaoSul/>
            <Typography variant="h3" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
        </>
        } />   

    </Routes>
    </Container>

    <Routes>

        <Route path="/pr" element={
            <>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", marginTop: "-213px", display: "flex", flexDirection: "column", 
            alignItems: "center", overflow: 'hidden', justifyContent: "space-between", borderBottom: "2px solid #BE952B"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <img style={{ minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={PR} alt={"Paraná"} />
                <img src={PRbook} style={{width: '80px', position: "absolute", right: "40px", top: "-6px", background: "none"}}/>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{position: "absolute", left: "24px", top: "80px", background: "none", minWidth: "0", width: '49'}}>
                    <Link to="/sul">
                        <rect x="-15" width="64" height="48" rx="9" fill="#D8D2C6"/>
                        <path d="M12 23.5L31.5 10.9426L31.5 36.0574L12 23.5Z" fill="#242424"/>
                    </Link>
                </svg>
            </Container>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <ReceitaPR/>
            </Container>
            </>
        } />   

<       Route path="/rs" element={
            <>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", marginTop: "-213px", display: "flex", flexDirection: "column",
             alignItems: "center", overflow: 'hidden', justifyContent: "space-between",
            borderBottom: "2px solid #BE952B"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <img style={{ minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={RS} alt={"Rio Grande do Sul"} />
                <img src={RSbook} style={{width: '80px', position: "absolute", right: "40px", top: "-6px", background: "none"}}/>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{position: "absolute", left: "24px", top: "80px", background: "none", minWidth: "0", width: '49'}}>
                    <Link to="/sul">
                        <rect x="-15" width="64" height="48" rx="9" fill="#D8D2C6"/>
                        <path d="M12 23.5L31.5 10.9426L31.5 36.0574L12 23.5Z" fill="#242424"/>
                    </Link>
                </svg>
            </Container>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <ReceitaRS/>
            </Container>
            </>
            } />   

        <Route path="/sc" element={
            <>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", marginTop: "-213px", display: "flex", flexDirection: "column", 
            alignItems: "center", overflow: 'hidden', justifyContent: "space-between", borderBottom: "2px solid #BE952B"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <img style={{ minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={SC} alt={"Santa Catarina"} />
                <img src={SCbook} style={{width: '80px', position: "absolute", right: "40px", top: "-6px", background: "none"}}/>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{position: "absolute", left: "24px", top: "80px", background: "none", minWidth: "0", width: '49'}}>
                    <Link to="/sul">
                        <rect x="-15" width="64" height="48" rx="9" fill="#D8D2C6"/>
                        <path d="M12 23.5L31.5 10.9426L31.5 36.0574L12 23.5Z" fill="#242424"/>
                    </Link>
                </svg>
            </Container>
            <Container maxWidth="md" sx={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}
                className={`${transitionStage}2`} onAnimationEnd={() => { if (transitionStage === "fadeOut") { setTransistionStage("fadeIn"); setDisplayLocation(location); }}}>
                <ReceitaSC/>
            </Container>
            </>
        } />   


    </Routes>


    </>


  );
}