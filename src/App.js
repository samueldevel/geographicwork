import { Box, Button, Checkbox, FormControlLabel } from "@mui/material";
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

  function onSubmitKissForm(e) {
    e.preventDefault();
    console.log(go);
  }

  return (
    <div>
      <h1>Bora dar uns Beijo?</h1>
      <form name="kiss-form" onSubmit={onSubmitKissForm}>
        <Box display="flex" alignItems="flex-start">
          <div>
            <FormControlLabel
              label={"Sim"}
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={go}
                  onChange={onChangeGo}
                />
              }
            />
            <FormControlLabel
              label={"Não"}
              control={
                <Checkbox
                  icon={<ThumbDownOffAlt />}
                  checkedIcon={<ThumbDownAlt />}
                  checked={!go}
                  onChange={onChangeNoGO}
                />
              }
            />
          </div>
          <Button type="submit">Enviar</Button>
        </Box>
      </form>
    </div>
  );
}

export default App;
