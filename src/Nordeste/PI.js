
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PI-icone.png'
import Bookmark from './PI-bookmark.png'
import Prato from './PI-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaPI() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Bode Assado - Piauí"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Piauí - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"}>
                    <Typography variant="h1">
                        Piauí
                    </Typography>
                    <Typography variant="h2">
                        Bode Assado
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">1kg de carne de bode</Typography>
                    <Typography variant="body1">5 cebolas em rodelas</Typography>
                    <Typography variant="body1">4 batatas cortadas em pedaços grandes</Typography>
                    <Typography variant="body1">2 tabletes de caldo de carne</Typography>
                    <Typography variant="body1">2 dentes de alho</Typography>
                    <Typography variant="body1">Sal e cominho a gosto</Typography>
                    <Typography variant="body1">Azeite</Typography>
                </Box>

                <Box className={"preparo-top nordeste"}>
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">
                        Tempere a carne usando alho, sal e cominho.
                        Em seguida, forre o fundo da panela de pressão com as cebolas, a carne e os tabletes de caldo.
                        Regue com azeite e tampe a panela.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">
                        Deixe cozinhar por cerca de 35 minutos após a panela pegar pressão.
                        Desligue e coloque as batatas na panela para cozinhar por 5 minutos.
                    </Typography>
                </Box>

                <Box className={"preparo-bottom nordeste"}/>

                <Box className={"harmonizacao nordeste"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-de-loach-chardonnay-750ml">
                            DE LOACH CHARDONNAY
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-lazuli-cabernet-sauvignon-750ml">
                            LAZULI CABERNET SAUVIGNON
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}