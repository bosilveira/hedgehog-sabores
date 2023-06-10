import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MG-icone.png'
import Bookmark from './MG-bookmark.png'
import Prato from './MG-prato.jpg'
import Top from './preparotopsudeste.svg'
import Bottom from './preparobottomsudeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaMG() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Frango com Quiabo - Minas Gerais"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/sudeste"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#C5BE25', fontSize: '44px'}}>
                Minas Gerais
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Frango com Quiabo
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#C5BE25', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>01kg de frango, limpo e cortado a passarinho</Typography>
            <Typography>400g de quiabo picado</Typography>
            <Typography>02 colheres de sopa de óleo</Typography>
            <Typography>01 cebola ralada</Typography>
            <Typography>02 dentes de alho amassados</Typography>
            <Typography>Sal, pimenta do reino e cheiro verde a gosto</Typography>
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
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Em uma panela, coloque óleo e frite o frango aos poucos.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Reserve.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                02.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Na mesma panela, coloque alho, cebola, pimenta, sal e refogue o quiabo. Deixe dourar mexendo de vez em quando.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
                03.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Depois, junte o frango e deixe cozinhar com a panela tampada até ambos ficarem macios.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                04.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Se quiser, adicione uma xícara de chá de água para formar um leve caldo para servir com o prato.</Typography>
        </Box>
    
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#C5BE25', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-luca-laborde-double-select-syrah-750ml">LUCA SYRAH</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}