import { mapStateToProps } from "./Board";

describe("mapStateToProps", () => {
  const cell = {
    hasMine: false,
    hasFlag: false,
    isOpen: false,
    count: 0
  };

  const board = {
    "0,0": cell,
    "0,1": cell,
    "1,0": cell,
    "1,1": cell
  };

  it("is defined", () => {
    expect(mapStateToProps).toBeDefined();
  });

  it("retuns a table", () => {
    const props = mapStateToProps({ board });
    expect(props.table).toBeDefined();
    expect(props.table[0]).toBeDefined();
    expect(props.table[0][0]).toBeDefined();
    expect(props.table[0][0]).toEqual(cell);
    expect(props.table[0][1]).toEqual(cell);
    expect(props.table[1][1]).toEqual(cell);
    expect(props.table[1][1]).toEqual(cell);
  });
});
