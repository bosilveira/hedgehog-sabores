
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './AL-icone.png'
import Bookmark from './AL-bookmark.png'
import Prato from './AL-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaAL() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Sururu de Capote - Alagoas"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Alagoas - Nordeste"}/>
                <Voltar url="/nordeste"/>
            </Box>

            <Box className={"receita-titulo nordeste"}>
                <Typography variant="h1">
                    Alagoas
                </Typography>
                <Typography variant="h2">
                    Sururu de Capote
                </Typography>
            </Box>

            <Box className={"ingredientes nordeste"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    03kg de Sururu
                </Typography>
                <Typography variant="body1">
                    03 tomates maduros picados
                </Typography>
                <Typography variant="body1">
                    02 cebolas picadas
                </Typography>
                <Typography variant="body1">
                    ½ pimentão picado
                </Typography>
                <Typography variant="body1">
                    01 colher de chá de colorau
                </Typography>
                <Typography variant="body1">
                    02 pimentas-de-cheiro picadas
                </Typography>
                <Typography variant="body1">
                    01 colher (sobremesa) de extrato de tomate
                </Typography>
                <Typography variant="body1">
                    02 caixas de leite de coco
                </Typography>
                <Typography variant="body1">
                    02 colheres (sopa) de coentro picado
                </Typography>
                <Typography variant="body1">
                    Sal e pimenta-do-reino a gosto
                </Typography>
            </Box>

            <Box className={"preparo-top nordeste"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-center"}>

                <Typography variant="body1">
                    Lave bem o sururu e tire as “tripinhas” existentes no marisco. Reserve.
                    Faça um refogado com todos os temperos e quando estiver bem cozido, acrescente o Sururu.
                    Cozinhe até que todas as cascas estejam abertas.
                </Typography>
            </Box>

            <Box className={"preparo-bottom nordeste"}/>

            <Box className={"harmonizacao nordeste"}>
                <Typography variant="h3">
                    Harmonização
                </Typography>
                <img src={Vinho} alt={""}/>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Branco:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/montes-outer-limits-sauvignon-blanc-750ml">
                        MONTES OUTER LIMITS SAUVIGNON BLANC
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-quinta-do-vallado-douro-reserva-doc-750ml">
                        VALLADO (QUINTA DO ORGAL)
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}