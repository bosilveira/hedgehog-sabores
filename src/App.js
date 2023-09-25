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

import Logo from './logo.png';
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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFontAwesome,
    faFacebook,
    faInstagram,
    faFacebookF,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';
import {IconButton} from "@mui/material";
import {faAngleUp, faEnvelope, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

import Logotipo from "./logotipo.webp";
import LogotipoPrincipal from "./xlogo-branco.webp"
import Jamil from "./Jamil.jpg"
import Stock01 from "./stock01.jpg";
import Stock02 from "./stock02.jpg";
import PatoTucupi from "./pato-tucupi.jpg";
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
            <SEO
                title={"O Que o Brasil tem de... + Delicioso | Banca do Ramon"}
                description={"Descubra um país cheio de cores, culturas e sabores. Acesse nosso conteúdo especial e visite o Brasil sem sair da cozinha. Confira!"}
                themeColor={"#1E1E1E"}
                name={"Banca do Ramon"}
                type={"article"}
                canonical={"https://blog.bancadoramon.com.br/o-que-o-brasil-tem-de-mais-delicioso/"}/>

            <div className="penci-top-bar">
                <div className="container">
                    <div className="penci-headline">
                        <span className="headline-title">Mais acessados</span>
                        <div className="penci-topbar-social">
                            <div className="inner-header-social">
                                <a href="https://www.facebook.com/BancadoRamon" title="facebook" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="https://twitter.com/bancaramon" title="twitter" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="https://www.instagram.com/bancadoramon/" title="instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="mailto:atendimento@bancadoramon.com.br" title="email"><FontAwesomeIcon icon={faEnvelope} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


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
                            <Typography className={"home"} variant="h1">
                                Conheça os detalhes de 27 pratos típicos e mais de 40 rótulos de vinhos em
                                harmonizações criadas pelo nosso sommelier
                            </Typography>
                            <Typography variant="body1">
                                Em cada parte do Brasil, há um prato delicioso que traduz a tradição local e pode ficar
                                ainda mais especial quando harmonizado com vinho. Apresentamos ingredientes,
                                modos de preparo e as melhores dicas para a escolha do vinho perfeito para as
                                27 especialidades culinárias que melhor representam o país.
                            </Typography>
                            <Typography variant="body1">&nbsp;</Typography>

                            <Typography className={"home"} variant="h2">
                                Viaje por experiências gustativas sem sair de casa
                            </Typography>
                            <Typography variant="body1">
                                O mapa do que <strong>O Brasil Tem de Mais Delicioso</strong> te leva aos sabores,
                                texturas e aromas da gastronomia local, com todas as informações sobre os vinhos
                                mais indicados para harmonização, de acordo com diferentes critérios.
                                Uma verdadeira viagem sensorial!
                            </Typography>
                            <Typography variant="body1">&nbsp;</Typography>

                            <Typography className={"home"} variant="h2">
                                Para onde você quer ir hoje? Clique no mapa interativo para ver receitas,
                                curiosidades e muito mais!
                            </Typography>
                            <Brasil/>

                            <Typography className={"home"} variant="h2">
                                Harmonização de vinhos com pratos brasileiros: sommelier mostra como fazer
                            </Typography>
                            <Typography variant="body1">
                                Jamil Abdala estudou administração na faculdade Mackenzie em São Paulo (SP),
                                fez o curso Harmonização Comida e Vinho no SENAC, curso de Formação de
                                Sommeliers e Profissionais do Vinho e o curso WSET 1. Atua como sommelier há 12 anos,
                                ajudando clientes a escolherem os vinhos mais adequados às suas preferências e
                                ao prato que estão consumindo ou vão consumir, considerando seu orçamento.
                            </Typography>
                            <Typography variant="body1">
                                <em>“Sou hábil na arte de harmonizar vinho e comida, realçando os sabores dos pratos e
                                equilibrando os elementos da refeição. Forneço informações detalhadas sobre os vinhos
                                disponíveis, incluindo a região de origem, a safra, as características de sabor e
                                aroma e até mesmo a história do produtor. Isso ajuda os clientes a entender melhor
                                o que estão bebendo”.</em>
                            </Typography>

                            <figure>
                                <img className={"img-home"} src={Jamil} alt={"Jamil Abdala"}/>
                                    <figcaption><Typography variant="body1">
                                        Jamil Abdala, Sommelier da Banca do Ramon.
                                    </Typography></figcaption>
                            </figure>

                            <Typography variant="body1">&nbsp;</Typography>


                            <Typography className={"home"} variant="h2">
                                Comidas que combinam com vinho: as melhores receitas estão aqui!
                            </Typography>
                            <Typography variant="body1">
                                Aprenda a preparar o prato que melhor representa cada estado brasileiro.
                                Além do passo a passo mais simples, com explicações detalhadas, indicamos a lista
                                completa de ingredientes para cada receita, passando pela

                                <a className={"link-externo"} href="https://www.bancadoramon.com.br/bebidas/vinhos">
                                    carta de vinhos
                                </a>
                                    que acompanham, é claro!
                            </Typography>
                            <Typography variant="body1">
                                A culinária brasileira é o resultado único da junção de muitas culturas,
                                o que também nos aproxima do vinho. Em Santa Catarina, a polenta é herança
                                dos colonos vindos da Itália, país que é um dos maiores produtores de vinho
                                do mundo até os dias atuais. Já no Paraná, a carne barreada tem origem atribuída
                                aos portugueses e fica muito bem acompanhada por vinhos do Douro e do Alentejo.
                            </Typography>

                            <figure>
                                <img className={"img-home"} src={Stock01} alt={"alt-text"}/>
                                <figcaption><Typography variant="body1">
                                </Typography></figcaption>
                            </figure>

                            <Typography variant="body1">
                                O Pato no Tucupi paraense e o Sururu de Capote - patrimônio imaterial de Alagoas -
                                são pratos típicos brasileiros que aguçam os sentidos. Não só o paladar,
                                mas principalmente a curiosidade. Cozinhar moluscos no leite de coco -
                                sem desprezar as conchas - ou a carne de pato com um caldo derivado das raízes
                                cozidas até deixarem de ser tóxicas são riquezas gastronômicas que só o
                                Brasil tem e que merecem um vinho à altura.
                            </Typography>
                            <figure>
                                <img className={"img-home"} src={PatoTucupi} alt={"alt-text"}/>
                                <figcaption><Typography variant="body1">
                                </Typography></figcaption>
                            </figure>
                            <Typography variant="body1">
                                Até o Frango com Quiabo, preparação simples e afetiva criada com ingredientes que
                                vinham dos quintais das casas mineiras, ganha elegância quando acompanhado de uma
                                taça de vinho tinto. Se a ideia é sair da rotina numa segunda-feira e tornar o dia de
                                Virado à Paulista mais especial, um Chardonnay branco dá o tom de comemoração.
                                Sofisticação e simplicidade andam juntas na culinária nacional.
                            </Typography>

                            <figure>
                                <img className={"img-home"} src={Stock02} alt={"alt-text"}/>
                                <figcaption><Typography variant="body1">
                                </Typography></figcaption>
                            </figure>


                            <Typography className={"home"} variant="h2">
                                Vinhos pelo Brasil
                            </Typography>
                            <Typography variant="body1">
                                Bahia:<br/><a className={"link-externo"} href="https://www.trbn.com.br/materia/I87949/vinho-e-acaraje-sommelier-ensina-como-harmonizar-">
                                    https://www.trbn.com.br/materia/I87949/vinho-e-acaraje-sommelier-ensina-como-harmonizar-
                                </a>
                            </Typography>
                            <Typography variant="body1">
                                Rondônia:<br/><a className={"link-externo"} href="https://rondoniaovivo.com/noticia/gastronomia/2023/08/29/gastronomia-pratos-tipicos-brasileiros-para-harmonizar-com-vinhos.html">
                                    https://rondoniaovivo.com/noticia/gastronomia/2023/08/29/gastronomia-pratos-tipicos-brasileiros-para-harmonizar-com-vinhos.html
                                </a>
                            </Typography>
                            <Typography variant="body1">
                                Alagoas:<br/><a className={"link-externo"} href="https://www.alagoasnanet.com.br/v3/vinho-com-sarapatel-combina-descubra-os-segredos-do-prato-tipico-do-nordeste/ ">
                                    https://www.alagoasnanet.com.br/v3/vinho-com-sarapatel-combina-descubra-os-segredos-do-prato-tipico-do-nordeste/
                                </a>
                            </Typography>
                            <Typography variant="body1">&nbsp;</Typography>

                        </>
                    }/>
                    <Route path="/norte" element={
                        <>
                            <Typography variant="body1">Selecione um estado</Typography>
                            <RegiaoNorte/>
                        </>
                    }/>
                    <Route path="/nordeste" element={
                        <>
                            <RegiaoNordeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/centro-oeste" element={
                        <>
                            <RegiaoCentroOeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/sudeste" element={
                        <>
                            <RegiaoSudeste/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>
                    <Route path="/sul" element={
                        <>
                            <RegiaoSul/>
                            <Typography variant="body1" className={"mapa-estado-texto"}>Selecione um estado</Typography>
                        </>
                    }/>

                </Routes>
                <Typography variant="body1" className="bottom-correction">

                </Typography>
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
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-socials-section">
                        <ul className="footer-socials">
                            <li>
                                <a href="https://www.facebook.com/BancadoRamon" title="facebook" target="_blank">
                                <span className="fa-icon"><FontAwesomeIcon icon={faFacebookF} /></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/bancaramon" title="twitter" target="_blank">
                                    <span className="fa-icon"><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/bancadoramon/" title="instagram" target="_blank">
                                    <span className="fa-icon"><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:atendimento@bancadoramon.com.br" title="email">
                                    <span className="fa-icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-logo-copyright footer-not-logo">
                        <div className="footer-copyright">
                            <p>@2023 - Banca do Ramon. Todos os direitos reservados </p>
                        </div>
                        <div className="go-to-top-parent"><a href="#" className="go-to-top"><span className="go-to-top"><FontAwesomeIcon icon={faAngleUp} /><br/>Topo</span></a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}