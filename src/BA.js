
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './BA-icone.png'
import Bookmark from './BA-bookmark.png'
import Prato from './BA-prato.jpg'
import Top from './preparotopnordeste.svg'
import Bottom from './preparobottomnordeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaBA() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Acarajé - Bahia"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/nordeste"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#97AB43', fontSize: '44px'}}>
                Bahia
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Acarajé
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#97AB43', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>01kg de feijão fradinho quebrado</Typography>
            <Typography>300g de cebola</Typography>
            <Typography>01 colher de chá de gengibre ralado</Typography>
            <Typography>01 dente de alho</Typography>
            <Typography>01 colher de sobremesa de sal</Typography>
            <Typography>01L de dendê para fritar</Typography>
        </Box>
    
        <Box style={{background: `url(${Top}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '24px'}}>
                Modo de Preparo
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: "24px 0 0 0"}} >
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', textAlign: 'center'}}>
                Em uma bacia, coloque o feijão e lave algumas vezes. Deixe de molho por 3 horas.
                Bata no liquidificador até formar uma pasta. Na hora de fritar, bata novamente com uma colher de pau até a massa ficar bem fofinha.
                Esquente o dendê e com uma colher de arroz, faça pequenos bolinhos.
                Frite-os no dendê. 
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', textAlign: 'center'}}>
                Sirva com camarão e vinagrete.
            </Typography>
        </Box>
        
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#97AB43', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Branco:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-casalforte-pinot-grigio-750ml">CASALFORTE PINOT GRIGIO</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-escorihuela-pequenas-producciones-syrah-750ml">PEQUEÑAS PRODUCCIONES SYRAH</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
    }