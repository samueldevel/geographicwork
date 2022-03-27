import {
  FlexBox,
  Text,
  Deck,
  Heading,
  Slide,
  Image,
  Box,
  Progress,
  FullScreen,
} from 'spectacle';
import index from './assets/odominiomorfoclimaticoamazonico-cke.webp';

function App() {
  return (
    <Deck>
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
          <Image className="image" size="40%" height="70vh" src={index} />
        </FlexBox>

        <Progress />
      </Slide>
    </Deck>
  );
}

export default App;
