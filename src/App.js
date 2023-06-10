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
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from './logo.svg'
import Restaurant from './restaurant.svg'

import Brasil from "./Brasil";
import RegiaoSul from './Sul'
import RegiaoSudeste from './Sudeste'
import RegiaoCentroOeste from './CentroOeste'
import RegiaoNorte from './Norte'
import RegiaoNordeste from './Nordeste'

import ReceitaPR from "./PR";
import ReceitaSC from "./SC";
import ReceitaRS from "./RS";

import ReceitaGO from "./GO";
import ReceitaMT from "./MT";
import ReceitaMS from "./MS";
import ReceitaDF from "./DF";

import ReceitaES from "./ES";
import ReceitaMG from "./MG";
import ReceitaRJ from "./RJ";
import ReceitaSP from "./SP";

import ReceitaAM from "./AM";
import ReceitaPA from "./PA";
import ReceitaAC from "./AC";
import ReceitaAP from "./AP";
import ReceitaRO from "./RO";
import ReceitaRR from "./RR";
import ReceitaTO from "./TO";

import ReceitaAL from "./AL";
import ReceitaBA from "./BA";
import ReceitaCE from "./CE";
import ReceitaMA from "./MA";
import ReceitaPI from "./PI";
import ReceitaPE from "./PE";
import ReceitaPB from "./PB";
import ReceitaRN from "./RN";
import ReceitaSE from "./SE";

import Typography from '@mui/material/Typography';

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

    const animate = () => {
        if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
        }
    }

  return (
    <>
    <header style={{borderBottom: "2px solid #BE952B"}}>
        <Routes location={displayLocation}>
            <Route path="*" element={
                <Container maxWidth="md" style={{paddingLeft: 0, paddingRight: 0}}>
                    <Box style={{position: "relative", width: '100%', height: '209px', minWidth: "320px", display: "flex", flexDirection: "row", alignItems:"center", justifyContent: "space-between"}} >
                        <img style={{ minWidth: "300px" }} src={Logo} alt={"O Que o Brasil tem de ... + Delicioso"} />
                        <img src={Restaurant} style={{position: "absolute", width: '80px', right: "40px", top: "-6px", background: "none"}} alt={"Brasil"} />
                    </Box>
                </Container>
            } />   
        </Routes>
    </header>

    <Container maxWidth="md" sx={{display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: 0, paddingRight: 0}} className={`${transitionStage}`} onAnimationEnd={animate}>
        <Routes location={displayLocation}>
            <Route path="/" element={
            <>
                <Typography variant="p" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", background: "none"}}>Selecione uma região no mapa</Typography>
                <Brasil />
            </>
            } />
            <Route path="/norte" element={
            <>
                <RegiaoNorte/>
                <Typography variant="p" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
            </>
            } />    
            <Route path="/nordeste" element={
            <>
                <RegiaoNordeste/>
                <Typography variant="p" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
            </>
            } />   
            <Route path="/centro-oeste" element={
            <>
                <RegiaoCentroOeste/>
                <Typography variant="p" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
            </>
            } />   
            <Route path="/sudeste" element={
            <>
                <RegiaoSudeste/>
                <Typography variant="p" align={'center'} style={{fontSize: '20px',color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
            </>
            } />   
            <Route path="/sul" element={
            <>
                <RegiaoSul/>
                <Typography variant="p" align={'center'} style={{fontSize: '20px', color: '#fff', marginTop: '12px', fontFamily: "Inter Variable, sans-serif", position: "absolute", background: "none"}}>Selecione um estado</Typography>
            </>
            } />   

        </Routes>
    </Container>

    <main className={`${transitionStage}`} onAnimationEnd={animate} style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100vw", position: "absolute", width: "100%", top: "0px", backgroundColor: "transparent"}}>
        <Routes location={displayLocation}>

            <Route path="/pr" element={<ReceitaPR/>} />   
            <Route path="/sc" element={<ReceitaSC/>} />   
            <Route path="/rs" element={<ReceitaRS/>} />   

            <Route path="/go" element={<ReceitaGO/>} />   
            <Route path="/mt" element={<ReceitaMT/>} />   
            <Route path="/ms" element={<ReceitaMS/>} />   
            <Route path="/df" element={<ReceitaDF/>} />   

            <Route path="/es" element={<ReceitaES/>} />   
            <Route path="/mg" element={<ReceitaMG/>} />   
            <Route path="/rj" element={<ReceitaRJ/>} />   
            <Route path="/sp" element={<ReceitaSP/>} />   

            <Route path="/am" element={<ReceitaAM/>} />   
            <Route path="/pa" element={<ReceitaPA/>} />   
            <Route path="/ac" element={<ReceitaAC/>} />   
            <Route path="/ap" element={<ReceitaAP/>} />   
            <Route path="/ro" element={<ReceitaRO/>} />   
            <Route path="/rr" element={<ReceitaRR/>} />   
            <Route path="/to" element={<ReceitaTO/>} />   

            <Route path="/al" element={<ReceitaAL/>} />   
            <Route path="/ba" element={<ReceitaBA/>} />   
            <Route path="/ce" element={<ReceitaCE/>} />   
            <Route path="/ma" element={<ReceitaMA/>} />   
            <Route path="/pi" element={<ReceitaPI/>} />   
            <Route path="/pe" element={<ReceitaPE/>} />   
            <Route path="/pb" element={<ReceitaPB/>} />   
            <Route path="/rn" element={<ReceitaRN/>} />   
            <Route path="/se" element={<ReceitaSE/>} />   

        </Routes>
    </main>

    </>


  );
}