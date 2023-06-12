import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MS-icone.png'
import Bookmark from './MS-bookmark.png'
import Prato from './MS-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaMS() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Arroz Boliviano - Mato Grosso do Sul"} />
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Mato Grosso do Sul - Centro-Oeste"}/>
                    <Voltar url="/centro-oeste"/>
                </Box>
                <Box className={"receita-titulo centro-oeste"} >
                    <Typography variant="h1">
                        Mato Grosso do Sul
                    </Typography>
                    <Typography variant="h2">
                        Arroz Boliviano
                    </Typography>
                </Box>

                <Box className={"ingredientes centro-oeste"} >
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
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

                <Box className={"preparo-top centro-oeste"} >
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">Cozinhe o arroz à parte.</Typography>
                    <Typography variant="body1">Tempere a carne com sal, alho e limão. Refogue-a e acrescente pimentão, cebola, tomate, extrato de tomate, ervilha e milho verde.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Deixe a carne fritar e acrescente a água.</Typography>
                    <Typography variant="body1">Cozinhe a dúzia de ovos.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Frite as batatas palito e as bananas em rodelas. Coloque em um refratário em camadas o arroz, molho da carne, batata e bananas fritas.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">Repita as camadas e coloque os ovos por cima.</Typography>
                </Box>

                <Box className={"preparo-bottom centro-oeste"}/>

                <Box className={"harmonizacao centro-oeste"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinhoo-catena-chardonnay-750ml">
                            CATENA CHARDONNAY
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-garzon-reserva-tannat">
                            GARZON TANNAT RESERVA
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p" />
                </Box>

            </Container>
        </>
    );
}