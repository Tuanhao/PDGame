import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
    }
  }
  componentDidMount() {
    setInterval(this.timer.bind(this), 500)
  }
  timer() {
    if(this.props.start) {
      this.setState({ currentTime: this.state.currentTime + 0.5 })
    }
  }
  render() {
    const displayTime= this.state.currentTime.toFixed(1)
    return(
      <span>
        {displayTime}
      </span>
    )
  }
}

export default Timer;