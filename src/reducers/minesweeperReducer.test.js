import minesweeperReducer from "./minesweeperReducer";

it("defines a board", () => {
  expect(minesweeperReducer().board).toBeDefined();
});
