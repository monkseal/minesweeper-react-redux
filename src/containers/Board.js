import { connect } from "react-redux";
import * as BoardHelpers from "../reducers/BoardHelpers";
import Board from "../components/Board";

const mapStateToProps = ({ board }) => {
  const boardDim = Math.sqrt(Object.keys(board).length);
  const table = [];
  BoardHelpers.forBoardSize(boardDim, (coordinate, row, col) => {
    if (!table[row]) { table[row] = []; }
    table[row][col] = board[coordinate];
  });
  return { table, activeLevel: BoardHelpers.currentGameLevelId(board) };
};

const Container = connect(mapStateToProps)(Board);
export { Container as default, mapStateToProps };
