import {
  emptyBoard, hasLost, hasWon, resetBoard, open, toggleFlag
} from "./BoardHelpers";

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

// import minesweeperReducer from "./minesweeperReducer";

describe("resetBoard", () => {
  let board;
  beforeEach(() => {
    const boardSize = 3;
    const mineLocations = ["1,1", "2,2"];
    board = resetBoard(boardSize, mineLocations);
  });

  it("sets the correct true hasMine values for the board", () => {
    expect(board["1,1"].hasMine).toEqual(true);
    expect(board["2,2"].hasMine).toEqual(true);
  });

  it("sets the correct false hasMine values for the board", () => {
    expect(board["0,0"].hasMine).toEqual(false);
    expect(board["0,1"].hasMine).toEqual(false);
    expect(board["0,2"].hasMine).toEqual(false);
    expect(board["1,0"].hasMine).toEqual(false);
    expect(board["1,2"].hasMine).toEqual(false);
    expect(board["2,0"].hasMine).toEqual(false);
    expect(board["2,1"].hasMine).toEqual(false);
  });

  it("sets the correct false isOpen values for the board", () => {
    expect(board["0,0"].isOpen).toEqual(false);
    expect(board["0,1"].isOpen).toEqual(false);
    expect(board["0,2"].isOpen).toEqual(false);
    expect(board["1,0"].isOpen).toEqual(false);
    expect(board["1,2"].isOpen).toEqual(false);
    expect(board["2,0"].isOpen).toEqual(false);
    expect(board["2,1"].isOpen).toEqual(false);
  });

  it("sets the count values for neighbor cells", () => {
    expect(board["0,0"].count).toEqual(1);
    expect(board["0,1"].count).toEqual(1);
    expect(board["0,2"].count).toEqual(1);
    expect(board["1,0"].count).toEqual(1);
    expect(board["1,2"].count).toEqual(2);
    expect(board["2,0"].count).toEqual(1);
    expect(board["2,1"].count).toEqual(2);
  });

  describe("when complex table", () => {
    beforeEach(() => {
      const boardSize = 9;
      const mineLocations = ["1,1", "2,2", "3,3", "1,8", "6,6", "7,7"];
      board = resetBoard(boardSize, mineLocations);
    });

    it("sets the count values for neighbor cells", () => {
      expect(board["0,0"].count).toEqual(1);
      expect(board["0,1"].count).toEqual(1);
      expect(board["0,2"].count).toEqual(1);
      expect(board["1,0"].count).toEqual(1);
      expect(board["1,2"].count).toEqual(2);
      expect(board["2,0"].count).toEqual(1);
      expect(board["2,1"].count).toEqual(2);
    });
  });
});

describe("flag and open action", () => {
  let board;
  const boardSize = 3;
  const mineLocations = ["1,1", "2,2"];

  describe("#open", () => {
    describe("when default", () => {
      beforeEach(() => {
        board = resetBoard(boardSize, mineLocations);
      });

      it("sets isOpen for id", () => {
        const newBoard = open(board, "0,1");
        expect(newBoard["0,1"].isOpen).toEqual(true);
      });
    });

    describe("when hasFlag is true", () => {
      beforeEach(() => {
        board = resetBoard(boardSize, mineLocations);
        board["0,1"].hasFlag = true;
      });

      it("does not set isOpen", () => {
        const newBoard = open(board, "0,1");
        expect(newBoard["0,1"].hasFlag).toEqual(true);
        expect(newBoard["0,1"].isOpen).toEqual(false);
      });
    });
  });

  describe("#flag", () => {
    describe("when hasFlag is false", () => {
      beforeEach(() => {
        board = resetBoard(boardSize, mineLocations);
        board["0,1"].hasFlag = false;
      });

      it("sets hasFlag for id", () => {
        const newBoard = toggleFlag(board, "0,1");
        expect(newBoard["0,1"].hasFlag).toEqual(true);
      });
    });

    describe("when already isOpen", () => {
      beforeEach(() => {
        board = resetBoard(boardSize, mineLocations);
        board["0,1"].isOpen = true;
      });

      it("can change hasFlag", () => {
        const newBoard = toggleFlag(board, "0,1");
        expect(newBoard["0,1"].isOpen).toEqual(true);
        expect(newBoard["0,1"].hasFlag).toEqual(false);
      });
    });

    describe("when hasFlag is true", () => {
      beforeEach(() => {
        board = resetBoard(boardSize, mineLocations);
        board["0,1"].hasFlag = true;
      });

      it("sets hasFlag for id", () => {
        const newBoard = toggleFlag(board, "0,1");
        expect(newBoard["0,1"].hasFlag).toEqual(false);
      });
    });
  });
});

describe("#opend & #openAround", () => {
  let board;
  const boardSize = 5;
  const mineLocations = ["1,3", "3,3"];

  beforeEach(() => {
    board = resetBoard(boardSize, mineLocations);
  });


  describe("when opening a zero cell", () => {
    // const openAction = { type: OPEN_CELL, id: "1,1" };

    it("opens cells around", () => {
      const newBoard = open(board, "1,1");

      expect(newBoard["1,1"].isOpen).toEqual(true);
      expect(newBoard["0,0"].isOpen).toEqual(true);
      expect(newBoard["0,1"].isOpen).toEqual(true);
      expect(newBoard["0,2"].isOpen).toEqual(true);

      expect(newBoard["0,3"].isOpen).toEqual(false);
      expect(newBoard["0,4"].isOpen).toEqual(false);

      expect(newBoard["1,0"].isOpen).toEqual(true);
      expect(newBoard["1,1"].isOpen).toEqual(true);
      expect(newBoard["1,2"].isOpen).toEqual(true);

      expect(newBoard["1,3"].isOpen).toEqual(false);
      expect(newBoard["1,4"].isOpen).toEqual(false);

      expect(newBoard["2,0"].isOpen).toEqual(true);
      expect(newBoard["2,1"].isOpen).toEqual(true);
      expect(newBoard["2,2"].isOpen).toEqual(true);

      expect(newBoard["2,3"].isOpen).toEqual(false);
      expect(newBoard["2,4"].isOpen).toEqual(false);

      expect(newBoard["3,0"].isOpen).toEqual(true);
      expect(newBoard["3,1"].isOpen).toEqual(true);
      expect(newBoard["3,2"].isOpen).toEqual(true);

      expect(newBoard["3,3"].isOpen).toEqual(false);
      expect(newBoard["3,4"].isOpen).toEqual(false);

      expect(newBoard["4,0"].isOpen).toEqual(true);
      expect(newBoard["4,1"].isOpen).toEqual(true);
      expect(newBoard["4,2"].isOpen).toEqual(true);

      expect(newBoard["4,3"].isOpen).toEqual(false);
      expect(newBoard["4,4"].isOpen).toEqual(false);
    });
  });
});
