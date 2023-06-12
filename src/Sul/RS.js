import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RS-icone.png'
import Bookmark from './RS-bookmark.png'
import Prato from './RS-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaRS() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Churrasco - Rio Grande do Sul"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Rio Grande do Sul - Sul"}/>
                <Voltar url="/sul"/>
            </Box>

            <Box className={"receita-titulo sul"}>
                <Typography variant="h1">
                    Rio Grande do Sul
                </Typography>
                <Typography variant="h2">
                    Churrasco
                </Typography>
            </Box>

            <Box className={"ingredientes sul"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    Carne bovina de sua preferência
                </Typography>
                <Typography variant="body1">
                    (costela, picanha, maminha, etc)
                </Typography>
                <Typography variant="body1">
                    Sal grosso à vontade
                </Typography>
            </Box>

            <Box className={"preparo-top sul"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-center"}>
                <Typography variant="body1">
                    Posicione os pedaços de carne num espeto.
                </Typography>
                <Typography variant="body1">
                    Passe o sal e coloque a uma distância de 25 cm da chama.
                </Typography>
                <Typography variant="body1">
                    O ponto tradicional da carne é mal passado, com o exterior apenas chamuscado.
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
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-villa-antinori-toscana-branco-750ml">
                        VILLA ANTINORI TOSCANA BRANCO
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-el-enemigo-syrah-viognier-750ml">
                        EL ENEMIGO SYRAH-VIOGNIER
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}