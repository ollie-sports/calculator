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
  state = {
    actions: []
  };

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

  getValue(actions) {
    let value = 0;
    let op = null;
    let subtotal = 0;
    let last_execution;
    actions.forEach( action => {
      if (typeof action === "number") {
        value = value ? parseInt(value + '' + action) : action;
      } else if (MATH_OPERATORS.includes(action)) {
        last_execution = null;
        if (!value) {
          op = action;  // haven't changed the value so just update the operation
        } else {
          subtotal = op ? this.doMath(subtotal, value, op) : value;
          value = 0;
          op = action;
        }
      } else if (action === SYMBOL.equals) {
        // save last execution so that hitting subsequent equals apply the last operation
        if (last_execution) {
          subtotal = this.doMath(value || subtotal, last_execution.value, last_execution.operation);
        } else {
          subtotal = this.doMath(subtotal, value, op);
          last_execution = {
            value: value,
            operation: op
          }
        }
        value = 0;
      }
    }, 0);
    return value || subtotal;
  }

  onPress = arg => {
    if (arg === SYMBOL.clear) {
      this.setState({ actions: [] });
    } else {
      this.setState({ actions: [...this.state.actions, arg]});
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display" data-testid="topInput"><span>{ this.getValue(this.state.actions) }</span></div>
        <div className="buttons">
          <button onClick={() => this.onPress(SYMBOL.clear)} className="clear">{SYMBOL.clear}</button>
          <button onClick={() => this.onPress(SYMBOL.divide)}>{SYMBOL.divide}</button>
        </div>
        <div className="buttons">
          <button onClick={() => this.onPress(7)}>{7}</button>
          <button onClick={() => this.onPress(8)}>{8}</button>
          <button onClick={() => this.onPress(9)}>{9}</button>
          <button onClick={() => this.onPress(SYMBOL.multiply)}>{SYMBOL.multiply}</button>
        </div>
        <div className="buttons">
          <button onClick={() => this.onPress(4)}>{4}</button>
          <button onClick={() => this.onPress(5)}>{5}</button>
          <button onClick={() => this.onPress(6)}>{6}</button>
          <button onClick={() => this.onPress(SYMBOL.subtract)}>{SYMBOL.subtract}</button>
        </div>
        <div className="buttons">
          <button onClick={() => this.onPress(1)}>{1}</button>
          <button onClick={() => this.onPress(2)}>{2}</button>
          <button onClick={() => this.onPress(3)}>{3}</button>
          <button onClick={() => this.onPress(SYMBOL.add)}>{SYMBOL.add}</button>
        </div>
        <div className="buttons">
          <button onClick={() => this.onPress(0)} className="zero">{0}</button>
          <button onClick={() => this.onPress(SYMBOL.equals)}>{SYMBOL.equals}</button>
        </div>
      </div>
    );
  }
}
