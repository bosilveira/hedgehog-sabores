import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './ES-icone.png'
import Bookmark from './ES-bookmark.png'
import Prato from './ES-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaES() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Moqueca Capixaba - Espírito Santo"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Espírito Santo - Sudeste"}/>
                <Voltar url="/sudeste"/>
            </Box>

            <Box className={"receita-titulo sudeste"}>
                <Typography variant="h1">
                    Espírito Santo
                </Typography>
                <Typography variant="h2">
                    Moqueca Capixaba
                </Typography>
            </Box>

            <Box className={"ingredientes sudeste"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    01kg de peixe de sua preferência em postas
                </Typography>
                <Typography variant="body1">
                    (badejo, cação, dentão, robalo,
                </Typography>
                <Typography variant="body1">
                    papaterra, dourado ou namorado)
                </Typography>
                <Typography variant="body1">
                    01 maço de coentro picado
                </Typography>
                <Typography variant="body1">
                    01 maço de cebolinha verde picado
                </Typography>
                <Typography variant="body1">
                    01 cebola picada
                </Typography>
                <Typography variant="body1">
                    03 dentes de alho
                </Typography>
                <Typography variant="body1">
                    04 tomates
                </Typography>
                <Typography variant="body1">
                    01 limão
                </Typography>
                <Typography variant="body1">
                    Urucum e sal a gosto
                </Typography>
                <Typography variant="body1">
                    ½ xícara de azeite de oliva
                </Typography>
                <Typography variant="body1">
                    Óleo de soja
                </Typography>
            </Box>

            <Box className={"preparo-top sudeste"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    01.
                </Typography>
                <Typography variant="body1">
                    Tempere as postas com sal e limão e deixe marinar por 30 minutos.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    02.
                </Typography>
                <Typography variant="body1">
                    Em uma panela de barro, fora do fogo, monte a receita:
                    coloque metade do azeite, espalhe o alho, metade da cebola e do tomate e uma pitada de sal.
                </Typography>
                <Typography variant="body1">
                    Acomode o peixe sobre a primeira camada.
                    Por cima, espalhe o restante da cebola e do tomate e adicione mais uma pitada de sal.
                    Leve ao fogo alto.
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    03.
                </Typography>
                <Typography variant="body1">
                    Após 20 minutos, leve ao fogo uma frigideira com o restante do azeite para dissolver o urucum.
                    Com a mistura, regue sobre a moqueca e deixe cozinhar por mais 30 minutos.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    04.
                </Typography>
                <Typography variant="body1">
                    Ao desligar o fogo, finalize com coentro por cima.
                    Sirva enquanto ainda estiver fervendo.
                </Typography>
            </Box>

            <Box className={"preparo-bottom sudeste"}/>

            <Box className={"harmonizacao sudeste"}>
                <Typography variant="h3">
                    Harmonização
                </Typography>
                <img src={Vinho} alt={""}/>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Branco:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-chablis-domaine-hamelin-750ml">
                        CHABLIS DOMAINE HAMELIN
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}