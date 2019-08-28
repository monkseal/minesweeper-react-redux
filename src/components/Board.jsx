/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import Cell from "../containers/Cell";
import GameMenu from "../containers/GameMenu";
import LevelMenu from "../containers/LevelMenu";

const Board = ({ table, activeLevel }) => (
  <div>
    <LevelMenu />
    <div className={`MineSweeper ${activeLevel}`}>
      <GameMenu />
      <table className="Table">
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
  </div>
);

Board.propTypes = {
  table: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)).isRequired,
  activeLevel: PropTypes.string.isRequired
};

export default Board;
