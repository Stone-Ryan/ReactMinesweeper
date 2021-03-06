import React, {Component} from 'react';
import * as Minesweeper from '../../minesweeper';

import Board from './board';

// TODO: Add endgame logic///////////////////////////////////////////////

class Game extends Component {
  constructor(props) {
    super(props);

    const board = new Minesweeper.Board(9, 10);

    this.state = {
      board: board
    };

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({board: this.state.board});
  }

  render() {
    return (<Board board={this.state.board} updateGame={this.updateGame} />);
  }
}

export default Game;
