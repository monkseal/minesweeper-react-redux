import { connect } from "react-redux";
import GameMenu from "../components/GameMenu";
import * as BoardHelpers from "../reducers/BoardHelpers";

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


const Container = connect(mapStateToProps)(GameMenu);
export { Container as default, mapStateToProps };
