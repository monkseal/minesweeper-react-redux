/* eslint-disable jsx-a11y/click-events-have-key-events,
                  jsx-a11y/no-noninteractive-element-interactions
                  jsx-a11y/interactive-supports-focus
*/
import React from "react";
import PropTypes from "prop-types";

const LevelMenu = ({ changeLevel }) => (
  <div className="MineSweeper__level">
    <label>
      <input type="radio" name="level" onChange={() => changeLevel("Beginner")} />Beginner
    </label>
    <label>
      <input type="radio" name="level" onChange={() => changeLevel("Intermediate")} />Intermediate
    </label>
    <label>
      <input type="radio" name="level" onChange={() => changeLevel("Expert")} />Expert
    </label>
  </div>
);

LevelMenu.propTypes = {
  changeLevel: PropTypes.func.isRequired
  // resetGame: PropTypes.func.isRequired
};

export default LevelMenu;
