import { Deck } from 'spectacle';
import {
  ClimateSlide,
  HydrographySlide,
  ReliefSlide,
  SoilSlide,
  VegetationSlide,
} from './Slides.jsx';

function App() {
  return (
    <Deck>
      <ReliefSlide />
      <VegetationSlide />
      <HydrographySlide />
      <SoilSlide />
      <ClimateSlide />
    </Deck>
  );
}

export default App;
