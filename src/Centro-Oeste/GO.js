import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './GO-icone.png'
import Bookmark from './GO-bookmark.png'
import Prato from './GO-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaGO() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Arroz com Pequi - Goiás"} />
                    <img className={"receita-bookmark"} src={Bookmark} alt={""}/>
                    <Voltar url="/centro-oeste"/>
                </Box>
                <Box className={"receita-titulo centro-oeste"} >
                    <Typography variant="h1">
                        Goiás
                    </Typography>
                    <Typography variant="h2">
                        Arroz com Pequi
                    </Typography>
                </Box>

                <Box className={"ingredientes centro-oeste"} >
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography>¼ de xícara de chá de óleo ou banha de porco</Typography>
                    <Typography>½ litro de pequi lavado</Typography>
                    <Typography>02 dentes de alho espremidos</Typography>
                    <Typography>01 cebola grande picada</Typography>
                    <Typography>02 xícaras de chá de arroz</Typography>
                    <Typography>04 xícaras de chá de água quente</Typography>
                    <Typography>sal a gosto</Typography>
                    <Typography>pimenta-de-cheiro ou malagueta a gosto</Typography>
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
                    <Typography variant="body1">Coloque o pequi no óleo ou gordura fria (se for usar o fruto inteiro não precisa cortar, mas tenha cuidado com o caroço).</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Acrescente alho e cebola e deixe refogar em fogo baixo. Mexa sempre com uma colher de pau para não grudar na panela. De vez em quando, respingue um pouco de água.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Quando o pequi estiver macio e a água tiver secado, acrescente o arroz e deixe fritar um pouco. Junte a água restante e o sal.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">Quando o arroz estiver quase no ponto, coloque a pimenta-de-cheiro ou a malagueta a gosto.</Typography>
                    <Typography variant="body1">No momento em que for servir, polvilhe o arroz com salsa, cebolinha e mais um pouco de pimenta.</Typography>
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-branco-royal-palmeira-750ml">
                            ROYAL PALMEIRA
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p" />
                </Box>

            </Container>
        </>
    );
}