import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "./styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './DF-icone.png'
import Bookmark from './DF-bookmark.png'
import Prato from './DF-prato.jpg'
import Top from './preparotopcentrooeste.svg'
import Bottom from './preparobottomcentrooeste.svg'
import Vinho from './vinho.png'
import Voltar from "./Voltar";

export default function ReceitaDF() {

  return (
  <>
  <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
      <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
          <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Filé de Tilápia - Distrito Federal"} />
          <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}}/>
          <Voltar url="/centro-oeste"/>
      </Box>
      <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
          <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#5F9139', fontSize: '44px'}}>
              Distrito Federal
          </Typography>
          <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
              Filé de Tilápia
          </Typography>
      </Box>

      <Box style={{backgroundColor: '#5F9139', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
          <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }}/>
          <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Ingredientes
          </Typography>

            <Typography>1kg de filé de tilápia</Typography>
            <Typography>200g de farinha de rosca</Typography>
            <Typography>200g de farinha de trigo</Typography>
            <Typography>Sal a gosto</Typography>
            <Typography>Pimenta-do-reino a gosto</Typography>
            <Typography>200ml de leite</Typography>
            <Typography>03 ovos</Typography>
            <Typography>Óleo de girassol</Typography>

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
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Bata os ovos e o leite em um refratário e tempere com sal e pimenta-do-reino.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Em outro recipiente, coloque a farinha de trigo e, em outro, a farinha de rosca.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'right'}}>
              02.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Tempere a tilápia com sal, pimenta-do-reino.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Corte em pedaços pequenos de sua preferência.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'left'}}>
              03.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Passe as tilápias primeiro pela farinha de trigo e empane dos 2 lados.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'left'}}>Passe pela mistura de ovos e leite e depois na farinha de rosca empanando pelos 2 lados.</Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography variant="body1" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '92px', width: "50%", borderBottom: "1px solid white", textAlign: 'right'}}>
              04.
          </Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Frite em óleo bem quente por 3 minutos.</Typography>
          <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', maxWidth: '480px', textAlign: 'right'}}>Sirva com o acompanhamento de sua preferência.</Typography>
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
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-domaine-de-valmoissine-pinot-noir-750ml">VALMOISINE PINOT NOIR LOUIS LATOUR</Link>
          </Box>
          <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
              <p>Vinho Branco:</p>
              <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-petit-chablis-750ml-4098">MUROS ANTIGOS (LOUREIRO)</Link>
          </Box>
        <Chip label="Você só encontra aqui!" component="p" />
      </Box>

  </Container>
  </>
  );
}