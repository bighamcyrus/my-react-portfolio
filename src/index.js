import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
// // importing bootstrap below 
// import 'bootstrap/dist/css/bootstrap.min.css';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const head = ReactDOM.createRoot(document.querySelector('head'));

// head.render(
//   <>
//     <meta charset="utf-8" />
//     <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta name="theme-color" content="#000000" />
//     <meta
//       name="description"
//       content="Web site created using create-react-app"
//     />
//     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
//     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
//     <title>Cyrus Bigham React Portfolio</title>
//     </>
// )
// root.render(

  
//     <App />
 
// );

// BELOW IS START CODE FOR TIC TAK TOE. REMOVE ALL ABOVE CODE TO PRACTICE THE BELOW 

var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});


// below code creates a class that goes directly onto the react component that returns a button that once clicked with console log click
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    // if there is a winner then no longer do anything
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // continue handler
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// checks after each move if there is a potential winner by checking all possible winning situations
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}