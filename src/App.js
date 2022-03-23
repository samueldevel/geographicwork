import { Checkbox } from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ThumbDownAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [go, setGo] = useState(true);

  function onChangeGo() {
    setGo(true);
  }

  function onChangeNoGO() {
    setGo(false);
  }

  return (
    <div>
      <h1>Bora dar uns Beijo?</h1>
      <form>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          checked={go}
          onChange={onChangeGo}
        />
        <Checkbox
          icon={<ThumbDownOffAlt />}
          checkedIcon={<ThumbDownAlt />}
          checked={!go}
          onChange={onChangeNoGO}
        />
      </form>
    </div>
  );
}

export default App;
