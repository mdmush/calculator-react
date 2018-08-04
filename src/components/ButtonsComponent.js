import React, { Component } from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

class ButtonsComponent extends Component {
  render() {
    if (this.props.type === "symbols") {
      return (
        <Button className="symbolButton">
          <p>{this.props.text}</p>
        </Button>
      );
    }
    else{
      return (
        <Button className="numberButton">
          <p>{this.props.text}</p>
        </Button>
      );
    }
    
  }
}

export default ButtonsComponent;
