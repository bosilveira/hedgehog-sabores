
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PE-icone.png'
import Bookmark from './PE-bookmark.png'
import Prato from './PE-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaPE() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Sarapatel - Pernambuco"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Pernambuco - Nordeste"}/>
                <Voltar url="/nordeste"/>
            </Box>

            <Box className={"receita-titulo nordeste"}>
                <Typography variant="h1">
                    Pernambuco
                </Typography>
                <Typography variant="h2">
                    Sarapatel
                </Typography>
            </Box>

            <Box className={"receita-titulo nordeste"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    ½ kg de sarapatel fresco em cubos
                </Typography>
                <Typography variant="body1">
                    01 cebola picada
                </Typography>
                <Typography variant="body1">
                    01 pimentão
                </Typography>
                <Typography variant="body1">
                    01 tomate sem pele e sem sementes picado
                </Typography>
                <Typography variant="body1">
                    04 dentes de alho amassados
                </Typography>
                <Typography variant="body1">
                    01 maço de coentro
                </Typography>
                <Typography variant="body1">
                    02 folhas de louro
                </Typography>
                <Typography variant="body1">
                    01 colher de sopa de cominho
                </Typography>
                <Typography variant="body1">
                    01 colher de sopa de colorau
                </Typography>
                <Typography variant="body1">
                    01 limão
                </Typography>
                <Typography variant="body1">
                    Azeite
                </Typography>
                <Typography variant="body1">
                    Sal e pimenta a gosto
                </Typography>
            </Box>

            <Box className={"preparo-top nordeste"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    01.
                </Typography>
                <Typography variant="body1">
                    Cubra e deixe o sarapatel de molho com água e o suco do limão por 15 minutos.
                    Depois lave com água corrente.
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
                    Finalize acrescentando o coentro.
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
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-conversa-branco-750ml">
                        CONVERSA BRANCO (NIERPORT)
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-due-lune-cellaro-igt-750ml">
                        DUE LUNE (NERO D'AVOLA + NERELLO MASCALESE)
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}