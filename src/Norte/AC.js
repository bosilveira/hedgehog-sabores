import '@fontsource-variable/inter';
import "@fontsource/abril-fatface";
import "@fontsource/cookie";
import "../styles.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import Icone from './AC-icone.png'
import Bookmark from './AC-bookmark.png'
import Prato from './AC-prato.jpg'

import Vinho from '../vinho.png'
import Voltar from "../Voltar";

export default function ReceitaAC() {

    return (
        <>
            <Container maxWidth="md" className={"receita"}>
                <Box className={"receita-header"}>
                    <img className={"receita-prato"} src={Prato} alt={"Bolo de Pupunha - Acre"}/>
                    <img className={"receita-bookmark"} src={Bookmark} alt={"Acre - Norte"}/>
                    <Voltar url="/norte"/>
                </Box>
                <Box className={"receita-titulo norte"}>
                    <Typography variant="h1">
                        Acre
                    </Typography>
                    <Typography variant="h2">
                        Bolo de Pupunha
                    </Typography>
                </Box>

                <Box className={"ingredientes norte"}>
                    <img src={Icone} alt={""}/>
                    <Typography variant="h3">
                        Ingredientes
                    </Typography>
                    <Typography variant="body1">02 xícaras de pupunha cozida passada</Typography>
                    <Typography variant="body1">no processador ou em uma peneira</Typography>
                    <Typography variant="body1">08 colheres de farinha de trigo sem fermento</Typography>
                    <Typography variant="body1">02 xícaras de leite de coco ou leite comum</Typography>
                    <Typography variant="body1">01 colher (sopa) de fermento</Typography>
                    <Typography variant="body1">250g de manteiga</Typography>
                    <Typography variant="body1">06 ovos</Typography>
                    <Typography variant="body1">02 xícaras de açúcar</Typography>
                    <Typography variant="body1">&nbsp;</Typography>
                    <Typography variant="body1">Calda:</Typography>
                    <Typography variant="body1">½ xícara de água</Typography>
                    <Typography variant="body1">01 xícara de açúcar</Typography>
                    <Typography variant="body1">03 colheres (sopa) pupunha ralada</Typography>
                    <Typography variant="body1">Cravinhos a gosto</Typography>
                    <Typography variant="body1">&nbsp;</Typography>
                    <Typography variant="body1">Crocantes de castanha do Brasil:</Typography>
                    <Typography variant="body1">04 colheres de sopa de castanha moída</Typography>
                    <Typography variant="body1">02 colheres de açúcar</Typography>
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
                    <Typography variant="body1">Coloque na batedeira o açúcar com a margarina e bata até ficar fofinho. Quando a massa estiver bem branquinha, acrescente os ovos inteiros e bata mais um pouco.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        02.
                    </Typography>
                    <Typography variant="body1">Misture o trigo e mexa manualmente, acrescente a pupunha e continue mexendo manualmente.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        03.
                    </Typography>
                    <Typography variant="body1">Coloque o leite de coco e, por último, o fermento. Uma dica, não bata muito após colocar o fermento.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        04.
                    </Typography>
                    <Typography variant="body1">Despeje uma forma untada e leve ao forno preaquecido a 180ºC por 40 minutos ou 1 hora.</Typography>
                </Box>

                <Box className={"preparo-body-left"}>
                    <Typography variant="body1">
                        05.
                    </Typography>
                    <Typography variant="body1">Calda:</Typography>
                    <Typography variant="body1">Coloque ½ xícara de água e 1 xícara de açúcar na panela. Mexa rápido e ferva por pouco tempo. A coloração precisa estar meio caramelizada. Após ferver, coloque a pupunha e mexa até criar uma consistência.</Typography>
                </Box>

                <Box className={"preparo-body-right"}>
                    <Typography variant="body1">
                        06.
                    </Typography>
                    <Typography variant="body1">Crocante:</Typography>
                    <Typography variant="body1">Misture a castanha moída com o açúcar e leve ao fogo até ficar com a cor de caramelo. Deixe esfriar para usar.</Typography>
                    <Typography variant="body1">Finalização do bolo:</Typography>
                    <Typography variant="body1">Desenforme em um refratário. Molhe a calda e salpique com o crocante e as lâminas de castanha.</Typography>
                </Box>

                <Box className={"preparo-bottom norte"}/>

                <Box className={"harmonizacao norte"}>
                    <Typography variant="h3">
                        Harmonização
                    </Typography>
                    <img src={Vinho} alt={""}/>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Licoroso:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-casa-silva-late-harvest-semillon-gewurztraminer-375ml-5261">
                            CASA SILVA LATE HARVEST
                        </Link>
                    </Box>
                    <Box className={"vinho"}>
                        <Typography variant="body1">
                            Licoroso:
                        </Typography>
                        <Link color="#242424" href="https://www.bancadoramon.com.br/vinho-porto-taylor-s-branco-fine-750ml">
                            TAYLOR'S FINE WHITE PORT
                        </Link>
                    </Box>
                    <Chip label="Você só encontra aqui!" component="p"/>
                </Box>

            </Container>
        </>
    );
}