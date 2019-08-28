/* eslint-disable max-len */
import { defaultCell } from "./defaultStore";
import Levels from "./Levels";

const LEVELS = Levels();
const SEPARATOR = ",";

const parseCoordinates = (id) => {
  const coords = id.split(SEPARATOR);
  const row = Number(coords[0]);
  const col = Number(coords[1]);
  return { row, col };
};

const forBoardSize = (boardSize, callback) => {
  for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
      const coordinate = [row, col].join(SEPARATOR);
      callback(coordinate, row, col);
    }
  }
};

const currentGameLevelId = (board) => {
  const boardSize = Math.sqrt((Object.keys(board).length));
  return Object.keys(LEVELS).find((id) => (
    LEVELS[id].boardSize === boardSize
  ));
};

const forSurroundCells = (coordinate, callback) => {
  const p = parseCoordinates(coordinate);

  for (let x = p.row - 1; x <= p.row + 1; x++) {
    for (let y = p.col - 1; y <= p.col + 1; y++) {
      if (x >= 0 || y >= 0) {
        const surroundCoord = [x, y].join(SEPARATOR);
        callback(surroundCoord, x, y);
      }
    }
  }
};

const open = (board, id) => {
  if (board[id].isOpen || board[id].hasFlag) { return board; }

  const cell = { ...board[id], isOpen: true };
  const newBoard = { ...board, [id]: cell };
  if (cell.count === 0 && !cell.hasMine) {
    /* eslint-disable no-use-before-define */
    return openAround(newBoard, id);
    /* eslint-enable */
  }
  return newBoard;
};

const toggleFlag = (board, id) => {
  if (board[id].isOpen) {
    return board;
  }
  const cell = { ...board[id], hasFlag: !board[id].hasFlag };
  const newBoard = { ...board, [id]: cell };
  return newBoard;
};

const openAround = (board, id) => {
  let newBoard = { ...board };

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

const resetBoard = (boardSize, mineLocations) => {
  const board = emptyBoard(boardSize);

  mineLocations.forEach((coordinate) => {
    board[coordinate].hasMine = true;
  });

  forBoardSize(boardSize, (coordinate) => {
    if (!board[coordinate].hasMine) {
      forSurroundCells(coordinate, (mineCheckCoord) => {
        if (board[mineCheckCoord] && board[mineCheckCoord].hasMine) {
          board[coordinate].count += 1;
        }
      });
    }
  });
  return board;
};

const hasLost = (board) => Object.values(board).some((cell) => cell.hasMine && cell.isOpen);
const hasWon = (board) => {
  if (hasLost(board)) { return false; }

  const nonOpenCount = Object.values(board).filter((cell) => !cell.isOpen).length;
  const flaggedMineCount = Object.values(board).filter((cell) => cell.hasMine && cell.hasFlag).length;
  return nonOpenCount === flaggedMineCount;
};
const notPlaying = (board) => {
  const openAndFlagged = Object.values(board).filter((cell) => (cell.hasFlag || cell.isOpen)).length;
  return openAndFlagged === 0;
};
const flagCount = (board) => Object.values(board).filter((cell) => cell.hasFlag).length;

export {
  currentGameLevelId, emptyBoard, flagCount,
  forBoardSize, forSurroundCells, hasLost, notPlaying,
  hasWon, open, resetBoard, toggleFlag
};
