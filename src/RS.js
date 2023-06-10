
  import '@fontsource-variable/inter';
  import "@fontsource/abril-fatface";
  import "@fontsource/cookie";
  import "./styles.css";
  import Box from '@mui/material/Box';
  import Container from '@mui/material/Container';
  import Chip from '@mui/material/Chip';
  import Typography from '@mui/material/Typography';
  import Link from '@mui/material/Link';

  import Icone from './RS-icone.png'
  import Bookmark from './RS-bookmark.png'
  import Prato from './RS-prato.jpg'
  import Top from './preparotopsul.svg'
  import Bottom from './preparobottomsul.svg'
  import Vinho from './vinho.png'
  import Voltar from "./Voltar";
  
  export default function ReceitaRS() {
  
    return (
    <>
    <Container maxWidth="md" style={{position: "relative", width: "100%", top: "0px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingLeft: 0, paddingRight: 0}} >
        <Box style={{position: "relative", width: '100%', top:"0px", height: '209px', minWidth: "320px", borderBottom: "2px solid #BE952B"}} >
            <img style={{position: "absolute", minWidth: "320px", width: "100%", height: "209px", objectFit: "cover" }} src={Prato} alt={"Churrasco - Rio Grande do Sul"} />
            <img src={Bookmark} style={{position: "absolute", width: '80px', right: "40px", top: "-30px", background: "none"}} alt={"Rio Grande do Sul - Sul"} />
            <Voltar url="/sul"/>
        </Box>
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h1" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Abril Fatface", color: '#E3AB1B', fontSize: '44px'}}>
                Rio Grande do Sul
            </Typography>
            <Typography variant="h2" sx={{backgroundColor: 'transparent', minWidth: "320px", textAlign: 'center', fontFamily: "Cookie", color: '#D8D2C6', fontSize: '48px', marginTop: '-12px'}}>
                Churrasco
            </Typography>
        </Box>
  
        <Box style={{backgroundColor: '#E3AB1B', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: '24px 0'}} >
            <img src={Icone} style={{backgroundColor: 'transparent', width: '64px', margin: "24px 0" }} alt={""}/>
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Ingredientes
            </Typography>
            <Typography>Carne bovina de sua preferência</Typography>
            <Typography>(costela, picanha, maminha, etc)</Typography>
            <Typography>Sal grosso à vontade</Typography>
        </Box>
    
        <Box style={{background: `url(${Top}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#D8D2C6', fontSize: '24px'}}>
                Modo de Preparo
            </Typography>
        </Box>
    
        <Box style={{backgroundColor: '#232323', width: '100%', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '8px', padding: "24px 0 0 0"}} >
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', textAlign: 'center'}}>
                Posicione os pedaços de carne num espeto.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', textAlign: 'center'}}>
                Passe o sal e coloque a uma distância de 25 cm da chama.
            </Typography>
            <Typography variant="body1" style={{margin: "4px 24px", color: '#D8D2C6', textAlign: 'center'}}>
                O ponto tradicional da carne é mal passado, com o exterior apenas chamuscado.
            </Typography>
        </Box>
        
        <Box style={{background: `url(${Bottom}) center top no-repeat`, backgroundSize: 'cover', width: '100%', height: '120px', minWidth: "320px", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} >
        </Box>
    
        <Box style={{backgroundColor: '#E3AB1B', width: '100%', minHeight: '320px', minWidth: "320px", display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '48px 0'}} >
            <Typography variant="h3" sx={{backgroundColor: 'transparent', fontFamily: "Abril Fatface", color: '#242424', fontSize: '24px'}}>
                Harmonização
            </Typography>
            <img src={Vinho} style={{backgroundColor: 'transparent', width: '64px' }}/>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Branco:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-villa-antinori-toscana-branco-750ml">VILLA ANTINORI TOSCANA BRANCO</Link>
            </Box>
            <Box sx={{backgroundColor: "transparent", textAlign: "center"}}>
                <p>Vinho Tinto:</p>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-el-enemigo-syrah-viognier-750ml">EL ENEMIGO SYRAH-VIOGNIER</Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>
  
    </Container>
    </>
    );
}