
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PB-icone.png'
import Bookmark from './PB-bookmark.png'
import Prato from './PB-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaPB() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Rubacão - Paraíba"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Paraíba - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"} >
                    <Typography variant="h1">
                        Paraíba
                    </Typography>
                    <Typography variant="h2">
                        Rubacão
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography>250g de charque</Typography>
                    <Typography>01 xícara de chá de feijão fradinho</Typography>
                    <Typography>200g de bacon</Typography>
                    <Typography>01 linguiça calabresa</Typography>
                    <Typography>04 xícaras de chá de arroz branco</Typography>
                    <Typography>200g de queijo coalho em cubos</Typography>
                    <Typography>01 cebola picada</Typography>
                    <Typography>02 dentes de alho picados</Typography>
                    <Typography>01 folha de louro</Typography>
                    <Typography>Sal, pimenta dedo-de-moça e salsinha a gosto</Typography>
                </Box>

                <Box className={"preparo-top nordeste"} >
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">
                        Coloque de molho o charque e o feijão em tigelas distintas por 24 horas.
                        A água do charque deve ser trocada periodicamente.
                        No dia seguinte, cozinhe o feijão e o charque. Reserve.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">
                        Em uma panela, frite o bacon. Acrescente cebola e alho, refogue e cozinhe o arroz.
                        Junte o feijão, o charque e o louro e cubra com água.
                        Deixe cozinhar até secar.
                        Adicione o queijo coalho e tempere com sal, pimenta e salsinha.
                    </Typography>
                    <Typography variant="body1">
                        Finalize acrescentando o coentro.
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">
                        Em outra panela, cozinhe a calabresa cortada em rodelas.
                        Acrescente ao restante da receita e deixe cozinhar por mais alguns minutos antes de servir.
                    </Typography>
                </Box>

                <Box className={"preparo-bottom nordeste"}/>

                <Box className={"harmonizacao nordeste"} >
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-tapada-do-chaves-branco-750ml">
                            TAPADA DO CHAVES BRANCO
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p" />
                </Box>

            </Container>
        </>
    );
}