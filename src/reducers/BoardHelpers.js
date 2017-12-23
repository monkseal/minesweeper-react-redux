import { defaultCell } from "./defaultStore";

const forBoardSize = (boardSize, callback) => {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const coordinate = `${row},${col}`;
      callback(coordinate, row, col);
    }
  }
};

const emptyBoard = (boardSize) => {
  const board = {};
  forBoardSize(boardSize, (coordinate) => {
    board[coordinate] = { ...defaultCell, id: coordinate };
  })
  return board;
};

export { emptyBoard, forBoardSize };
