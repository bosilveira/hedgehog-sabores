
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './CE-icone.png'
import Bookmark from './CE-bookmark.png'
import Prato from './CE-prato.jpg'
import Top from './preparotopnordeste.svg'
import Bottom from './preparobottomnordeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaCE() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Sarrabulho - Ceará"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/nordeste"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#97AB43', fontSize: '44px'}}>
                Ceará
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Sarrabulho
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#97AB43', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>½ de fígado de frango</Typography>
            <Typography>250g de coração de frango</Typography>
            <Typography>02 cubos de caldo de galinha</Typography>
            <Typography>Sal, pimenta-de-cheiro picadinha</Typography>
            <Typography>01 cebola picada</Typography>
            <Typography>01 colher rasa de colorau</Typography>
            <Typography>Farinha de mandioca</Typography>
            <Typography>Pimentão picado</Typography>
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
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>
                Tempere as carnes com alho, sal e pimenta-do-reino.
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                02.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>
                Cozinhe o coração na pressão por 15 minutos, acrescente o fígado e deixe cozinhar por mais 5 minutos com o caldo de galinha.
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
                03.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>
                Faça um refogado com óleo e colorau e despeje os miúdos já cozidos e picados. Junte a cebola. 
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                04.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>
                Engrosse com farinha de mandioca para que fique um pirão meio mole.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>
                Acrescente o cheiro verde, pimenta de cheiro e pimentão picados.
                Sirva com arroz branco. 
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
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-casa-silva-reserva-viognier-750ml">CASA SILVA VIOGNIER</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-coyam-750ml">COYAM</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
    }