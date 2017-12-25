/* eslint-disable jsx-a11y/click-events-have-key-events,
                  jsx-a11y/no-noninteractive-element-interactions
                  jsx-a11y/interactive-supports-focus
*/
import React from "react";
import PropTypes from "prop-types";

const GameMenu = ({ smiley, resetGame }) => (
  <div>
    <span className="MineSweeper__flagNum">TODO</span>
    <span className="MineSweeper__face">
      <span className={`button ${smiley}`} role="button" onClick={() => resetGame()} />
    </span>
    <span className="MineSweeper__time">TODO </span>
  </div>
);

GameMenu.propTypes = {
  smiley: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired
};

export default GameMenu;
