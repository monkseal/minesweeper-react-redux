import { connect } from "react-redux";
import LevelMenu from "../components/LevelMenu";
import * as BoardHelpers from "../reducers/BoardHelpers";
import { RESET_BOARD } from "../actions/boardActions";

const mapStateToProps = (state, ownProps) => ownProps

const mapDispatchToProps = (dispatch) => ({
  changeLevel: (level) => {
    dispatch({
      type: RESET_BOARD,
      boardSize: 9,
      mineLocations: ["5,5", "1,3", "2,2", "3,3", "1,8", "6,6", "7,7"]
    });
  }
});

const Container = connect(mapStateToProps, mapDispatchToProps)(LevelMenu);
export { Container as default, mapStateToProps };
