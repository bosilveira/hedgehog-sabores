import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MT-icone.png'
import Bookmark from './MT-bookmark.png'
import Prato from './MT-prato.jpg'
import Top from './preparotopcentrooeste.svg'
import Bottom from './preparobottomcentrooeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaMT() {

  return (
  <>
  <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
      <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
          <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Maria Isabel - Mato Grosso"} />
          <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
          <Voltar url="/centro-oeste"/>
      </Box>
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
          <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#5F9139', fontSize: '44px'}}>
              Mato Grosso
          </Typography>
          <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
              Maria Isabel
          </Typography>
      </Box>

      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
          <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Ingredientes
          </Typography>
            <Typography>½ kg de carne</Typography>
            <Typography>½ Kg de arroz</Typography>
            <Typography>Água fervente</Typography>
            <Typography>Óleo ou gordura</Typography>
            <Typography>Sal</Typography>
            <Typography>Pimenta do reino</Typography>
            <Typography>Vinagre</Typography>
            <Typography>Alho</Typography>
            <Typography>Temperos a gosto</Typography>
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
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Corte a carne em pedaços e tempere com sal, pimenta, vinagre e o alho. Em uma panela espaçosa coloque o óleo e deixe esquentar. Quando o óleo estiver bem quente, coloque a carne.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
              02.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Assim que a carne estiver frita coloque bastante cebola, ou cortada em rodelas, ou picada.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
              03.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Quando a cebola estiver fritinha, coloque o arroz e deixe-o fritar por alguns minutos. Não esqueça de mexer. Feito isso, coloque a água fervendo e deixe cozinhar.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Uma boa pedida é servir com uma deliciosa salada.</Typography>
      </Box>
  
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      </Box>
  
      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Harmonização
          </Typography>
          <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
          <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
              <p>Vinho Tinto:</p>
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-riondo-valpolicella-750ml">RIONDO VALPOLICELLA (RIPASSO)</Link>
          </Box>
          <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
              <p>Vinho Branco:</p>
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-esporao-reserva-branco-750ml">ESPORÃO RESERVA BRANCO</Link>
          </Box>
        <Chip label="Você só encontra aqui!" component="p" />
      </Box>

  </Container>
  </>
  );
}