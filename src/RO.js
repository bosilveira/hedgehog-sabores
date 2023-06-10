import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RO-icone.png'
import Bookmark from './RO-bookmark.png'
import Prato from './RO-prato.jpg'
import Top from './preparotopnorte.svg'
import Bottom from './preparobottomnorte.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaRO() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Doce de Buriti - Rondônia"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/norte"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#33753F', fontSize: '44px'}}>
                Rondônia
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Doce de Buriti
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>01 prato de buriti fresco</Typography>
            <Typography>01 prato de açúcar</Typography>
        </Box>
    
        <Box style={{background: `url(${Top}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '24px'}}>
                Modo de Preparo
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: "24px 0 0 0"}} >
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'center'}}>Leve os ingredientes ao fogo e mexa sem parar. Não precisa colocar água. Quando estiver desgrudando do fundo da panela com uma coloração escura, já é hora de desligar. Espalhe em um tabuleiro e corte em pedaços.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'center'}}>Sirva frio.</Typography>
        </Box>
    
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Licoroso:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-alambre-moscatel-de-setubal-750ml">MOSCATEL DE SETUBAL ALHAMBRE</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Licoroso:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-porto-graham-s-fine-tawny-750ml">GRAHAM'S FINE PORT TAWNY</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}