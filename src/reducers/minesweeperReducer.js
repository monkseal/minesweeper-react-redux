import { INIT_BOARD } from "../actions/boardActions";
import defaultStore from "./defaultStore";
import * as BoardHelpers from "./BoardHelpers";

const minesweeperReducer = (state = defaultStore, action = { type: "" }) => {
  switch (action.type) {
    case INIT_BOARD: {
      const boardSize = action.size;
      const board = BoardHelpers.emptyBoard(boardSize);
      action.mineLocations.forEach((coordinate) => {
        board[coordinate].hasMine = true;
      });

      BoardHelpers.forBoardSize(boardSize, (coordinate, row, col) => {
        if (!board[coordinate].hasMine) {
          for (let x = row - 1; x <= row + 1; x++) {
            for (let y = col - 1; y <= col + 1; y++) {
              const mineCheckCoord = `${x},${y}`;
              if (board[mineCheckCoord] && board[mineCheckCoord].hasMine) {
                board[coordinate].count += 1;
              }
            }
          }
        }
      });

      return {
        ...state,
        board
      };
    }
    default:
      return state;
  }
};

export default minesweeperReducer;
