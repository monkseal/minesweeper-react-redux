import { connect } from "react-redux";
import { OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";
import Cell from "../components/Cell";

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = (dispatch) => ({
  onOpen: (id) => {
    dispatch({ type: OPEN_CELL, id });
  },

  onFlagToggle: (id) => {
    dispatch({ type: TOGGLE_CELL_FLAG, id });
  }
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Cell);
export { Container as default, mapStateToProps };
