import { RESET_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";
import defaultStore from "./defaultStore";
import * as BoardHelpers from "./BoardHelpers";
import Levels, { mineLocationsFor } from "./Levels";

const LEVELS = Levels();

const minesweeperReducer = (state = defaultStore, action = { type: "" }) => {
  switch (action.type) {
    case RESET_BOARD: {
      // get level
      // get random mines for that level
      const { boardSize } = LEVELS[action.level];
      const mineLocations = mineLocationsFor(action.level);
      const board = BoardHelpers.resetBoard(boardSize, mineLocations);
      return {
        ...state, board
      };
    }

    case OPEN_CELL: {
      const board = BoardHelpers.open(state.board, action.id);
      return { ...state, board };
    }

    case TOGGLE_CELL_FLAG: {
      const board = BoardHelpers.toggleFlag(state.board, action.id);
      return { ...state, board };
    }

    default:
      return state;
  }
};

export default minesweeperReducer;
