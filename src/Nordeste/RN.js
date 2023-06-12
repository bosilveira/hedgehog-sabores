
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RN-icone.png'
import Bookmark from './RN-bookmark.png'
import Prato from './RN-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaRN() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Sarapatel - Rio Grande do Norte"} />
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Rio Grande do Norte - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"} >
                    <Typography variant="h1">
                        Rio Grande do Norte
                    </Typography>
                    <Typography variant="h2">
                        Arroz de Leite
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography>01 xícara de arroz da terra ou arroz branco</Typography>
                    <Typography>Leite em quantidade suficiente</Typography>
                    <Typography>01 cebola picada</Typography>
                    <Typography>02 dentes de alho picados</Typography>
                    <Typography>Azeite</Typography>
                    <Typography>Sal</Typography>
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
                        Em uma panela, refogue a cebola e o alho no azeite.
                        Acrescente o arroz e refogue um pouco mais.
                    </Typography>
                    <Typography variant="body1">
                        Em seguida, coloque água suficiente para cobrir o arroz e deixe cozinhar aos poucos.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">
                        Em uma panela, coloque todos os temperos para refogar.
                        Depois, acrescente o sarapatel, até que ele fique levemente dourado, e o pimentão.
                        Adicione cerca de dois litros de água, coloque a tampa da panela e deixe cozinhar até reduzir a água.
                    </Typography>
                    <Typography variant="body1">
                        Deixe secar e, quando o arroz estiver quase cozido, acrescente aos poucos o leite até o arroz terminar seu cozimento.
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-valle-de-passos-branco-750ml">
                            VALLE DE PASSOS
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p" />
                </Box>

            </Container>
        </>
    );
}