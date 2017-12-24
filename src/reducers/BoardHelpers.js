import { defaultCell } from "./defaultStore";

const SEPERATOR = ",";

const parseCoordinates = (id) => {
  const coords = id.split(SEPERATOR);
  const row = Number(coords[0]);
  const col = Number(coords[1]);
  return { row, col };
};

const forBoardSize = (boardSize, callback) => {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const coordinate = [row, col].join(SEPERATOR);

      callback(coordinate, row, col);
    }
  }
};

const forSurroundCells = (coordinate, callback) => {
  const p = parseCoordinates(coordinate);

  for (let x = p.row - 1; x <= p.row + 1; x++) {
    for (let y = p.col - 1; y <= p.col + 1; y++) {
      if (x >= 0 || y >= 0) {
        const surroundCoord = [x, y].join(SEPERATOR);
        callback(surroundCoord, x, y);
      }
    }
  }
};

const open = (board, id) => {
  if (board[id].isOpen) { return board; }

  const cell = { ...board[id], isOpen: true };
  const newBoard = { ...board, [id]: cell };
  if (cell.count === 0 && !cell.hasMine) {
    /* eslint-disable no-use-before-define */
    return openAround(newBoard, id);
    /* eslint-enable */
  }
  return newBoard;
};

const openAround = (board, id) => {
  let newBoard = Object.assign({}, board);

  forSurroundCells(id, (coordinate) => {
    if (newBoard[coordinate] && !newBoard[coordinate].hasMine && !newBoard[coordinate].isOpen) {
      newBoard = open(newBoard, coordinate);
    }
  });
  return newBoard;
};

const emptyBoard = (boardSize) => {
  const board = {};
  forBoardSize(boardSize, (coordinate) => {
    board[coordinate] = { ...defaultCell, id: coordinate };
  });
  return board;
};

export { emptyBoard, forBoardSize, forSurroundCells, open };
