
import Cell from "../components/Cell";
import { connect } from "react-redux";
import { OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";

const mapStateToProps = (state, ownProps) => ownProps;

const mapDispatchToProps = (dispatch) => {
  return {
    onOpen: (id) => {
      dispatch({ type: OPEN_CELL, id: id });
    },
    
    onFlagToggle: (id) => {
      dispatch({ type: TOGGLE_CELL_FLAG, id: id });
    }
  };
}


const Container = connect(mapStateToProps, mapDispatchToProps)(Cell);
export { Container as default, mapStateToProps } ;
