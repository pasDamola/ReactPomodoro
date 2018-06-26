import React, { Component } from 'react';
import './App.css';


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <h1 style={{ fontSize: 100 }}>{this.props.time}:00</h1>

      </div>
    );
  }


}

class TimerLength extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div class="col-md-4">
        <p class="text center lead">Session length</p>
        <div class="btn-group btn-group" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" onClick={this.props.decrement}>-</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary disabled">{this.props.time}</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" onClick={this.props.increment}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

class BreakLength extends React.Component {

  render() {
    return (
      <div class="col-md-4">
        <p class="text center lead">Break length</p>
        <div class="btn-group btn-group" role="group" aria-label="...">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="breakMinus">-</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-primary disabled" >5</button>
          </div>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default">+</button>
          </div>
        </div>
      </div>
    );
  }

}

class StartButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ marginRight: 5 }}>
        <button className="btn btn-success" onClick={this.props.startCountDown}>Start</button>
      </div>
    );
  }
}

class StopButton extends React.Component {
  render() {
    return (
      <div style={{ marginRight: 5 }}>
        <button className="btn btn-danger">Stop</button>
      </div>
    );
  }
}

class ResetButton extends React.Component {
  render() {
    return (
      <div>
        <button className="btn btn-secondary">Reset</button>
      </div>
    );
  }


}

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 25
    }
    this.startCountDown = this.startCountDown.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  startCountDown() {
    
  }

  increment(){
    this.setState({
      time : this.state.time + 1
    })
  }

  decrement(){
    this.setState({
      time : this.state.time - 1
    })
  }


  render() {
    return (
      <div>
        <div class="row" style={{ paddingTop: 100 }}>
          <div class="col-md-3"></div>
          <BreakLength />
          <TimerLength time={this.state.time} increment={this.increment} decrement={this.decrement} />
        </div>
        <div class="row" style={{ paddingLeft: 50 }}>
          <div class="col-md-4"></div>
          <div class="col-md-4">
            <Timer time={this.state.time} />
          </div>
        </div>
        <div class="row">&nbsp;</div>
        <div class="row" style={{ paddingLeft: 100 }}>
          <div class="col-md-4"></div>
          <StopButton />
          <StartButton startCountDown={this.startCountDown} />
          <ResetButton />

        </div>
      </div>
    );
  }

}



export default Pomodoro;