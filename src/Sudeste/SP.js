import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './SP-icone.png'
import Bookmark from './SP-bookmark.png'
import Prato from './SP-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaSP() {

    return (
    <>
    <Container maxWidth="md" className={"receita"}>
        <Box className={"receita-header"}>
            <img className={"receita-prato"} src={Prato} alt={"Virado à Paulista - São Paulo"}/>
            <img className={"receita-bookmark"} src={Bookmark} alt={"São Paulo - Sudeste"}/>
            <Voltar url="/sudeste"/>
        </Box>
        <Box className={"receita-titulo sudeste"}>
            <Typography variant="h1">
                São Paulo
            </Typography>
            <Typography variant="h2">
                Virado à Paulista
            </Typography>
        </Box>

        <Box className={"ingredientes sudeste"}>
            <img src={Icone} alt={""}/>
            <Typography variant="h3">
                Ingredientes
            </Typography>
            <Typography variant="body1">01 maço de couve com folhas cortadas finas</Typography>
            <Typography variant="body1">01 dente de alho</Typography>
            <Typography variant="body1">300g de bacon </Typography>
            <Typography variant="body1">200g de torresmo</Typography>
            <Typography variant="body1">04 ovos</Typography>
            <Typography variant="body1">250g feijão carioca</Typography>
            <Typography variant="body1">03 copos de arroz frito </Typography>
            <Typography variant="body1">(de preferência feito com banha)</Typography>
            <Typography variant="body1">04 linguiças</Typography>
            <Typography variant="body1">04 bistecas de porco </Typography>
            <Typography variant="body1">Farinha de milho</Typography>
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
            <Typography variant="body1">Cozinhe o feijão na panela de pressão com louro e a pele do bacon cortada em tirinhas. Após cozido o feijão, tempere com alho e cebola fritos.</Typography>
            <Typography variant="body1">Reserve.</Typography>
        </Box>
    
        <Box className={"preparo-body-right"}>
            <Typography variant="body1">
                02.
            </Typography>
            <Typography variant="body1">Corte o bacon em cubos e frite, refogando o alho e a couve nele.</Typography>
            <Typography variant="body1">Reserve.</Typography>
        </Box>
    
        <Box className={"preparo-body-left"}>
            <Typography variant="body1">
                03.
            </Typography>
            <Typography variant="body1">Frite separadamente os ovos, a linguiça, as bistecas e o torresmo.</Typography>
            <Typography variant="body1">Reserve.</Typography>
            <Typography variant="body1">Adicione um pouco da farinha de milho ao feijão para fazer o virado. </Typography>
        </Box>
    
        <Box className={"preparo-body-right"}>
            <Typography variant="body1">
                04.
            </Typography>
            <Typography variant="body1">No prato, sirva uma porção de arroz com uma porção do virado e adicione linguiça, torresmo, uma bisteca e um ovo.</Typography>
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
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-d-v-catena-chardonnay-chardonnay-750ml">
                    D.V. CATENA CHARDONNAY-CHARDONNAY
                </Link>
            </Box>
            <Box className={"vinho"}>
                <Typography variant="body1">
                    Vinho Tinto:
                </Typography>
                <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-altos-las-hormigas-reserva-malbec-750ml">
                    ALTOS DE LAS HORMIGAS MALBEC RESERVE
                </Link>
            </Box>
            <Chip label="Você só encontra aqui!" component="p"/>
        </Box>

    </Container>
    </>
    );
}