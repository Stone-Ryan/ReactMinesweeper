import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

import Board from './board';

class Game extends Component {
  constructor(props) {
    super(props)

    const board = new Minesweeper.Board(9, 10);

    this.state = {
      board: board,
    }

    this.updateGame = this.updateGame.bind(this);
  }

  updateGame() {

  }

  render() {
    return (
    <Board board={this.state.board} update={this.updateGame} />
    )
  }
}

export default Game;
