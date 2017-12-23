import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import minesweeperReducer from "./reducers/minesweeperReducer";
import Minesweeper from "./components/Minesweeper";

const App = () => {
  const store = createStore(minesweeperReducer);
  return (
    <Provider store={store}>
      <Minesweeper />
    </Provider>
  );
  //
};


export default App;
