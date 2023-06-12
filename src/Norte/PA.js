import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PA-icone.png'
import Bookmark from './PA-bookmark.png'
import Prato from './PA-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaPA() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Pato no Tucupi - Pará"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Pará - Norte"}/>
                <Voltar url="/norte"/>
            </Box>

            <Box className={"receita-titulo norte"}>
                <Typography variant="h1">
                    Pará
                </Typography>
                <Typography variant="h2">
                    Pato no Tucupi
                </Typography>
            </Box>

            <Box className={"ingredientes norte"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    01 pato inteiro
                </Typography>
                <Typography variant="body1">
                    (aproximadamente 3kg)
                </Typography>
                <Typography variant="body1">
                    05 maços de jambú
                </Typography>
                <Typography variant="body1">
                    03 litros de tucupi
                </Typography>
                <Typography variant="body1">
                    02 cebolas picadas
                </Typography>
                <Typography variant="body1">
                    10 dentes de alho
                </Typography>
                <Typography variant="body1">
                    01 maço de chicória
                </Typography>
                <Typography variant="body1">
                    02 tomates
                </Typography>
                <Typography variant="body1">
                    02 limões
                </Typography>
                <Typography variant="body1">
                    Sal e pimenta-do-reino a gosto
                </Typography>
                <Typography variant="body1">
                    01 colher (sopa) de manteiga
                </Typography>
                <Typography variant="body1">
                    02 colheres (sopa) de azeite
                </Typography>
                <Typography variant="body1">
                    Pimenta-de-cheiro a gosto
                </Typography>
            </Box>

            <Box className={"preparo-top norte"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    01.
                </Typography>
                <Typography variant="body1">
                    O pato precisa começar a ser preparado na véspera. Deixe-o em água corrente por cerca de 5 minutos.
                    Depois, lave-o com as folhas de chicória e limão. Após, coloque o pato com 3 dentes de alho amassado, sal, pimenta-de-cheiro em um refratário. Cubra com papel alumínio e leve à geladeira.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    02.
                </Typography>
                <Typography variant="body1">
                    No dia do preparo, corte o pato em pedaços, aqueça uma panela com manteiga e azeite, acrescente 4 dentes de alho amassados, cebola e tomate picados.
                    Refogue bem até que a cebola comece a dourar e adicione os pedaços de pato para selar.
                </Typography>
            </Box>

            <Box className={"preparo-body-left"}>
                <Typography variant="body1">
                    03.
                </Typography>
                <Typography variant="body1">
                    Despeje o pato refogado em uma assadeira e leve ao forno, preaquecido, a 200ºC por aproximadamente 1 hora.
                </Typography>
                <Typography variant="body1">
                    Enquanto isso, coloque o Tucupi para ferver com sal, 3 dentes de alho e a chicória.
                </Typography>
                <Typography variant="body1">
                    Reserve.
                </Typography>
            </Box>

            <Box className={"preparo-body-right"}>
                <Typography variant="body1">
                    04.
                </Typography>
                <Typography variant="body1">
                    Lave o jambu em água fria por alguns minutos. Remova as flores e ferva com água e sal até que tenha amolecido. Escorra a água e coloque o jambu dentro da panela com o tucupi quente. Acrescente a pimenta-de-cheiro levemente amassada.
                </Typography>
                <Typography variant="body1">
                    Quando o pato estiver macio, coloque-o dentro da panela com o tucupi e ferva novamente.
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
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-macon-les-genievres-louis-latour-750ml">
                        MÂCON-LUGNY LOUIS LATOUR
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Branco:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-tinto-l-avvocata-barbera-d-asti-750ml">
                        BARBERA D'ASTI L'AVVOCATA
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}