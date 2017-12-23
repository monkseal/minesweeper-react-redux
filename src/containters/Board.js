import Board from "../components/Board"

mapStateToProps = (state) => state;

const Container = connect(mapStateToProps)(Board)
export default Container;
