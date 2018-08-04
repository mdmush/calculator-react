import React, { Component } from 'react';
import '../App.css';
import SubtractionComponent from './SubtractionComponent.js';
import MultiplicationComponent from './MultiplicationComponent.js';
import DivisionComponent from './DivisionComponent.js';
import AdditionComponent from './AdditionComponent.js';

class ResultScreenComponent extends Component {

  renderOperatorSymbol(){
  	switch(this.props.operator){
  		case "add": return "+";
  		case "minus": return "-";
  		case "divide": return "/";
  		case "multiply": return "*";
  		default: return "";

  	}
  }

  renderTotal(){
  	if (this.props.totalPress && this.props.secondNum !== "0") {
  		switch(this.props.operator){
	  		case "add": return <AdditionComponent firstNum={this.props.firstNum} secondNum={this.props.secondNum} />;
	  					
	  		case "minus": return <SubtractionComponent firstNum={this.props.firstNum} secondNum={this.props.secondNum} />;
	  					  
	  		case "divide": return <DivisionComponent firstNum={this.props.firstNum} secondNum={this.props.secondNum} />;
	  						
	  		case "multiply": return <MultiplicationComponent firstNum={this.props.firstNum} secondNum={this.props.secondNum} />;
	  						 
	  		default: return "";
	  				 

	  	}
  	}
  }

  render() {
    return (
      <div className="outputScreen">
      	{this.props.operator ? <p className="smallText">{this.props.firstNum} {this.renderOperatorSymbol()} {this.props.secondNum !== "0" ? this.props.secondNum : null}</p> : null}
        {this.props.secondNum === "0" ? <p className="bigText">{this.props.firstNum}</p> : <p className="bigText">{this.props.secondNum}</p>}
        {this.props.totalPress ? this.renderTotal() : null}
      </div>
    );
  }
}

export default ResultScreenComponent;
