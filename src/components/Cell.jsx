import React from "react";
import PropTypes from "prop-types";

const OpenCell = ({ count, hasMine, isOpen }) => (
  <div className="Cell__cover Cell__cover--opened" >
    {!hasMine &&
      <span className={`Cell__number${count}`}>{count}</span>
    }
    {hasMine &&
      <span className="Cell__bomb">b</span>
    }
  </div>
);

OpenCell.propTypes = {
  count: PropTypes.number.isRequired,
  hasMine: PropTypes.bool.isRequired
};

const ClosedCell =() => (
  <div className="Cell__cover" >
  </div>
)

const Cell = ({ id, count, hasMine, isOpen, hasFlag, onOpen, onFlagToggle }) => (
  <td className="Cell" onClick={() => onOpen(id) }>
    {!isOpen && <ClosedCell /> }
    {isOpen && <OpenCell hasMine={hasMine} count={count} /> }
  </td>
);

Cell.propTypes = {
  ...OpenCell.propTypes,
  id: PropTypes.string.isRequired,
  hasFlag: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onFlagToggle:  PropTypes.func.isRequired
};

export default Cell;
