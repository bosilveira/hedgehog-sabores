import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './AM-icone.png'
import Bookmark from './AM-bookmark.png'
import Prato from './AM-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaAM() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Caldo de Tambaqui - Amazonas"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Amazonas - Norte"}/>
                    <Voltar url="/norte"/>
                </Box>
                <Box className={"receita-titulo norte"}>
                    <Typography variant="h1">
                        Amazonas
                    </Typography>
                    <Typography variant="h2">
                        Caldo de Tambaqui
                    </Typography>
                </Box>

                <Box className={"ingredientes norte"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">1kg de tambaqui</Typography>
                    <Typography variant="body1">03 tomates sem sementes cortados em 4 partes</Typography>
                    <Typography variant="body1">03 cebolas cortadas igual ao tomate</Typography>
                    <Typography variant="body1">15 pimentas-de-cheiro sem sementes</Typography>
                    <Typography variant="body1">e cortadas no meio (se preferir)</Typography>
                    <Typography variant="body1">01 maço de cheiro verde picado</Typography>
                    <Typography variant="body1">01 maço de cebolinhas picado</Typography>
                    <Typography variant="body1">Colorau a gosto</Typography>
                    <Typography variant="body1">Azeite de oliva a gosto</Typography>
                    <Typography variant="body1">01 colher de sobremesa de vinagre</Typography>
                    <Typography variant="body1">Sal a gosto</Typography>
                    <Typography variant="body1">Limão para o preparo do peixe</Typography>
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
                    <Typography variant="body1">No dia anterior, lave bem o peixe com água fria. Coloque-o em um refratário banhando-o com o caldo do limão e sal. Leve à geladeira.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">No momento em que for preparar, passe o peixe apenas uma vez em água corrente para tirar o excesso do limão.</Typography>
                    <Typography variant="body1">Em uma panela grande coloque o peixe, tomate, cebola, pimenta-de-cheiro e parte do coentro e cebolinha.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Coloque água o suficiente para cobrir o peixe. Acrescente o azeite a gosto, 01 colher de sobremesa de vinagre e o colorau.</Typography>
                    <Typography variant="body1">Vá salgando aos poucos, pois durante a fervura o sal que está no peixe vai soltando no caldo. Ferva por aproximadamente 20 minutos.</Typography>
                    <Typography variant="body1">Apague o fogo e coloque o resto do coentro e da cebolinha. Sirva a seguir.</Typography>
                </Box>

                <Box className={"preparo-bottom sudeste"}/>


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