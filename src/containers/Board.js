import Board from "../components/Board";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const boardDim = Math.sqrt(Object.keys(state.board).length);
  const table = [];
  for (let row = 0; row < boardDim; row++) {
    table[row] = [];
    for (let col = 0; col < boardDim; col++) {
      const coordinate = `${row},${col}`;
      table[row][col] = state.board[coordinate];
    }
  }
  return { table };
};

const Container = connect(mapStateToProps)(Board);
export default Container;
