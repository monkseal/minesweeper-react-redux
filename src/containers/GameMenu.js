import { connect } from "react-redux";
import GameMenu from "../components/GameMenu";
import * as BoardHelpers from "../reducers/BoardHelpers";
import { RESET_BOARD } from "../actions/boardActions";

const mapStateToProps = ({ board }) => {
  if (BoardHelpers.hasWon(board)) {
    return {
      smiley: "winner"
    };
  } else if (BoardHelpers.hasLost(board)) {
    return {
      smiley: "loser"
    };
  }

  return {
    smiley: "playing"
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => {
    dispatch({
      type: RESET_BOARD,
      level: "BEGINNER"
    });
  }
});


const Container = connect(mapStateToProps, mapDispatchToProps)(GameMenu);
export { Container as default, mapStateToProps };