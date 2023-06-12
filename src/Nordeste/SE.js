
import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './SE-icone.png'
import Bookmark from './SE-bookmark.png'
import Prato from './SE-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaSE() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Moqueca de Camarão - Sergipe"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Sergipe - Nordeste"}/>
                    <Voltar url="/nordeste"/>
                </Box>
                <Box className={"receita-titulo nordeste"}>
                    <Typography variant="h1">
                        Sergipe
                    </Typography>
                    <Typography variant="h2">
                        Moqueca de Camarão
                    </Typography>
                </Box>

                <Box className={"receita-titulo nordeste"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">½ kg de camarão médio</Typography>
                    <Typography variant="body1">½ xícara de café de azeite de dendê</Typography>
                    <Typography variant="body1">01 vidro de leite de coco</Typography>
                    <Typography variant="body1">02 cebolas médias cortadas em rodelas</Typography>
                    <Typography variant="body1">01 limão</Typography>
                    <Typography variant="body1">½  xícara de chá de coentro</Typography>
                    <Typography variant="body1">½ xícara de chá de salsinha picada</Typography>
                    <Typography variant="body1">Cebolinha verde cortada a gosto</Typography>
                    <Typography variant="body1">03 tomates cortados em rodelas</Typography>
                    <Typography variant="body1">Sal a gosto</Typography>
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
                        Limpe os camarões e tempere com sal e o suco de limão.
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
                        Refogue todos os temperos por cerca 15 minutos no azeite-de-dendê, exceto a cebolinha.
                    </Typography>
                    <Typography variant="body1">
                        Acrescente os camarões e cozinhe por 5 minutos com a panela tampada.
                        Por último, adicione o leite de coco e a cebolinha.
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
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-montes-alpha-special-cuvee-chardonnay-750ml">
                            MONTES ALPHA SPECIAL CUVÉE CHARDONNAY
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}