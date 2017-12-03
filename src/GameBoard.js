import React, { Component } from 'react';
import Answer from './Answer.js';
import InfoModal from './InfoModal.js';
import Timer from './Timer.js';
import {QUESTIONS, ANSWERS} from './QAData.js';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: QUESTIONS,
      answers: ANSWERS,
      index: 0,
      result: null,
      isReadyModal: false,
      isReady: false,
      isFinished: false,
      scrore: 0,
      buttonsClicked: false,
    };
  }

  renderAnswer(i) {
    if (this.state.isFinished) return false;
    return (
      <Answer
        onClick={() => this.answerHandleClick(i)}
        value={i.value}
        isCorrect={i.isCorrect}
        buttonsClicked={this.state.buttonsClicked}
      />
    );
  }

  renderInfoModal(message, onClickAction) {
    if (this.state.isReadyModal) {
      return (
        <InfoModal
          message={message}
          onClick={this.isReadyHandleClick.bind(this)}
        />     
      )
    }
    return false
  }

  answerHandleClick(i) {
    this.setState({ buttonsClicked: true})
    if (this.state.index > (QUESTIONS.length - 3)) {
      this.setState({ 
        isReady: false,
        isFinished: true,
       })
    }
    if(i.isCorrect) {
      this.setState({ 
        result: true,
        scrore: this.state.scrore + 1,
      })
    } else {
      this.setState({ result: false })
    }
    setTimeout(function() {
      const newIndex = this.state.index + 1
      this.setState({ 
        index: newIndex,
        result: null,
        buttonsClicked: false,
      })
      if (this.state.index === 3) {
        this.setState({ isReadyModal: true })
      }
    }.bind(this), 600);
  }

  isReadyHandleClick() {
    this.setState({ 
      scrore: 0,
      isReadyModal: false,
      isReady: true,
    })
  }

  render() {
    const index = this.state.index;
    const answers = this.state.answers[index];
    const question = this.state.question[index];
    const result = this.state.result ? 'ĐÚNG' : 'SAI';
    const infoModalMessage = 'Nãy chỉ là làm nóng thôi, bạn đã sẵn sàng chưa?';
    return (
      <div className="game-board">
        {this.renderInfoModal(infoModalMessage, true)}
        <div className="question"><h2>{question}</h2></div>
        <div className="buttons">
          <div className="board-row">
            {this.renderAnswer(answers[0])}
            {this.renderAnswer(answers[1])}
          </div>
          <div className="board-row">
            {this.renderAnswer(answers[2])}
            {this.renderAnswer(answers[3])}
          </div>
        </div>
        <div className={'result result--' + this.state.result}>{result}</div>
        <div className="timer">
          Thời gian: <Timer start={this.state.isReady} />
        </div>
        <div className="score">Điểm: {this.state.scrore} /11</div>
      </div>
    );
  }
}

export default GameBoard;
