import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './AM-icone.png'
import Bookmark from './AM-bookmark.png'
import Prato from './AM-prato.jpg'
import Top from './preparotopnorte.svg'
import Bottom from './preparobottomnorte.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaAM() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Caldo de Tambaqui - Amazonas"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/norte"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#33753F', fontSize: '44px'}}>
                Amazonas
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Caldo de Tambaqui
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>1kg de tambaqui</Typography>
            <Typography>03 tomates sem sementes cortados em 4 partes</Typography>
            <Typography>03 cebolas cortadas igual ao tomate</Typography>
            <Typography>15 pimentas-de-cheiro sem sementes</Typography>
            <Typography>e cortadas no meio (se preferir)</Typography>
            <Typography>01 maço de cheiro verde picado</Typography>
            <Typography>01 maço de cebolinhas picado</Typography>
            <Typography>Colorau a gosto</Typography>
            <Typography>Azeite de oliva a gosto</Typography>
            <Typography>01 colher de sobremesa de vinagre</Typography>
            <Typography>Sal a gosto</Typography>
            <Typography>Limão para o preparo do peixe</Typography>
        </Box>
    
        <Box style={{background: `url(${Top}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '24px'}}>
                Modo de Preparo
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
                01.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>No dia anterior, lave bem o peixe com água fria. Coloque-o em um refratário banhando-o com o caldo do limão e sal. Leve à geladeira.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                02.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>No momento em que for preparar, passe o peixe apenas uma vez em água corrente para tirar o excesso do limão.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Em uma panela grande coloque o peixe, tomate, cebola, pimenta-de-cheiro e parte do coentro e cebolinha.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
                03.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Coloque água o suficiente para cobrir o peixe. Acrescente o azeite a gosto, 01 colher de sobremesa de vinagre e o colorau.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Vá salgando aos poucos, pois durante a fervura o sal que está no peixe vai soltando no caldo. Ferva por aproximadamente 20 minutos.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Apague o fogo e coloque o resto do coentro e da cebolinha. Sirva a seguir.</Typography>
        </Box>
    
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Branco:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-chileno-amayna-sauvignon-blanc-750ml">AMAYNA SAUVIGNON BLANC</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-montes-alpha-special-cuvee-pinot-noir-750ml">MONTES APLHA SPECIAL CUVÉE PINOT NOIR</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}