import React, { Component } from 'react';
import * as Minesweeper from '../../minesweeper';

import Tile from './tile';

class Board extends Component {
  constructor(props) {
    super(props)

    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  renderRows() {
    const board = this.props.board;

    return board.grid.map( (row, idx) => {
      return (
        <div className="row" key={`row-${idx}`}>
          {this.renderTiles(row, idx)}
        </div>
      );
    });
  }

  renderTiles(row, i) {
    const board = this.props.board;

    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          updateGame={this.props.updateGame}
          key={i * board.gridSize + j} />
      );
    });
  }

  render() {
    return(
      <div id="board">
        {this.renderRows()}
      </div>
    )
  }
}

export default Board;
