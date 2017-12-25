import { emptyBoard, hasLost, hasWon } from "./BoardHelpers";

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
  ...boardFixture,
  "0,0": {
    hasMine: true, hasFlag: false, isOpen: true
  }
};

const playing1BoardFixture = {
  ...boardFixture,
  "1,0": {
    hasMine: false, hasFlag: false, isOpen: true
  }
};

const playing2BoardFixture = {
  ...boardFixture,
  "1,0": {
    hasMine: true, hasFlag: true, isOpen: false
  }
};

const playing3BoardFixture = {
  ...boardFixture,
  "1,1": {
    hasMine: false, hasFlag: true, isOpen: false
  }
};

const wonBoardFixture = {
  "0,0": { // mine
    hasMine: true, hasFlag: true, isOpen: false
  },
  "0,1": { // open
    hasMine: false, hasFlag: false, isOpen: true
  },
  "1,0": { // mine
    hasMine: true, hasFlag: true, isOpen: false
  },
  "1,1": { // open
    hasMine: false, hasFlag: false, isOpen: true
  }
};

describe("hasLost", () => {
  it("returns false when you haven't lost", () => {
    expect(hasLost(boardFixture)).toBeFalsy();
  });

  it("returns true when you lose", () => {
    expect(hasLost(lostBoardFixture)).toBeTruthy();
  });

  it("returns false when still playing", () => {
    expect(hasLost(playing1BoardFixture)).toBeFalsy();
    expect(hasLost(playing2BoardFixture)).toBeFalsy();
    expect(hasLost(playing3BoardFixture)).toBeFalsy();
  });
});

describe("hasWon", () => {
  it("returns false when you haven't won", () => {
    expect(hasWon(boardFixture)).toBeFalsy();
  });

  it("returns false when you lose", () => {
    expect(hasWon(lostBoardFixture)).toBeFalsy();
  });

  it("returns true when you win", () => {
    expect(hasWon(wonBoardFixture)).toBeTruthy();
  });

  it("returns false when still playing", () => {
    expect(hasWon(playing1BoardFixture)).toBeFalsy();
    expect(hasWon(playing2BoardFixture)).toBeFalsy();
    expect(hasWon(playing3BoardFixture)).toBeFalsy();
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
