import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './TO-icone.png'
import Bookmark from './TO-bookmark.png'
import Prato from './TO-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaTO() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Paçoca de Carne de Sol - Tocantins"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Tocantins - Norte"}/>
                    <Voltar url="/norte"/>
                </Box>
                <Box className={"receita-titulo norte"}>
                    <Typography variant="h1">
                        Tocantins
                    </Typography>
                    <Typography variant="h2">
                        Paçoca de Carne de Sol
                    </Typography>
                </Box>

                <Box className={"ingredientes norte"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">01 kg de carne de sol</Typography>
                    <Typography variant="body1">01 cebola pequena</Typography>
                    <Typography variant="body1">02 dentes de alho amassados</Typography>
                    <Typography variant="body1">Óleo para refogar</Typography>
                    <Typography variant="body1">Colorau </Typography>
                    <Typography variant="body1">½ kg de farinha de mandioca (fina)</Typography>
                    <Typography variant="body1">Cheiro verde a gosto</Typography>
                </Box>

                <Box className={"preparo-top norte"}>
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">Corte a carne em pedaços pequenos e leve ao fogo com água para ferver por aproximadamente 15 minutos. Escorra a água. Se a carne estiver muito salgada, ferva novamente.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Em uma panela refogue a cebola picada, o alho e o colorau. Junte a carne e deixe fritar até ficar dourada, mexendo sempre. No liquidificador, coloque os pedacinhos de carne e bata no pulsar até desfiar.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Leve a carne novamente ao fogo na sobra do óleo que fora refogado. Aos poucos, vá acrescentando a farinha em cuidado para não ficar seca. Coloque o cheiro verde para finalizar.</Typography>
                </Box>

                <Box className={"preparo-bottom norte"}/>

                <Box className={"harmonizacao norte"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-la-joya-gran-reserva-sauvignon-blanc-750ml">
                            LA JOYA SAUVIGNON BLANC
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-la-posta-bonarda-750ml">
                            LA POSTA BONARDA
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}