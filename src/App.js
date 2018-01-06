import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import minesweeperReducer from "./reducers/minesweeperReducer";
import Minesweeper from "./components/Minesweeper";
import { RESET_BOARD } from "./actions/boardActions";

const initAction = {
  type: RESET_BOARD,
  level: "BEGINNER"
};

const App = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    minesweeperReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.dispatch(initAction);
  /* eslint-enable */
  return (
    <Provider store={store}>
      <Minesweeper />
    </Provider>
  );
};


export default App;
