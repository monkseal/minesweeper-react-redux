import { defaultCell } from "./defaultStore";

const forBoardSize = (boardSize, callback) => {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const coordinate = `${row},${col}`;
      callback(coordinate, row, col);
    }
  }
};

const forSurroundCells = (coordinate, callback) => {
  const coords = coordinate.split(",")
  const row = coords[0];
  const col = coords[1];
  for (let x = row - 1; x <= row + 1; x++) {
    for (let y = col - 1; y <= col + 1; y++) {
       if (x > 0 || y > 0) {
        const coordinate = `${x},${y}`;
        callback(coordinate, x, y);
      }
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

export { emptyBoard, forBoardSize, forSurroundCells };
