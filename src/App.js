import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo">PD</h1>
          <h1 className="App-title">PHÓN DẬU</h1>
        </header>
        <p className="App-intro">
          Hãy trả lời câu hỏi thật nhanh để được phần thưởng hấp dẫn!
        </p>
        <GameBoard />
      </div>
    );
  }
}

export default App;
