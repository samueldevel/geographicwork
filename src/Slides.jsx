import {
  FlexBox,
  Text,
  Heading,
  Slide,
  Image,
  Box,
  FullScreen,
} from 'spectacle';
import index from './assets/odominiomorfoclimaticoamazonico-cke.webp';
import vegetacao from './assets/vegetacao-da-regiao-norte-do-brasil-3.webp';

export function FirstSlide() {
  return (
    <Slide>
      <FullScreen className="fullscreen" />
      <Heading fontSize={45} color="primary">
        Domínio Morfoclimático da Amazônia
      </Heading>

      <FlexBox justifyContent="space-between">
        <Box className="text-box">
          <Text color="secondary">Introdução</Text>
          <Text fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <b>exercitation ullamco</b> laboris
            nisi ut reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in aliquip ex ea commodo consequat. Duis aute irure
            dolor in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text fontSize={18}>
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. <b> Excepteur</b> sint occaecat cupidatat non proident,
            sunt in aliquip ex ea commodo consequat. Duis aute irure dolor in
          </Text>
        </Box>

        <Image className="image" size="40%" height="70vh" src={index} />
      </FlexBox>
    </Slide>
  );
}

export function SecondSlide() {
  return (
    <Slide>
      <Heading fontSize={45} color="secondary">
        Vegetação
      </Heading>

      <FlexBox>
        <Image className="image" size="40%" height="50vh" src={vegetacao} />
        <Box className="text-box">
          <Text className="text-box" fontSize={20}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <b className="mark-bold">tempor incididunt ut</b> labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat <b>nulla pariatur</b>. Excepteur sint
            mollit anim id est laborum. occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt
          </Text>
          <Text fontSize={18}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </Box>
      </FlexBox>

      <Text fontSize={19}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{' '}
        a <b>nulla pariatur</b> liqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat <b>nulla pariatur</b>. Excepteur sint mollit anim id
        est laborum. occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt
      </Text>
    </Slide>
  );
}
