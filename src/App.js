import {useState, useEffect} from "react";
import {
    BrowserRouter,
    HashRouter,
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

import SEO from "./SEO";

import Logo from './logo.svg';
import Bookmark from './Brasil-bookmark.svg';

import Brasil from "./Brasil";

import RegiaoCentroOeste from './Centro-Oeste/CentroOeste';
import ReceitaDF from "./Centro-Oeste/DF";
import ReceitaGO from "./Centro-Oeste/GO";
import ReceitaMS from "./Centro-Oeste/MS";
import ReceitaMT from "./Centro-Oeste/MT";

import RegiaoNordeste from './Nordeste/RegiaoNordeste';
import ReceitaAL from "./Nordeste/AL";
import ReceitaBA from "./Nordeste/BA";
import ReceitaCE from "./Nordeste/CE";
import ReceitaMA from "./Nordeste/MA";
import ReceitaPB from "./Nordeste/PB";
import ReceitaPE from "./Nordeste/PE";
import ReceitaPI from "./Nordeste/PI";
import ReceitaRN from "./Nordeste/RN";
import ReceitaSE from "./Nordeste/SE";

import RegiaoNorte from './Norte/RegiaoNorte';
import ReceitaAC from "./Norte/AC";
import ReceitaAM from "./Norte/AM";
import ReceitaAP from "./Norte/AP";
import ReceitaPA from "./Norte/PA";
import ReceitaRO from "./Norte/RO";
import ReceitaRR from "./Norte/RR";
import ReceitaTO from "./Norte/TO";

import RegiaoSudeste from './Sudeste/RegiaoSudeste';
import ReceitaES from "./Sudeste/ES";
import ReceitaMG from "./Sudeste/MG";
import ReceitaRJ from "./Sudeste/RJ";
import ReceitaSP from "./Sudeste/SP";

import RegiaoSul from './Sul/RegiaoSul';
import ReceitaPR from "./Sul/PR";
import ReceitaRS from "./Sul/RS";
import ReceitaSC from "./Sul/SC";

import Typography from '@mui/material/Typography';

export default function App() {
    return (
        <HashRouter>
            <div className='App'>
                <Sabores/>
            </div>
        </HashRouter>
    );
}

function Sabores() {

    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) {
            setTransitionStage("fadeOut");
        }
    }, [location, displayLocation]);

    const animate = () => {
        if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
        }
    };

    return (
        <>
            <header>
                <Routes location={displayLocation}>
                    <Route path="*" element={
                        <Container maxWidth="sm">
                            <Box className={"brasil-header"}>
                                <Link to="/">
                                    <img className={"logo"} src={Logo} alt={"O Que o Brasil tem de ... + Delicioso"}/>
                                    <img className={"bookmark"} src={Bookmark} alt={"Brasil"}/>
                                </Link>
                            </Box>
                        </Container>
                    }/>
                </Routes>
            </header>

            <Container maxWidth="sm" className={`mapa-brasil ${transitionStage}`} onAnimationEnd={animate}>
                <Routes location={displayLocation}>
                    <Route path="/" element={
                        <>
                            <SEO
                                title={"O Que o Brasil tem de... + Delicioso"}
                                description={"Um país plural cheio de cores, culturas e sabores."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <Typography variant="body1">
                                Um país plural cheio de cores, culturas e sabores.
                            </Typography>
                            <Typography variant="body1">
                                E para homenagear nossos pratos típicos, criamos um material que vai te ajudar a visitar
                                o Brasil sem sair da cozinha.
                            </Typography>
                            <Typography variant="body1">
                                Selecione uma região no mapa
                            </Typography>
                            <Brasil/>
                        </>
                    }/>
                    <Route path="/norte" element={
                        <>
                            <SEO
                                title={"Região Norte"}
                                description={"O Que o Brasil tem de... + Delicioso."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <Typography variant="body1">Selecione um estado</Typography>
                            <RegiaoNorte/>
                        </>
                    }/>
                    <Route path="/nordeste" element={
                        <>
                            <SEO
                                title={"Região Nordeste"}
                                description={"O Que o Brasil tem de... + Delicioso."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <RegiaoNordeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/centro-oeste" element={
                        <>
                            <SEO
                                title={"Região Centro-Oeste"}
                                description={"O Que o Brasil tem de... + Delicioso."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <RegiaoCentroOeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/sudeste" element={
                        <>
                            <SEO
                                title={"Região Sudeste"}
                                description={"O Que o Brasil tem de... + Delicioso."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <RegiaoSudeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/sul" element={
                        <>
                            <SEO
                                title={"Região Sul"}
                                description={"O Que o Brasil tem de... + Delicioso."}
                                name={"Banca do Ramon"}
                                type={"article"}/>
                            <RegiaoSul/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>

                </Routes>
            </Container>

            <main className={`${transitionStage}`} onAnimationEnd={animate}>
                <Container maxWidth="sm" className={"receita"}>
                    <Routes location={displayLocation}>

                        <Route path="/df" element={<ReceitaDF/>}/>
                        <Route path="/go" element={<ReceitaGO/>}/>
                        <Route path="/ms" element={<ReceitaMS/>}/>
                        <Route path="/mt" element={<ReceitaMT/>}/>

                        <Route path="/al" element={<ReceitaAL/>}/>
                        <Route path="/ba" element={<ReceitaBA/>}/>
                        <Route path="/ce" element={<ReceitaCE/>}/>
                        <Route path="/ma" element={<ReceitaMA/>}/>
                        <Route path="/pb" element={<ReceitaPB/>}/>
                        <Route path="/pe" element={<ReceitaPE/>}/>
                        <Route path="/pi" element={<ReceitaPI/>}/>
                        <Route path="/rn" element={<ReceitaRN/>}/>
                        <Route path="/se" element={<ReceitaSE/>}/>

                        <Route path="/ac" element={<ReceitaAC/>}/>
                        <Route path="/am" element={<ReceitaAM/>}/>
                        <Route path="/ap" element={<ReceitaAP/>}/>
                        <Route path="/pa" element={<ReceitaPA/>}/>
                        <Route path="/ro" element={<ReceitaRO/>}/>
                        <Route path="/rr" element={<ReceitaRR/>}/>
                        <Route path="/to" element={<ReceitaTO/>}/>

                        <Route path="/es" element={<ReceitaES/>}/>
                        <Route path="/mg" element={<ReceitaMG/>}/>
                        <Route path="/rj" element={<ReceitaRJ/>}/>
                        <Route path="/sp" element={<ReceitaSP/>}/>

                        <Route path="/pr" element={<ReceitaPR/>}/>
                        <Route path="/rs" element={<ReceitaRS/>}/>
                        <Route path="/sc" element={<ReceitaSC/>}/>

                    </Routes>
                </Container>
            </main>

        </>
    )
}