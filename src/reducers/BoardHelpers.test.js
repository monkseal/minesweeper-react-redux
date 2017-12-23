import { emptyBoard } from "./BoardHelpers";

describe("emptyBoard()", () => {
  it("builds an object with 9x9 81 keys", () => {
    expect(Object.keys(emptyBoard(9))).toHaveLength(81);
    expect(emptyBoard(9)["3,3"]).toBeDefined();
    expect(emptyBoard(9)["18,18"]).not.toBeDefined();
  });

  it("sets the properties of each cell", () => {
    expect(Object.keys(emptyBoard(9)["3,3"])).toEqual(["hasMine", "hasFlag", "isOpen", "count"]);
  });
});
