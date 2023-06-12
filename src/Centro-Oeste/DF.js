import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './DF-icone.png'
import Bookmark from './DF-bookmark.png'
import Prato from './DF-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaDF() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Filé de Tilápia - Distrito Federal"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Distrito Federal - Centro-Oeste"}/>
                    <Voltar url="/centro-oeste"/>
                </Box>
                <Box className={"receita-titulo centro-oeste"}>
                    <Typography variant="h1">
                        Distrito Federal
                    </Typography>
                    <Typography variant="h2">
                        Filé de Tilápia
                    </Typography>
                </Box>

                <Box className={"ingredientes centro-oeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>

                    <Typography variant="body1">1kg de filé de tilápia</Typography>
                    <Typography variant="body1">200g de farinha de rosca</Typography>
                    <Typography variant="body1">200g de farinha de trigo</Typography>
                    <Typography variant="body1">Sal a gosto</Typography>
                    <Typography variant="body1">Pimenta-do-reino a gosto</Typography>
                    <Typography variant="body1">200ml de leite</Typography>
                    <Typography variant="body1">03 ovos</Typography>
                    <Typography variant="body1">Óleo de girassol</Typography>

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
                    <Typography variant="body1">Bata os ovos e o leite em um refratário e tempere com sal e pimenta-do-reino.</Typography>
                    <Typography variant="body1">Em outro recipiente, coloque a farinha de trigo e, em outro, a farinha de rosca.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Tempere a tilápia com sal, pimenta-do-reino.</Typography>
                    <Typography variant="body1">Corte em pedaços pequenos de sua preferência.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Passe as tilápias primeiro pela farinha de trigo e empane dos 2 lados.</Typography>
                    <Typography variant="body1">Passe pela mistura de ovos e leite e depois na farinha de rosca empanando pelos 2 lados.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">Frite em óleo bem quente por 3 minutos.</Typography>
                    <Typography variant="body1">Sirva com o acompanhamento de sua preferência.</Typography>
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-domaine-de-valmoissine-pinot-noir-750ml">
                            VALMOISINE PINOT NOIR LOUIS LATOUR
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-petit-chablis-750ml-4098">
                            MUROS ANTIGOS (LOUREIRO)
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}