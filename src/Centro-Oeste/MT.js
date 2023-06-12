import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MT-icone.png'
import Bookmark from './MT-bookmark.png'
import Prato from './MT-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaMT() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Maria Isabel - Mato Grosso"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Mato Grosso - Centro-Oeste"}/>
                    <Voltar url="/centro-oeste"/>
                </Box>
                <Box className={"receita-titulo centro-oeste"}>
                    <Typography variant="h1">
                        Mato Grosso
                    </Typography>
                    <Typography variant="h2">
                        Maria Isabel
                    </Typography>
                </Box>

                <Box className={"ingredientes centro-oeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">½ kg de carne</Typography>
                    <Typography variant="body1">½ Kg de arroz</Typography>
                    <Typography variant="body1">Água fervente</Typography>
                    <Typography variant="body1">Óleo ou gordura</Typography>
                    <Typography variant="body1">Sal</Typography>
                    <Typography variant="body1">Pimenta do reino</Typography>
                    <Typography variant="body1">Vinagre</Typography>
                    <Typography variant="body1">Alho</Typography>
                    <Typography variant="body1">Temperos a gosto</Typography>
                </Box>

                <Box className={"preparo-top centro-oeste"}>
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">Corte a carne em pedaços e tempere com sal, pimenta, vinagre e o alho. Em uma panela espaçosa coloque o óleo e deixe esquentar. Quando o óleo estiver bem quente, coloque a carne.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Assim que a carne estiver frita coloque bastante cebola, ou cortada em rodelas, ou picada.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Quando a cebola estiver fritinha, coloque o arroz e deixe-o fritar por alguns minutos. Não esqueça de mexer. Feito isso, coloque a água fervendo e deixe cozinhar.</Typography>
                    <Typography variant="body1">Uma boa pedida é servir com uma deliciosa salada.</Typography>
                </Box>

                <Box className={"preparo-bottom centro-oeste"}/>

                <Box className={"harmonizacao centro-oeste"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-riondo-valpolicella-750ml">
                            RIONDO VALPOLICELLA (RIPASSO)
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-esporao-reserva-branco-750ml">
                            ESPORÃO RESERVA BRANCO
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}