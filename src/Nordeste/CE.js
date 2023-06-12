
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './CE-icone.png'
import Bookmark from './CE-bookmark.png'
import Prato from './CE-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaCE() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Sarrabulho - Ceará"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Ceará - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"}>
                    <Typography variant="h1">
                        Ceará
                    </Typography>
                    <Typography variant="h2">
                        Sarrabulho
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">½ de fígado de frango</Typography>
                    <Typography variant="body1">250g de coração de frango</Typography>
                    <Typography variant="body1">02 cubos de caldo de galinha</Typography>
                    <Typography variant="body1">Sal, pimenta-de-cheiro picadinha</Typography>
                    <Typography variant="body1">01 cebola picada</Typography>
                    <Typography variant="body1">01 colher rasa de colorau</Typography>
                    <Typography variant="body1">Farinha de mandioca</Typography>
                    <Typography variant="body1">Pimentão picado</Typography>
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
                        Tempere as carnes com alho, sal e pimenta-do-reino.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">
                        Cozinhe o coração na pressão por 15 minutos, acrescente o fígado e deixe cozinhar por mais 5 minutos com o caldo de galinha.
                    </Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">
                        Faça um refogado com óleo e colorau e despeje os miúdos já cozidos e picados. Junte a cebola.
                    </Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">
                        Engrosse com farinha de mandioca para que fique um pirão meio mole.
                    </Typography>
                    <Typography variant="body1">
                        Acrescente o cheiro verde, pimenta de cheiro e pimentão picados.
                        Sirva com arroz branco.
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-casa-silva-reserva-viognier-750ml">
                            CASA SILVA VIOGNIER
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-coyam-750ml">
                            COYAM
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}