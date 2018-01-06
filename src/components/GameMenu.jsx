/* eslint-disable jsx-a11y/click-events-have-key-events,
                  jsx-a11y/no-noninteractive-element-interactions
                  jsx-a11y/interactive-supports-focus
*/
import React from "react";
import PropTypes from "prop-types";


class GameMenu extends React.Component {
  constructor() {
    super();
    this.tick = this.tick.bind(this);
    this.state = { timer: null, counter: 0, resetTimer: true };
  }

  componentDidMount() {
    const timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    if (this.props.gameStatus === "notPlaying") {
      this.setState({ counter: 0, resetTimer: true });
    }

    if (this.props.gameStatus === "playing") {
      let counter = this.state.counter + 1;
      if (this.state.resetTimer) {
        counter = 0;
      }
      this.setState({ counter, resetTimer: false });
    } else {
      this.setState({ resetTimer: true });
    }
  }
  
  render() {
    const { gameStatus, resetGame, flagCount } = this.props;
    return (
      <div>
        <span className="MineSweeper__flagNum">{`${flagCount}`}</span>
        <span className="MineSweeper__face">
          <span className={`button ${gameStatus}`} role="button" onClick={() => resetGame()} />
        </span>
        <span className="MineSweeper__time">{this.state.counter} </span>
      </div>
    );
  }
}

GameMenu.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
  flagCount: PropTypes.number.isRequired
};


export default GameMenu;
