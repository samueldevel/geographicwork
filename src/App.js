import { Checkbox } from "@mui/material";
import {
  BookmarkBorderIcon,
  BookmarkIcon,
  ThumbDownOffAlt,
  ThumbDownAlt,
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
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
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
