import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MS-icone.png'
import Bookmark from './MS-bookmark.png'
import Prato from './MS-prato.jpg'
import Top from './preparotopcentrooeste.svg'
import Bottom from './preparobottomcentrooeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaMS() {

  return (
  <>
  <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
      <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
          <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Arroz Boliviano - Mato Grosso do Sul"} />
          <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
          <Voltar url="/centro-oeste"/>
      </Box>
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
          <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#5F9139', fontSize: '44px'}}>
              Mato Grosso do Sul
          </Typography>
          <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
              Arroz Boliviano
          </Typography>
      </Box>

      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
          <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Ingredientes
          </Typography>

            <Typography>1kg de arroz</Typography>
            <Typography>1kg de carne moída (magra)</Typography>
            <Typography>2kg de batata</Typography>
            <Typography>02 latas de ervilha</Typography>
            <Typography>02 latas de milho verde</Typography>
            <Typography>01 dúzia de banana da terra</Typography>
            <Typography>50g de queijo parmesão ralado</Typography>
            <Typography>02 cebolas</Typography>
            <Typography>01 pimentão</Typography>
            <Typography>350g de extrato de tomate</Typography>
            <Typography>03 dentes de alho</Typography>
            <Typography>01 dúzia de ovos</Typography>
            <Typography>02 xícaras de chá de óleo</Typography>
            <Typography>100g de manteiga</Typography>
            <Typography>limão e tomate</Typography>
            <Typography>sal a gosto</Typography>

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
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Cozinhe o arroz à parte.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Tempere a carne com sal, alho e limão. Refogue-a e acrescente pimentão, cebola, tomate, extrato de tomate, ervilha e milho verde.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
              02.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Deixe a carne fritar e acrescente a água.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Cozinhe a dúzia de ovos.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'left'}}>
              03.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Frite as batatas palito e as bananas em rodelas. Coloque em um refratário em camadas o arroz, molho da carne, batata e bananas fritas.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid #D8D2C6", textAlign: 'right'}}>
              04.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Repita as camadas e coloque os ovos por cima.</Typography>
      </Box>
  
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      </Box>
  
      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Harmonização
          </Typography>
          <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
          <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
              <p>Vinho Branco:</p>
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinhoo-catena-chardonnay-750ml">CATENA CHARDONNAY</Link>
          </Box>
          <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
              <p>Vinho Branco:</p>
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-garzon-reserva-tannat">GARZON TANNAT RESERVA</Link>
          </Box>
        <Chip label="Você só encontra aqui!" component="p" />
      </Box>

  </Container>
  </>
  );
}