import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MG-icone.png'
import Bookmark from './MG-bookmark.png'
import Prato from './MG-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaMG() {

    return (
    <>
    <Container maxWidth="md" className={"receita"}>
        <Box className={"receita-header"}>
            <img className={"receita-prato"} src={Prato} alt={"Frango com Quiabo - Minas Gerais"} />
            <img className={"receita-bookmark"} src={Bookmark} alt={"Minas Gerais - Sudeste"}/>
            <Voltar url="/sudeste"/>
        </Box>
        <Box className={"receita-titulo sudeste"} >
            <Typography variant="h1">
                Minas Gerais
            </Typography>
            <Typography variant="h2">
                Frango com Quiabo
            </Typography>
        </Box>

        <Box className={"ingredientes sudeste"} >
            <img src={Icone} alt={""}/>
            <Typography variant="h3">
                Ingredientes
            </Typography>
            <Typography>
                01kg de frango, limpo e cortado a passarinho
            </Typography>
            <Typography>
                400g de quiabo picado
            </Typography>
            <Typography>
                02 colheres de sopa de óleo
            </Typography>
            <Typography>
                01 cebola ralada
            </Typography>
            <Typography>
                02 dentes de alho amassados
            </Typography>
            <Typography>
                Sal, pimenta do reino e cheiro verde a gosto
            </Typography>
        </Box>

        <Box className={"preparo-top sudeste"} >
            <Typography variant="h3">
                Modo de Preparo
            </Typography>
        </Box>

        <Box className={"preparo-body-left"}>
            <Typography variant="body1">
                01.
            </Typography>
            <Typography variant="body1">
                Em uma panela, coloque óleo e frite o frango aos poucos.
            </Typography>
            <Typography variant="body1">
                Reserve.
            </Typography>
        </Box>

        <Box className={"preparo-body-right"}>
            <Typography variant="body1">
                02.
            </Typography>
            <Typography variant="body1">
                Na mesma panela, coloque alho, cebola, pimenta, sal e refogue o quiabo.
                Deixe dourar mexendo de vez em quando.
            </Typography>
        </Box>

        <Box className={"preparo-body-left"}>
            <Typography variant="body1">
                03.
            </Typography>
            <Typography variant="body1">
                Depois, junte o frango e deixe cozinhar com a panela tampada até ambos ficarem macios.
            </Typography>
        </Box>

        <Box className={"preparo-body-right"}>
            <Typography variant="body1">
                04.
            </Typography>
            <Typography variant="body1">
                Se quiser, adicione uma xícara de chá de água para formar um leve caldo para servir com o prato.
            </Typography>
        </Box>

        <Box className={"preparo-bottom sudeste"}/>

        <Box className={"harmonizacao sudeste"} >
            <Typography variant="h3">
                Harmonização
            </Typography>
            <img src={Vinho} alt={""}/>
            <Box className={"vinho"}>
                <Typography variant="body1">
                    Vinho Tinto:
                </Typography>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-luca-laborde-double-select-syrah-750ml">
                    LUCA SYRAH
                </Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}