import { INIT_BOARD, OPEN_CELL, TOGGLE_CELL_FLAG } from "../actions/boardActions";
import minesweeperReducer from "./minesweeperReducer";
import defaultStore from "./defaultStore";

it("defines a board", () => {
  expect(minesweeperReducer().board).toBeDefined();
});
describe("board action", () => {
  const initAction = {
    type: INIT_BOARD,
    boardSize: 3,
    mineLocations: ["1,1", "2,2"]
  };
  let initState;

  beforeEach(() => {
    initState = minesweeperReducer(defaultStore, initAction);
  });

  describe("INIT_BOARD", () => {
    it("sets the correct true hasMine values for the board", () => {
      expect(initState.board["1,1"].hasMine).toEqual(true);
      expect(initState.board["2,2"].hasMine).toEqual(true);
    });

    it("sets the correct false hasMine values for the board", () => {
      expect(initState.board["0,0"].hasMine).toEqual(false);
      expect(initState.board["0,1"].hasMine).toEqual(false);
      expect(initState.board["0,2"].hasMine).toEqual(false);
      expect(initState.board["1,0"].hasMine).toEqual(false);
      expect(initState.board["1,2"].hasMine).toEqual(false);
      expect(initState.board["2,0"].hasMine).toEqual(false);
      expect(initState.board["2,1"].hasMine).toEqual(false);
    });

    it("sets the correct false isOpen values for the board", () => {
      expect(initState.board["0,0"].isOpen).toEqual(false);
      expect(initState.board["0,1"].isOpen).toEqual(false);
      expect(initState.board["0,2"].isOpen).toEqual(false);
      expect(initState.board["1,0"].isOpen).toEqual(false);
      expect(initState.board["1,2"].isOpen).toEqual(false);
      expect(initState.board["2,0"].isOpen).toEqual(false);
      expect(initState.board["2,1"].isOpen).toEqual(false);
    });

    it("sets the count values for neighbor cells", () => {
      expect(initState.board["0,0"].count).toEqual(1);
      expect(initState.board["0,1"].count).toEqual(1);
      expect(initState.board["0,2"].count).toEqual(1);
      expect(initState.board["1,0"].count).toEqual(1);
      expect(initState.board["1,2"].count).toEqual(2);
      expect(initState.board["2,0"].count).toEqual(1);
      expect(initState.board["2,1"].count).toEqual(2);
    });

    describe("when complex table", () => {
      const bigAction = {
        type: INIT_BOARD,
        boardSize: 9,
        mineLocations: ["1,1", "2,2", "3,3", "1,8", "6,6", "7,7"]
      };
      let newState;
      it("sets the count values for neighbor cells", () => {
        newState = minesweeperReducer(defaultStore, bigAction);
        expect(newState.board["0,0"].count).toEqual(1);
        expect(newState.board["0,1"].count).toEqual(1);
        expect(newState.board["0,2"].count).toEqual(1);
        expect(newState.board["1,0"].count).toEqual(1);
        expect(newState.board["1,2"].count).toEqual(2);
        expect(newState.board["2,0"].count).toEqual(1);
        expect(newState.board["2,1"].count).toEqual(2);
      });
    });
  });

  describe("flag and open action", () => {
    const openAction = { type: OPEN_CELL, id: "0,1" };

    describe("OPEN_CELL", () => {

      it("sets isOpen for id", () => {
        const newState = minesweeperReducer(initState, openAction);
        expect(newState.board["0,1"].isOpen).toEqual(true);
      });

      describe("when hasFlag is true", () => {
        let hasFlagState;

        beforeEach(() => {
          const toggleAction = { type: TOGGLE_CELL_FLAG, id: "0,1" };
          hasFlagState = minesweeperReducer(initState, toggleAction);
        });

        it("does not set isOpen", () => {
          const newState = minesweeperReducer(hasFlagState, openAction);
          expect(newState.board["0,1"].hasFlag).toEqual(true);
          expect(newState.board["0,1"].isOpen).toEqual(false);
        });
      });
    });

    describe("TOGGLE_CELL_FLAG", () => {
      const toggleAction = { type: TOGGLE_CELL_FLAG, id: "0,1" };

      describe("when hasFlag is false", () => {
        it("sets hasFlag for id", () => {
          const newState = minesweeperReducer(initState, toggleAction);
          expect(newState.board["0,1"].hasFlag).toEqual(true);
        });
      });

      describe("when already isOpen", () => {
        let toggledState;

        beforeEach(() => {
          toggledState = minesweeperReducer(initState, openAction);
        });

        it("can change hasFlag", () => {
          const newState = minesweeperReducer(toggledState, toggleAction);
          expect(newState.board["0,1"].isOpen).toEqual(true);
          expect(newState.board["0,1"].hasFlag).toEqual(false);
        });
      })

      describe("when hasFlag is true", () => {
        let toggledState;

        beforeEach(() => {
          toggledState = minesweeperReducer(initState, toggleAction);
        });

        it("sets hasFlag for id", () => {
          const newState = minesweeperReducer(toggledState, toggleAction);
          expect(newState.board["0,1"].hasFlag).toEqual(false);
        });

      });
    });
  });
});
