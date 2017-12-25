/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";

import Cell from "../containers/Cell";
import GameMenu from "../containers/GameMenu";

const Board = ({ table }) => (
  <div className="MineSweeper easy">
    <GameMenu />
    <table className="Table" >
      <tbody>
        {table.map((cells, row) => (
          <tr key={`mine-row-${row}`}>
            {cells.map((cell) => (
              <Cell key={`mine-cell-${cell.id}`} {...cell} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Board.propTypes = {
  table: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired
};

export default Board;
