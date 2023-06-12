import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RJ-icone.png'
import Bookmark from './RJ-bookmark.png'
import Prato from './RJ-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaRJ() {

    return (
    <>
    <Container maxWidth="md" className={"receita"}>
        <Box className={"receita-header"}>
            <img className={"receita-prato"} src={Prato} alt={"Feijoada - Rio de Janeiro"}/>
            <img className={"receita-bookmark"} src={Bookmark} alt={"Rio de Janeiro - Sudeste"}/>
            <Voltar url="/sudeste"/>
        </Box>
        <Box className={"receita-titulo sudeste"} >
            <Typography variant="h1">
                Rio de Janeiro
            </Typography>
            <Typography variant="h2">
                Feijoada
            </Typography>
        </Box>

        <Box className={"ingredientes sudeste"} >
            <img src={Icone} alt={""}/>
            <Typography variant="h3">
                Ingredientes
            </Typography>
            <Typography>01kg de feijão preto</Typography>
            <Typography>100g de carne seca</Typography>
            <Typography>70g de orelha de porco</Typography>
            <Typography>70g de rabo de porco</Typography>
            <Typography>70g de pé de porco</Typography>
            <Typography>100g de costelinha de porco</Typography>
            <Typography>50g de lombo de porco</Typography>
            <Typography>100g de paio</Typography>
            <Typography>150g de linguiça </Typography>
            <Typography>02 cebolas picadas </Typography>
            <Typography>01 maço de cebolinha verde picado</Typography>
            <Typography>03 folhas de louro</Typography>
            <Typography>06 dentes de alho</Typography>
            <Typography>Sal e pimenta do reino a gosto</Typography>
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
                Deixe as carnes salgadas de molho por cerca de 48 horas, trocando periodicamente a água.
                Após esse tempo, em uma panela, coloque-as para cozinhar.
                Quando elas estiverem quase prontas, adicione as carnes moles, como a linguiça.
            </Typography>
        </Box>
    
        <Box className={"preparo-body-right"}>
            <Typography variant="body1">
                02.
            </Typography>
            <Typography variant="body1">
                Na sequência, retire as carnes da panela e coloque o feijão para cozinhar, aproveitando a mesma água.
            </Typography>
            <Typography variant="body1">
                Use os temperos para o feijão, deixando o cheiro verde por último.
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
                    Vinho Branco:
                </Typography>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-garzon-reserva-albarino">
                    GARZON ALBARIÑO RESERVA
                </Link>
            </Box>
            <Box className={"vinho"}>
                <Typography variant="body1">
                    Vinho Tinto:
                </Typography>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-louis-latour-beaujolais-villages-750ml">
                    BEAUJOLAIS VILLAGE LOUIS LATOUR
                </Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p" />
        </Box>

    </Container>
    </>
    );
}