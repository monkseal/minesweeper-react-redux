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
      boardSize: 9,
      mineLocations: ["5,5", "1,3", "2,2", "3,3", "1,8", "6,6", "7,7"]
    });
  }
});


const Container = connect(mapStateToProps, mapDispatchToProps)(GameMenu);
export { Container as default, mapStateToProps };
