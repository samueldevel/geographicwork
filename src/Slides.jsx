import {
  FlexBox,
  Heading,
  Text,
  Slide,
  Image,
  Box,
  FullScreen,
} from 'spectacle';
import regiaoHidrografica from './assets/regiao_hidrográfica_amazônica.jpeg';
import relevoImage from './assets/relevo_image.jpeg';
import relevoTwoImage from './assets/relevo2_image.jpeg';
import vegetacao from './assets/vegetacao.jpeg';
import solo from './assets/solo.jpeg';
import clima from './assets/clima.jpeg';

export function HydrographySlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={45} color="primary">
        Hidrografia
      </Heading>

      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <div className="fix-boxdiv">
            <Text fontSize={25}>
              Por ser a maior bacia hidrográfica do Brasil e do mundo, a{' '}
              <b>Bacia Amazônica</b> possui grande importância ambiental uma vez
              que detém uma das maiores quantidades de água doce do planeta
            </Text>
            <Text fontSize={25}>
              A <b>Bacia Amazônica</b>, em conjunto com a Bacia do{' '}
              <b>Tocantins-Araguaia </b>, forma o mais complexo sistema de água
              doce do mundo.
            </Text>
          </div>
        </Box>

        <Image
          className="image"
          size="40%"
          height="70vh"
          src={regiaoHidrografica}
        />
      </FlexBox>
    </Slide>
  );
}

export function ReliefSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={50} color="primary">
        Relevo
      </Heading>
      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <div className="fix-boxdiv">
            <Text fontSize={25}>
              Na Amazônia são encontradas três principais formas de relevo:
              planícies, representadas pelas áreas inundadas pelos rios;
              planaltos, representados pelas regiões de serras; e depressões,
              como a região das depressões norte e sul amazônicas.
            </Text>
            <div id="relevo-two">
              <Image
                className="image"
                size="70%"
                height="30vh"
                src={relevoTwoImage}
              />
            </div>
          </div>
        </Box>

        <Image className="image" size="50%" height="100%" src={relevoImage} />
      </FlexBox>
    </Slide>
  );
}

export function VegetationSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={50} color="primary">
        Vegetação
      </Heading>
      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <Text fontSize={22}>
            <b>matas de igapó:</b> encontram-se em regiões de rios de planície e
            em áreas inundadas de forma permanente, com solos alagados.
          </Text>

          <Text fontSize={22}>
            <b>matas de várzea:</b> são as que se localizam nas proximidades de
            rios e ocupam áreas que são eventualmente alagadas.
          </Text>

          <Text fontSize={22}>
            <b>matas de terra firme:</b> como o nome sugere, são as árvores que
            ocupam áreas onde não há inundações fluviais, apresentando um
            tamanho maior do que as demais e uma maior variabilidade.
          </Text>
        </Box>

        <Image className="image" size="50%" height="100%" src={vegetacao} />
      </FlexBox>
    </Slide>
  );
}

export function SoilSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={50} color="primary">
        Solo
      </Heading>
      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <Text fontSize={25}>
            Os solos amazônicos possuem uma restrita camada de matéria-orgânica
            que se encontra na superfície, conhecida como <b>húmus</b>. Essa
            fina camada fértil é oriunda da própria floresta, nela os organismos
            (insetos, fungos, algas e bactérias) vivos reciclam os nutrientes
            dispostos no ambiente
          </Text>
        </Box>

        <Image className="image" size="50%" height="100%" src={solo} />
      </FlexBox>
    </Slide>
  );
}

export function ClimateSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={50} color="primary">
        Clima
      </Heading>
      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <Text fontSize={25}>
            O clima do domínio amazônico é do tipo <b>equatorial</b>, sendo
            bastante quente e úmido tendo uma variação muito pequena de
            temperatura e com regimes altos de chuvas
          </Text>
        </Box>

        <Image className="image" size="50%" height="100%" src={clima} />
      </FlexBox>
    </Slide>
  );
}
