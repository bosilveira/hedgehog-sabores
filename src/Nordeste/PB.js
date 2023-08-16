
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
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
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Rubacão - Paraíba"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Paraíba - Nordeste"}/>
                <Voltar url="/nordeste"/>
            </Box>

            <Box className={"receita-titulo nordeste"}>
                <Typography variant="h1">
                    Paraíba
                </Typography>
                <Typography variant="h2">
                    Rubacão
                </Typography>
            </Box>

            <Box className={"ingredientes nordeste"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    300g de carne de sol ou charque
                </Typography>
                <Typography variant="body1">
                    250g de feijão verde ou feijão fradinho
                </Typography>
                <Typography variant="body1">
                    250g de arroz
                </Typography>
                <Typography variant="body1">
                    120g de linguiça calabresa
                </Typography>
                <Typography variant="body1">
                    100g de bacon
                </Typography>
                <Typography variant="body1">
                    150g de queijo coalho
                </Typography>
                <Typography variant="body1">
                    200ml de creme de leite
                </Typography>
                <Typography variant="body1">
                    200g de queijo coalho em cubos
                </Typography>
                <Typography variant="body1">
                    900 ml de água
                </Typography>
                <Typography variant="body1">
                    3 dentes de alho
                </Typography>
                <Typography variant="body1">
                    1 cebola
                </Typography>
                <Typography variant="body1">
                    Coentro, sal e pimenta do reino a gosto
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
                    No dia anterior ao preparo, coloque de molho o charque e o feijão em tigelas diferentes, trocando a água de vez em quando.
                    A carne de sol não precisa ser dessalgada.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    02.
                </Typography>
                <Typography variant="body1">
                    Em uma panela grande, doure o bacon, acrescente o alho, a cebola e deixe refogar.
                    Acrescente a carne de sol ou o charque e a calabresa e refogue mais uns minutos.
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    03.
                </Typography>
                <Typography variant="body1">
                    Junte o arroz, o feijão, o sal e os temperos, misturando bem.
                    Acrescente a água e deixe cozinhar.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    04.
                </Typography>
                <Typography variant="body1">
                    Quando o arroz estiver cozido, antes que toda a água seque, coloque o creme de leite, o queijo coalho e o coentro.
                    O resultado fica bem cremoso!
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    05.
                </Typography>
                <Typography variant="body1">
                    Você pode reservar um pouco do bacon e da calabresa refogadas para servir por cima do arroz.
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
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-tapada-do-chaves-branco-750ml">
                        TAPADA DO CHAVES BRANCO
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}