import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PA-icone.png'
import Bookmark from './PA-bookmark.png'
import Prato from './PA-prato.jpg'
import Top from './preparotopnorte.svg'
import Bottom from './preparobottomnorte.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaPA() {

    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Pato no Tucupi - Pará"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
            <Voltar url="/norte"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#33753F', fontSize: '44px'}}>
                Pará
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Pato no Tucupi
            </Typography>
        </Box>

        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>01 pato inteiro</Typography>
            <Typography>(aproximadamente 3kg)</Typography>
            <Typography>05 maços de jambú</Typography>
            <Typography>03 litros de tucupi</Typography>
            <Typography>02 cebolas picadas</Typography>
            <Typography>10 dentes de alho</Typography>
            <Typography>01 maço de chicória</Typography>
            <Typography>02 tomates</Typography>
            <Typography>02 limões</Typography>
            <Typography>Sal e pimenta-do-reino a gosto</Typography>
            <Typography>01 colher (sopa) de manteiga</Typography>
            <Typography>02 colheres (sopa) de azeite</Typography>
            <Typography>Pimenta-de-cheiro a gosto</Typography>
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
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>O pato precisa começar a ser preparado na véspera. Deixe-o em água corrente por cerca de 5 minutos. Depois, lave-o com as folhas de chicória e limão. Após, coloque o pato com 3 dentes de alho amassado, sal, pimenta-de-cheiro em um refratário. Cubra com papel alumínio e leve à geladeira.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                02.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>No dia do preparo, corte o pato em pedaços, aqueça uma panela com manteiga e azeite, acrescente 4 dentes de alho amassados, cebola e tomate picados. Refogue bem até que a cebola comece a dourar e adicione os pedaços de pato para selar.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
                03.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Despeje o pato refogado em uma assadeira e leve ao forno, preaquecido, a 200ºC por aproximadamente 1 hora.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Enquanto isso, coloque o Tucupi para ferver com sal, 3 dentes de alho e a chicória.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Reserve.</Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
            <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
                04.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Lave o jambu em água fria por alguns minutos. Remova as flores e ferva com água e sal até que tenha amolecido. Escorra a água e coloque o jambu dentro da panela com o tucupi quente. Acrescente a pimenta-de-cheiro levemente amassada.</Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Quando o pato estiver macio, coloque-o dentro da panela com o tucupi e ferva novamente.</Typography>
        </Box>

        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#33753F', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-macon-les-genievres-louis-latour-750ml">MÂCON-LUGNY LOUIS LATOUR</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Branco:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-tinto-l-avvocata-barbera-d-asti-750ml">BARBERA D'ASTI L'AVVOCATA </Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}