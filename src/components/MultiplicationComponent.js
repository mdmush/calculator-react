import React, { Component } from 'react';
import '../App.css';

class MultiplicationComponent extends Component {
  render() {
    return (
      <p className="smallText">={this.props.firstNum * this.props.secondNum}</p>
    );
  }
}

export default MultiplicationComponent;
