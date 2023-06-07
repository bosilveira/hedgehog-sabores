import {
    BrowserRouter,
    Link,
    useLocation,
    Route,
    Routes
  } from "react-router-dom";
  import '@fontsource-variable/inter';
  import "@fontsource/abril-fatface";
  import "@fontsource/cookie";
  import "./styles.css";
  import Box from '@mui/material/Box';
  
  import PreparoTopSul from './preparotopsul.svg'
  import PreparoBottomSul from './preparobottomsul.svg'
  import Vinho from './vinho.png'
  import Chip from '@mui/material/Chip';
  import Typography from '@mui/material/Typography';
  import Icone from './SC-icone.png'
  
  export default function ReceitaSC() {
  
    return (
      <>
      <Box style={{background: `url(${PreparoBottomSul}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '160px', minWidth: "320px", 
      display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#E3AB1B', fontSize: '48px'}}>
              Santa Catarina
          </Typography>
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Cookie", color: 'white', fontSize: '48px', marginTop: '-32px'}}>
              Joelho de Porco
          </Typography>
      </Box>
  
      <Box style={{backgroundColor: '#E3AB1B', width: '100%', minHeight: '320px', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '48px 0'}} >
          <img src={Icone} style={{backgroundColor: 'transparent', width: '64px' }}/>
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Ingredientes
          </Typography>
            <p>02 joelhos de porco defumado ou natural</p>
            <p>04 batatas grandes</p>
            <p>04 salsichões brancos</p>
            <p>04 salsichões com alho</p>
            <p>300ml óleo de milho ou girassol ou canola</p>
            <p>250g de chucrute em lata</p>
            <p>20g de zimbro</p>
            <p>Mostarda a gosto</p>
      </Box>
  
      <Box style={{background: `url(${PreparoTopSul}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '160px', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '24px'}}>
              Modo de Preparo
          </Typography>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
      textAlign: 'left'}}>
              01.
          </Typography>
          <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'left'}}>Coloque os joelhos em uma panela de pressão, cubra-os de água e cozinhe por aproximadamente 45 minutos ou até as carnes começarem a se soltar dos ossos. Retire da água (reserve) e escorra-os.</p>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
      textAlign: 'right'}}>
              02.
          </Typography>
          <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Na sequência, coloque as carnes num refratário e regue a pele com o óleo pré-aquecido bem quente para formar pururuca na casca. Se necessário, repita o processo para que a pele fique crocante.</p>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
      textAlign: 'left'}}>
              03.
          </Typography>
          <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'left'}}>Na água em que ferveram os joelhos, cozinhe as batatas descascadas e as salsichas.</p>
      </Box>
  
      <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
      textAlign: 'right'}}>
              04.
          </Typography>
          <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Em uma panela, coloque o chucrute e adicione ½  copo de água e o zimbro. Deixe ferver por 5 minutos.</p>
          <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Para servir, arranje tudo em uma só travessa.</p>
      </Box>
  
      <Box style={{background: `url(${PreparoBottomSul}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '160px', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
      </Box>
  
      <Box style={{backgroundColor: '#E3AB1B', width: '100%', minHeight: '320px', minWidth: "320px", 
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '12px', padding: '48px 0'}} >
          <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
              Harmonização
          </Typography>
          <p>&nbsp;</p>
          <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
          <p>&nbsp;</p>
          <p>Vinho Branco:</p>
          <p>ANSELMANN RIESLING TROCKEN</p>
          <p>&nbsp;</p>
          <p>Vinho Tinto:</p>
          <p>POGGIO BADIOLA (MAZZEI)</p>
          <p>&nbsp;</p>
          <Chip label="Você só encontra aqui!" component="a" href="#basic-chip" clickable />
  
      </Box>
      </>
  
  
    );
  }