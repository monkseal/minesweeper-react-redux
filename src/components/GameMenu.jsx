/* eslint-disable jsx-a11y/click-events-have-key-events,
                  jsx-a11y/no-noninteractive-element-interactions
                  jsx-a11y/interactive-supports-focus
*/
import React from "react";
import PropTypes from "prop-types";

const GameMenu = ({ gameStatus, resetGame, flagCount }) => (
  <div>
    <span className="MineSweeper__flagNum">{`${flagCount}`}</span>
    <span className="MineSweeper__face">
      <span className={`button ${gameStatus}`} role="button" onClick={() => resetGame()} />
    </span>
    <span className="MineSweeper__time">TODO </span>
  </div>
);

GameMenu.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
  flagCount: PropTypes.number.isRequired
};


export default GameMenu;
