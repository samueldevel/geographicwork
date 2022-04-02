import { Deck } from 'spectacle';
import {
  FirstSlideHydrography,
  SecondSlideRelief,
  WellcomeSlide,
} from './Slides.jsx';

function App() {
  return (
    <Deck>
      <WellcomeSlide />
      <FirstSlideHydrography />
      <SecondSlideRelief />
    </Deck>
  );
}

export default App;
