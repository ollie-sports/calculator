import React from "react";
import "./Calculator.css";

const SYMBOL = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "÷",
  equals: "=",
  clear: "clear"
};

const MATH_OPERATORS = [SYMBOL.add, SYMBOL.subtract, SYMBOL.multiply, SYMBOL.divide];

export default class Calculator extends React.Component {
  state = {};

  doMath = (val1, val2, operation) => {
    if (operation === SYMBOL.add) {
      return val1 + val2;
    } else if (operation === SYMBOL.subtract) {
      return val1 - val2;
    } else if (operation === SYMBOL.multiply) {
      return val1 * val2;
    } else if (operation === SYMBOL.divide) {
      return val1 / val2;
    }
  };

  onPress = arg => {
    if (typeof arg === "number") {
      //Something...
    } else if (MATH_OPERATORS.includes(arg)) {
      //Something
    } else if (arg === SYMBOL.equals) {
      //Something
    } else if (arg === SYMBOL.clear) {
      //Something
    }
  };

  render() {
    return (
      <div>
        <div data-testid="topInput">0</div>
        <div>
          <button onClick={() => this.onPress(SYMBOL.clear)}>{SYMBOL.clear}</button>
          <button onClick={() => this.onPress(SYMBOL.divide)}>{SYMBOL.divide}</button>
        </div>
        <div>
          <button onClick={() => this.onPress(7)}>{7}</button>
          <button onClick={() => this.onPress(8)}>{8}</button>
          <button onClick={() => this.onPress(9)}>{9}</button>
          <button onClick={() => this.onPress(SYMBOL.multiply)}>{SYMBOL.multiply}</button>
        </div>
        <div>
          <button onClick={() => this.onPress(4)}>{4}</button>
          <button onClick={() => this.onPress(5)}>{5}</button>
          <button onClick={() => this.onPress(6)}>{6}</button>
          <button onClick={() => this.onPress(SYMBOL.subtract)}>{SYMBOL.subtract}</button>
        </div>
        <div>
          <button onClick={() => this.onPress(1)}>{1}</button>
          <button onClick={() => this.onPress(2)}>{2}</button>
          <button onClick={() => this.onPress(3)}>{3}</button>
          <button onClick={() => this.onPress(SYMBOL.add)}>{SYMBOL.add}</button>
        </div>
        <div>
          <button onClick={() => this.onPress(0)}>{0}</button>
          <button onClick={() => this.onPress(SYMBOL.equals)}>{SYMBOL.equals}</button>
        </div>
      </div>
    );
  }
}
