import { Checkbox } from "@mui/material";
import {
  BookmarkBorderIcon,
  BookmarkIcon,
  ThumbDownOffAlt,
  ThumbDownAlt,
} from "@mui/icons-material";

function App() {
  return (
    <div>
      <h1>Bora dar uns Beijo?</h1>
      <form>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          name="check"
        />
        <Checkbox
          icon={<ThumbDownOffAlt />}
          checkedIcon={<ThumbDownAlt />}
          name="check"
        />
      </form>
    </div>
  );
}

export default App;
