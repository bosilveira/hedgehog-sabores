
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './BA-icone.png'
import Bookmark from './BA-bookmark.png'
import Prato from './BA-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaBA() {
    return (
        <>
            <Box className={"receita-header"}>
                <img className={"receita-prato"} src={Prato} alt={"Acarajé - Bahia"}/>
                <img className={"receita-bookmark"} src={Bookmark} alt={"Bahia - Nordeste"}/>
                <Voltar url="/nordeste"/>
            </Box>

            <Box className={"receita-titulo nordeste"}>
                <Typography variant="h1">
                    Bahia
                </Typography>
                <Typography variant="h2">
                    Acarajé
                </Typography>
            </Box>

            <Box className={"ingredientes nordeste"}>
                <img src={Icone} alt={""}/>
                <Typography variant="h3">
                    Ingredientes
                </Typography>
                <Typography variant="body1">
                    01kg de feijão fradinho quebrado
                </Typography>
                <Typography variant="body1">
                    300g de cebola
                </Typography>
                <Typography variant="body1">
                    01 colher de chá de gengibre ralado
                </Typography>
                <Typography variant="body1">
                    01 dente de alho
                </Typography>
                <Typography variant="body1">
                    01 colher de sobremesa de sal
                </Typography>
                <Typography variant="body1">
                    01L de dendê para fritar
                </Typography>
            </Box>

            <Box className={"preparo-top nordeste"}>
                <Typography variant="h3">
                    Modo de Preparo
                </Typography>
            </Box>

            <Box className={"preparo-body-center"}>

                <Typography variant="body1">
                    Em uma bacia, coloque o feijão e lave algumas vezes. Deixe de molho por 3 horas.
                    Bata no liquidificador até formar uma pasta. Na hora de fritar, bata novamente com uma colher de pau até a massa ficar bem fofinha.
                    Esquente o dendê e com uma colher de arroz, faça pequenos bolinhos.
                    Frite-os no dendê.
                </Typography>
                <Typography variant="body1">
                    Sirva com camarão e vinagrete.
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
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-casalforte-pinot-grigio-750ml">
                        CASALFORTE PINOT GRIGIO
                    </Link>
                </Box>
                <Box className={"vinho"}>
                    <Typography variant="body1">
                        Vinho Tinto:
                    </Typography>
                    <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-escorihuela-pequenas-producciones-syrah-750ml">
                        PEQUEÑAS PRODUCCIONES SYRAH
                    </Link>
                </Box>
                <Chip label="Você só encontra aqui!" component="p"/>
            </Box>
        </>
    )
}