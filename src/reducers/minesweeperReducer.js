import { RESET_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";
import defaultStore from "./defaultStore";
import * as BoardHelpers from "./BoardHelpers";

const minesweeperReducer = (state = defaultStore, action = { type: "" }) => {
  switch (action.type) {
    case RESET_BOARD: {
      const board = BoardHelpers.resetBoard(action.boardSize, action.mineLocations);
      return {
        // check the beginner, expert, etc and figure out the board
        // create random mine location for that board size
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
