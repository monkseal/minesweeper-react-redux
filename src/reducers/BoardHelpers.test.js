import { emptyBoard, hasLost } from "./BoardHelpers";

const boardFixture = {
  "0,0": {
    hasMine: true, hasFlag: false, isOpen: false
  },
  "0,1": {
    hasMine: false, hasFlag: false, isOpen: false
  },
  "1,0": {
    hasMine: false, hasFlag: false, isOpen: false
  },
  "1,1": {
    hasMine: false, hasFlag: false, isOpen: false
  }
};

const lostBoardFixture = {
  ...boardFixture, "0,0": {
    hasMine: true, hasFlag: false, isOpen: true
  }
}


describe("hasLost", () => {
  it("returns false when you haven't lost", () => {
    expect(hasLost(boardFixture)).toBeFalsy();
  });

  it("returns true when you lose", () => {
    expect(hasLost(lostBoardFixture)).toBeTruthy();
  });
});

describe("emptyBoard()", () => {
  it("builds an object with 9x9 81 keys", () => {
    expect(Object.keys(emptyBoard(9))).toHaveLength(81);
    expect(emptyBoard(9)["3,3"]).toBeDefined();
    expect(emptyBoard(9)["3,3"].id).toEqual("3,3");

    expect(emptyBoard(9)["18,18"]).not.toBeDefined();
  });

  it("sets the properties of each cell", () => {
    expect(Object.keys(emptyBoard(9)["3,3"])).toEqual(["hasMine", "hasFlag", "isOpen", "count", "id"]);
  });
});
