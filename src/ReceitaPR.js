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
import Icone from './pr-icone.png'

export default function ReceitaPR() {

  return (
    <>
    <Box style={{background: `url(${PreparoBottomSul}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '160px', minWidth: "320px", 
    display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#E3AB1B', fontSize: '48px'}}>
            Paraná
        </Typography>
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Cookie", color: 'white', fontSize: '48px', marginTop: '-32px'}}>
            Paçoca de Pinhão
        </Typography>
    </Box>

    <Box style={{backgroundColor: '#E3AB1B', width: '100%', minHeight: '320px', minWidth: "320px", 
    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '48px 0'}} >
        <img src={Icone} style={{backgroundColor: 'transparent', width: '64px' }}/>
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
            Ingredientes
        </Typography>
        <p>01kg de pinhão</p>
        <p>500g de carne moída</p>
        <p>200g de bacon</p>
        <p>200g de calabresa</p>
        <p>01 dente de alho picado</p>
        <p>½ cebola picada</p>
        <p>Sal e cheiro verde a gosto</p>
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
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'left'}}>Cubra o pinhão com água e cozinhe em uma panela de pressão. Depois, descasque e triture em um liquidificador.</p>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'left'}}>Reserve.</p>
    </Box>

    <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
    display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
    textAlign: 'right'}}>
            02.
        </Typography>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Em uma panela, frite o alho e a cebola e refogue a carne moída com um pouco de sal.</p>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Reserve.</p>
    </Box>

    <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
    display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', gap: '8px'}} >
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
    textAlign: 'left'}}>
            03.
        </Typography>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'left'}}>Na frigideira, frite o bacon e a calabresa.</p>
    </Box>

    <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", 
    display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', gap: '8px'}} >
        <Typography sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: 'white', fontSize: '92px', width: "50%", borderBottom: "1px solid white",
    textAlign: 'right'}}>
            04.
        </Typography>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Misture tudo em uma panela, começando pela carne moída, a farofa do pinhão, o bacon e a calabresa. </p>
        <p style={{margin: "4px 24px", color: 'white', maxWidth: '480px', textAlign: 'right'}}>Mexa bem e deixe aquecer antes de servir.</p>
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
        <p>Vinho Tinto:</p>
        <p>CHATEAU STE MICHILLE CABERNET SAUVIGNON</p>
        <p>&nbsp;</p>
        <Chip label="Você só encontra aqui!" component="a" href="#basic-chip" clickable />
    </Box>
    </>

  );
}