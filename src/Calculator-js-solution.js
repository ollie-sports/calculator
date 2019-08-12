import React from "react";
import "./Calculator.css";

const INIT_STATE = {
  currentValue: 0,
  previousValue: undefined,
  unhandledPendingOperation: undefined,
  pendingOperation: undefined
};

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
  state = INIT_STATE;

  doMath = (val1, val2, operation) => {
    if (operation === SYMBOL.add) {
      return val1 + val2;
    } else if (operation === SYMBOL.subtract) {
      return val1 - val2;
    } else if (operation === SYMBOL.multiply) {
      return val1 * val2;
    } else if (operation === SYMBOL.divide) {
      return Math.floor(val1 / val2); //This is an integer only calculator...
    }
  };

  onPress = arg => {
    const { currentValue, previousValue, unhandledPendingOperation, pendingOperation } = this.state;

    if (typeof arg === "number") {
      if (unhandledPendingOperation === SYMBOL.equals) {
        this.setState({
          unhandledPendingOperation: undefined,
          pendingOperation: undefined,
          previousValue: undefined,
          currentValue: arg
        });
      } else if (unhandledPendingOperation) {
        this.setState({
          unhandledPendingOperation: undefined,
          pendingOperation: unhandledPendingOperation,
          previousValue: currentValue,
          currentValue: arg
        });
      } else {
        this.setState({
          currentValue: parseInt(currentValue.toString() + arg)
        });
      }
    } else if (MATH_OPERATORS.includes(arg)) {
      this.setState({
        unhandledPendingOperation: arg
      });

      if (previousValue !== undefined && pendingOperation !== undefined) {
        this.setState({
          currentValue: this.doMath(previousValue, currentValue, pendingOperation),
          previousValue: undefined
        });
      }
    } else if (arg === SYMBOL.equals) {
      this.setState({
        currentValue: this.doMath(previousValue, currentValue, pendingOperation),
        previousValue: undefined,
        unhandledPendingOperation: arg,
        pendingOperation: undefined
      });
    } else if (arg === SYMBOL.clear) {
      this.setState(INIT_STATE);
    }
  };

  render() {
    return (
      <div>
        <div data-testid="topInput">{this.state.currentValue}</div>
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
