import { INIT_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";
import defaultStore from "./defaultStore";
import * as BoardHelpers from "./BoardHelpers";

const minesweeperReducer = (state = defaultStore, action = { type: "" }) => {
  switch (action.type) {
    case INIT_BOARD: {
      const board = BoardHelpers.emptyBoard(action.boardSize);
      action.mineLocations.forEach((coordinate) => {
        board[coordinate].hasMine = true;
      });

      BoardHelpers.forBoardSize(action.boardSize, (coordinate) => {
        if (!board[coordinate].hasMine) {
          BoardHelpers.forSurroundCells(coordinate, (mineCheckCoord) => {
            if (board[mineCheckCoord] && board[mineCheckCoord].hasMine) {
              board[coordinate].count += 1;
            }
          });
        }
      });

      return {
        ...state, board
      };
    }

    case OPEN_CELL: {
      const cell = { ...state.board[action.id], isOpen: true };
      const board = { ...state.board, [action.id]: cell };
      return { ...state, board };
    }

    case TOGGLE_CELL_FLAG: {
      const cell = { ...state.board[action.id], hasFlag: !state.board[action.id].hasFlag };
      const board = { ...state.board, [action.id]: cell };
      return { ...state, board };
    }

    default:
      return state;
  }
};

export default minesweeperReducer;
