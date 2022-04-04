import { Deck } from 'spectacle';
import {
  ApresentationSlide,
  ClimateSlide,
  HydrographySlide,
  ReliefSlide,
  SoilSlide,
  VegetationSlide,
} from './Slides.jsx';

function App() {
  return (
    <Deck>
      <ApresentationSlide />
      <ReliefSlide />
      <VegetationSlide />
      <HydrographySlide />
      <SoilSlide />
      <ClimateSlide />
    </Deck>
  );
}

export default App;
