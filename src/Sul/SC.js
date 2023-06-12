import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './SC-icone.png'
import Bookmark from './SC-bookmark.png'
import Prato from './SC-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaSC() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Joelho de Porco - Santa Catarina"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Santa Catarina - Sul"}/>
                <Voltar url="/sul"/>
            </Box>

            <Box className={"receita-titulo sul"}>
                <Typography variant="h1">
                    Santa Catarina
                </Typography>
                <Typography variant="h2">
                    Joelho de Porco
                </Typography>
            </Box>

            <Box className={"ingredientes sul"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    02 joelhos de porco defumado ou natural
                </Typography>
                <Typography variant="body1">
                    04 batatas grandes
                </Typography>
                <Typography variant="body1">
                    04 salsichões brancos
                </Typography>
                <Typography variant="body1">
                    04 salsichões com alho
                </Typography>
                <Typography variant="body1">
                    300ml óleo de milho ou girassol ou canola
                </Typography>
                <Typography variant="body1">
                    250g de chucrute em lata
                </Typography>
                <Typography variant="body1">
                    20g de zimbro
                </Typography>
                <Typography variant="body1">
                    Mostarda a gosto
                </Typography>
            </Box>

            <Box className={"preparo-top sul"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    01.
                </Typography>
                <Typography variant="body1">
                    Coloque os joelhos em uma panela de pressão, cubra-os de água e cozinhe por aproximadamente 45 minutos ou até as carnes começarem a se soltar dos ossos.
                    Retire da água (reserve) e escorra-os.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    02.
                </Typography>
                <Typography variant="body1">
                    Na sequência, coloque as carnes num refratário e regue a pele com o óleo pré-aquecido bem quente para formar pururuca na casca.
                    Se necessário, repita o processo para que a pele fique crocante.
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    03.
                </Typography>
                <Typography variant="body1">
                    Na água em que ferveram os joelhos, cozinhe as batatas descascadas e as salsichas.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    04.
                </Typography>
                <Typography variant="body1">
                    Em uma panela, coloque o chucrute e adicione ½  copo de água e o zimbro.
                    Deixe ferver por 5 minutos.
                </Typography>
                <Typography variant="body1">
                    Para servir, arranje tudo em uma só travessa.
                </Typography>
            </Box>

            <Box className={"preparo-bottom sul"}/>

            <Box className={"harmonizacao sul"}>
                <Typography variant="h3">
                    Harmonização
                </Typography>
                <img src={Vinho} alt={""}/>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Branco:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-anselmann-riesling-trocken-750ml">
                        ANSELMANN RIESLING TROCKEN
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-poggio-badiola-750ml">
                        POGGIO BADIOLA (MAZZEI)
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}