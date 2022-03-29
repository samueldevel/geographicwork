import {
  FlexBox,
  Text,
  Heading,
  Slide,
  Image,
  Box,
  FullScreen,
} from 'spectacle';
import regiaoHidrografica from './assets/regiao_hidrográfica_amazônica.jpeg';
import relevoImage from './assets/relevo_image.jpeg';
import relevoTwoImage from './assets/relevo2_image.jpeg';

export function FirstSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={45} color="primary">
        Hidrografia
      </Heading>

      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <Text></Text>
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

export function SecondSlide() {
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
                size="90%"
                height="30vh"
                src={relevoTwoImage}
              />
            </div>
          </div>
        </Box>

        <Image className="image" size="40%" height="70vh" src={relevoImage} />
      </FlexBox>
    </Slide>
  );
}
