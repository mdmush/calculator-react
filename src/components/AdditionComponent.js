import React, { Component } from 'react';
import '../App.css';

class AdditionComponent extends Component {
  render() {
  	var firstNumTemp = parseInt(this.props.firstNum);
  	var secondNumTemp = parseInt(this.props.secondNum);
    return (
      <p className="smallText">={firstNumTemp + secondNumTemp}</p>
    );
  }
}

export default AdditionComponent;
