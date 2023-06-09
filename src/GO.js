import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './GO-icone.png'
import Bookmark from './GO-bookmark.png'
import Prato from './GO-prato.jpg'
import Top from './preparotopcentrooeste.svg'
import Bottom from './preparobottomcentrooeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaGO() {

  return (
  <>
  <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
      <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
          <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Arroz com Pequi - Goiás"} />
          <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
          <Voltar url="/centro-oeste"/>
      </Box>
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
          <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#5F9139', fontSize: '44px'}}>
              Goiás
          </Typography>
          <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
              Arroz com Pequi
          </Typography>
      </Box>

      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
          <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Ingredientes
          </Typography>
            <Typography>¼ de xícara de chá de óleo ou banha de porco</Typography>
            <Typography>½ litro de pequi lavado</Typography>
            <Typography>02 dentes de alho espremidos</Typography>
            <Typography>01 cebola grande picada</Typography>
            <Typography>02 xícaras de chá de arroz</Typography>
            <Typography>04 xícaras de chá de água quente</Typography>
            <Typography>sal a gosto</Typography>
            <Typography>pimenta-de-cheiro ou malagueta a gosto</Typography>
      </Box>
  
      <Box style={{background: `url(${Top}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '24px'}}>
              Modo de Preparo
          </Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'left'}}>
              01.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Coloque o pequi no óleo ou gordura fria (se for usar o fruto inteiro não precisa cortar, mas tenha cuidado com o caroço).</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'right'}}>
              02.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Acrescente alho e cebola e deixe refogar em fogo baixo. Mexa sempre com uma colher de pau para não grudar na panela. De vez em quando, respingue um pouco de água.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'left'}}>
              03.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Quando o pequi estiver macio e a água tiver secado, acrescente o arroz e deixe fritar um pouco. Junte a água restante e o sal.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'right'}}>
              04.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Quando o arroz estiver quase no ponto, coloque a pimenta-de-cheiro ou a malagueta a gosto.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>No momento em que for servir, polvilhe o arroz com salsa, cebolinha e mais um pouco de pimenta.</Typography>
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
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-branco-royal-palmeira-750ml">ROYAL PALMEIRA</Link>
          </Box>
          <Chip label="Você só encontra aqui!" component="p" />
      </Box>

  </Container>
  </>
  );
}