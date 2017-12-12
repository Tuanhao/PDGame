import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passedSecurityCheck: false,
      password: '',
      abc: ''
    }
  }

  securityCheck() {
    if (this.state.password === '967456852159hao') {
      this.setState({ passedSecurityCheck: true })
    }
  }

  typingPassword(e) {
    this.setState({
      password: e.target.value,
    })
  }
  render() {
    if(this.state.passedSecurityCheck) {
      return (
        <div className="App">
          <header className="App-header">
            <div className="App-logo">P<span className="reverse">D</span></div>
            <h1 className="App-title">PHÓN DẬU</h1>
          </header>
          <p className="App-intro">
            Hãy trả lời câu hỏi thật nhanh để được phần thưởng hấp dẫn!
          </p>
          <GameBoard />
        </div>
      );
    } else {
      return(
        <div>
          <input type="password" onChange={this.typingPassword.bind(this)} value={this.state.password}></input>
          <button onClick={this.securityCheck.bind(this)}>Submit</button>
        </div>
      )
    }
  }
}

export default App;
