import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './AP-icone.png'
import Bookmark from './AP-bookmark.png'
import Prato from './AP-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaAP() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Pescada de Gurijuba - Amapá"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Amapá - Norte"}/>
                    <Voltar url="/norte"/>
                </Box>
                <Box className={"receita-titulo norte"}>
                    <Typography variant="h1">
                        Amapá
                    </Typography>
                    <Typography variant="h2">
                        Pescada de Gurijuba
                    </Typography>
                </Box>

                <Box className={"ingredientes norte"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">1,5 de gurijuba fresca</Typography>
                    <Typography variant="body1">800g de camarão sem cabeça (fresco ou salgado)</Typography>
                    <Typography variant="body1">500ml de leite de coco</Typography>
                    <Typography variant="body1">01 vidro pequeno de azeite de dendê</Typography>
                    <Typography variant="body1">Suco de 2 limões</Typography>
                    <Typography variant="body1">Cheiro-verde</Typography>
                    <Typography variant="body1">Tomate</Typography>
                    <Typography variant="body1">Pimentão verde</Typography>
                    <Typography variant="body1">Alho picado</Typography>
                    <Typography variant="body1">Cebola a gosto</Typography>
                    <Typography variant="body1">Sal a gosto</Typography>
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
                    <Typography variant="body1">Corte a gurijuba em postas não muito finas. Tempere com suco de limão, alho, sal a gosto e cheiro-verde. Deixe por mais ou menos uma hora neste tempero.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Em uma panela grande, refogue o alho com azeite de dendê (04 colheres de sopa). Coloque uma camada de peixe, outra com cebola e tomate, pimentão (cortados em rodela), cheiro-verde e o camarão.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Assim que organizar todos os ingredientes, acrescente o leite de coco e deixe cozinhar por 20 minutos.</Typography>
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-chileno-amayna-sauvignon-blanc-750ml">
                            AMAYNA SAUVIGNON BLANC
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-montes-alpha-special-cuvee-pinot-noir-750ml">
                            MONTES APLHA SPECIAL CUVÉE PINOT NOIR
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}