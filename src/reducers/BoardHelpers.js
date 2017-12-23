import { defaultCell } from "./defaultStore";


const emptyBoard = (boardSize) => {
  const board = {};
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const coordinate = `${row},${col}`;
      board[coordinate] = { ...defaultCell };
    }
  }
  return board;
};

export { emptyBoard };
