
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './MA-icone.png'
import Bookmark from './MA-bookmark.png'
import Prato from './MA-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaMA() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Arroz de Cuxá - Maranhão"} />
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Maranhão - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"} >
                    <Typography variant="h1">
                        Maranhão
                    </Typography>
                    <Typography variant="h2">
                        Arroz de Cuxá
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography>Vinagreira (erva verde meio amarga)</Typography>
                    <Typography>01 tomate picado</Typography>
                    <Typography>01 cebola picada</Typography>
                    <Typography>01 Pimentão Picado</Typography>
                    <Typography>Pimenta-de-cheiro a gosto</Typography>
                    <Typography>150g de camarão seco</Typography>
                    <Typography>Gergelim a gosto</Typography>
                    <Typography>½ kg de arroz branco cozido</Typography>
                    <Typography>Azeite</Typography>
                </Box>

                <Box className={"preparo-top nordeste"} >
                    <Typography variant="h3">
                        Modo de Preparo
                    </Typography>
                </Box>
                <Box className={"preparo-body-center"}>

                    <Typography variant="body1">
                        Cozinhe a vinagreira até murchar.
                        Retire do fogo e escorra.
                        Refogue todos os temperos em azeite e coloque o camarão seco, gergelim e a vinagreira.
                        Mexa sempre para misturar bem os ingredientes.
                        Acrescente o arroz cozido.
                    </Typography>
                </Box>

                <Box className={"preparo-bottom nordeste"}/>

                <Box className={"harmonizacao nordeste"} >
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-branco-herdade-grande-reserva-750ml">
                            HERDADE GRANDE RESERVA
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Tinto:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/">
                            PÉPPOLI CHIANTI CLASSICO
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p" />
                </Box>

            </Container>
        </>
    );
}