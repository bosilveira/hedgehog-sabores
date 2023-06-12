import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";

import "../styles.css";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './RR-icone.png'
import Bookmark from './RR-bookmark.png'
import Prato from './RR-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaRR() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Caldeirada - Roraima"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Roraima - Norte"}/>
                    <Voltar url="/norte"/>
                </Box>
                <Box className={"receita-titulo norte"}>
                    <Typography variant="h1">
                        Roraima
                    </Typography>
                    <Typography variant="h2">
                        Caldeirada
                    </Typography>
                </Box>

                <Box className={"ingredientes norte"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">02 peixes - Tambaqui ou tucunaré</Typography>
                    <Typography variant="body1">01 litro de leite de coco</Typography>
                    <Typography variant="body1">01 sachê de molho de tomate</Typography>
                    <Typography variant="body1">02 cebolas médias</Typography>
                    <Typography variant="body1">02 tomates médios</Typography>
                    <Typography variant="body1">Sal a gosto</Typography>
                    <Typography variant="body1">Pimenta-do-reino</Typography>
                    <Typography variant="body1">01 pimentão verde</Typography>
                    <Typography variant="body1">Ovos (quantos desejar)</Typography>
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
                    <Typography variant="body1">Corte o peixe em postas, do tamanho que desejar. Tempere com sal e pimenta do reino e deixe reservado.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Em uma panela funda, adicione óleo, cebola, tomate e pimentão. Deixe refogar até a cebola dourar.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Adicione o molho de tomate e o peixe. Deixe ferver por 5 minutos.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">Acrescente o leite de coco e deixe ferver até o peixe ficar macio.</Typography>
                    <Typography variant="body1">Por fim, coloque os ovos já cozidos e inteiros.</Typography>
                </Box>

                <Box className={"preparo-bottom norte"}/>

                <Box className={"harmonizacao norte"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Vinho Branco:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-bourgogne-aligote-joseph-drouhin-750ml">
                            BOURGOGNE ALIGOTÉ JOSEPH DROUHIN
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}