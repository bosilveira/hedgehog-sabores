import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './PR-icone.png'
import Bookmark from './PR-bookmark.png'
import Prato from './PR-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaPR() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"}  src={Prato} alt={"Paçoca de Pinhão - Paraná"}/>
                    <img className={"receita-bookmark"} alt={"Paraná - Sul"}/>
                    <Voltar url="/sul"/>
                </Box>
                <Box className={"receita-titulo sul"}>
                    <Typography variant="h1">
                        Paraná
                    </Typography>
                    <Typography variant="h2">
                        Paçoca de Pinhão
                    </Typography>
                </Box>

                <Box className={"ingredientes sul"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">
                        01kg de pinhão
                    </Typography>
                    <Typography variant="body1">
                        500g de carne moída
                    </Typography>
                    <Typography variant="body1">
                        200g de bacon
                    </Typography>
                    <Typography variant="body1">
                        200g de calabresa
                    </Typography>
                    <Typography variant="body1">
                        01 dente de alho picado
                    </Typography>
                    <Typography variant="body1">
                        ½ cebola picada
                    </Typography>
                    <Typography variant="body1">
                        Sal e cheiro verde a gosto
                    </Typography>
                </Box>

                <Box className={"preparo-top sul"}>
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        01.
                    </Typography>
                    <Typography variant="body1">
                        Cubra o pinhão com água e cozinhe em uma panela de pressão.
                        Depois, descasque e triture em um liquidificador.
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
                        Em uma panela, frite o alho e a cebola e refogue a carne moída com um pouco de sal.
                    </Typography>
                    <Typography variant="body1">
                        Reserve.
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">
                        Na frigideira, frite o bacon e a calabresa.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">
                        Misture tudo em uma panela, começando pela carne moída, a farofa do pinhão, o bacon e a calabresa.
                    </Typography>
                    <Typography variant="body1">
                        Mexa bem e deixe aquecer antes de servir.
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
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-chateau-ste-michelle-cabernet-sauvignon-750ml">
                            CHATEAU STE MICHILLE CABERNET SAUVIGNON
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}