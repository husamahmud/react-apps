import { Button, ButtonGroup } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import FormGroup from "@mui/material/FormGroup";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center font-sans">
      <p className="text-4xl font-bold p-10 mb-10">Counter 🔥</p>
      <div className="w-96 bg-[#eeeeee] p-4 rounded-lg flex flex-col justify-center items-center gap-5">
        <p className="text-8xl w-full py-[10rem] bg-gradient-to-r from-[#1565c0] to-[#787ff6] rounded-lg">
          {count}
        </p>
        <ButtonGroup
          className="m-4"
          disableElevation
          size="large"
          variant="contained"
          aria-label=" elevation buttons"
        >
          <Button onClick={() => setCount(0)}>
            <RefreshIcon />
          </Button>
          <Button onClick={() => setCount(count + 5)}>+5</Button>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(count - 1)}>-</Button>
        </ButtonGroup>
        <FormGroup />
      </div>
    </div>
  );
};

export default App;
