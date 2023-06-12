import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RO-icone.png'
import Bookmark from './RO-bookmark.png'
import Prato from './RO-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaRO() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Doce de Buriti - Rondônia"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Rondônia - Norte"}/>
                <Voltar url="/norte"/>
            </Box>

            <Box className={"receita-titulo norte"}>
                <Typography variant="h1">
                    Rondônia
                </Typography>
                <Typography variant="h2">
                    Doce de Buriti
                </Typography>
            </Box>

            <Box className={"ingredientes norte"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    01 prato de buriti fresco
                </Typography>
                <Typography variant="body1">
                    01 prato de açúcar
                </Typography>
            </Box>

            <Box className={"preparo-top norte"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-center"}>

                <Typography variant="body1">
                    Leve os ingredientes ao fogo e mexa sem parar.
                    Não precisa colocar água.
                    Quando estiver desgrudando do fundo da panela com uma coloração escura, já é hora de desligar.
                    Espalhe em um tabuleiro e corte em pedaços.
                </Typography>
                <Typography variant="body1">
                    Sirva frio.
                </Typography>
            </Box>

            <Box className={"preparo-bottom norte"}/>

            <Box className={"harmonizacao norte"}>
                <Typography variant="h3">
                    Harmonização
                </Typography>
                <img src={Vinho} alt={""}/>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Licoroso:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-alambre-moscatel-de-setubal-750ml">
                        MOSCATEL DE SETUBAL ALHAMBRE
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Licoroso:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-porto-graham-s-fine-tawny-750ml">
                        GRAHAM'S FINE PORT TAWNY
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}