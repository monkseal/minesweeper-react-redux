import { INIT_BOARD } from "../actions/boardActions";
import minesweeperReducer, { emptyBoard } from "./minesweeperReducer";
import defaultStore from "./defaultStore";

it("defines a board", () => {
  expect(minesweeperReducer().board).toBeDefined();
});



describe("INIT_BOARD", () => {
  const action = {
    type: INIT_BOARD,
    size: 3,
    mineLocations: ["1,1", "2,2"]
  };
  let newState;

  beforeEach(() => {
    newState = minesweeperReducer(defaultStore, action);
  });

  it("sets the correct true hasMine values for the board", () => {
    expect(newState.board["1,1"].hasMine).toEqual(true);
    expect(newState.board["2,2"].hasMine).toEqual(true);
  });

  it("sets the correct false hasMine values for the board", () => {
    expect(newState.board["0,0"].hasMine).toEqual(false);
    expect(newState.board["0,1"].hasMine).toEqual(false);
    expect(newState.board["0,2"].hasMine).toEqual(false);
    expect(newState.board["1,0"].hasMine).toEqual(false);
    expect(newState.board["1,2"].hasMine).toEqual(false);
    expect(newState.board["2,0"].hasMine).toEqual(false);
    expect(newState.board["2,1"].hasMine).toEqual(false);
  });

  it("sets the count values for neighbor cells", () => {
    expect(newState.board["0,0"].count).toEqual(1);
    expect(newState.board["0,1"].count).toEqual(1);
    expect(newState.board["0,2"].count).toEqual(1);
    expect(newState.board["1,0"].count).toEqual(1);
    expect(newState.board["1,2"].count).toEqual(2);
    expect(newState.board["2,0"].count).toEqual(1);
    expect(newState.board["2,1"].count).toEqual(2);
  });
});
