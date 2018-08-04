import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import ButtonsComponent from './components/ButtonsComponent.js';
import ResultScreenComponent from './components/ResultScreenComponent.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstNum: "0",
      secondNum: "0",
      total: "0",
      totalPress: false,
      operatorPress: false,
      operator: ''
    };

  }

  changeNum(num){
  if (this.state.operatorPress === false) {
    if (this.state.firstNum === "0") {
      this.setState({
        firstNum: num
      })
    }
    else{
      var tempNum = this.state.firstNum + num;
      this.setState({
        firstNum: tempNum
      })
    }
  }
  else if (this.state.operatorPress === true){
    if (this.state.secondNum === "0") {
      this.setState({
        secondNum: num
      })
    }
    else{
      var tempNum2 = this.state.secondNum + num;
      this.setState({
        secondNum: tempNum2
      })
    }
  }
    
  }

  clearNum(){
    this.setState({
      firstNum: "0",
      secondNum: "0",
      total: "0",
      operator: "",
      operatorPress: false
    })
  }

  changeOperator(op){
    this.setState({
      operatorPress: true,
      operator: op
    })
  }

  calculate(){
    this.setState({
      totalPress: true
    })
  }

  render() {
    return (
      <div className="App center">
        <Grid className="show-grid w-25">
          <Row className="show-row center">
            <Col md={12} className="show-col">
              <ResultScreenComponent total={this.state.total} totalPress={this.state.totalPress} firstNum={this.state.firstNum} secondNum={this.state.secondNum} operator={this.state.operator} />
            </Col>
          </Row>
          <Row className="show-row center">
            <Col md={6} className="show-col" onClick={() => this.clearNum()}>
              <ButtonsComponent text="clear" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeOperator("multiply")}>
              <ButtonsComponent text="x" type="symbols" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeOperator("divide")}>
              <ButtonsComponent text="÷" type="symbols" />
            </Col>
          </Row>
          <Row className="show-row center">
            <Col md={3} className="show-col" onClick={() => this.changeNum("7")}>
              <ButtonsComponent text="7" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("8")}>
              <ButtonsComponent text="8" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("9")}>
              <ButtonsComponent text="9" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeOperator("minus")}>
              <ButtonsComponent text="-" type="symbols" />
            </Col>
          </Row>
          <Row className="show-row center">
            <Col md={3} className="show-col" onClick={() => this.changeNum("4")}>
              <ButtonsComponent text="4" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("5")}>
              <ButtonsComponent text="5" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("6")}>
              <ButtonsComponent text="6" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeOperator("add")}>
              <ButtonsComponent text="+" type="symbols" />
            </Col>
          </Row>
          <Row className="show-row center">
            <Col md={3} className="show-col" onClick={() => this.changeNum("1")}>
              <ButtonsComponent text="1" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("2")}>
              <ButtonsComponent text="2" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.changeNum("3")}>
              <ButtonsComponent text="3" type="numbers" />
            </Col>
            <Col md={3} className="show-col" onClick={() => this.calculate()}>
              <ButtonsComponent text="=" type="symbols" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
