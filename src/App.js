import "./App.css";

import { useReducer, useState } from "react";

const ACTIONS = {
  START: "start",
  STOP: "stop",
  GEAR_UP: "gear-up",
  GEAR_DOWN: "gear-down",
  SPEED_UP: "speed+",
  SPEED_DOWN: "speed-",
};

const initialState = {
  start: false,
  gear: 0,
  speed: 0,
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case ACTIONS.START:
      const randomNum = Math.random();

      console.log(randomNum);

      if (randomNum < 0.5) {
        alert("enginge failed");
        return prevState;
      }

      return { ...prevState, start: true };

    case ACTIONS.STOP:
      return { ...prevState, start: false };

    case ACTIONS.GEAR_UP:
      if (prevState.start && prevState.gear < 5) {
        return { ...prevState, gear: prevState.gear + 1 };
      }
      return prevState;

    default:
      return prevState;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h2>Engine: {state.start ? "On" : "Off"} </h2>
      <h3>Gear: {state.gear} </h3>
      <h3>Speed: {state.speed} </h3>

      <button onClick={() => dispatch({ type: ACTIONS.START })}> start </button>

      <button onClick={() => dispatch({ type: ACTIONS.STOP })}> stop </button>
      <button onClick={() => dispatch({ type: ACTIONS.GEAR_UP})}>
        gear up
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.GEAR_DOWN })}>
        gear down
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.SPEED_UP })}>
        speed+
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.SPEED_DOWN })}>
        speed-
      </button>
    </div>
  );
}

export default App;
