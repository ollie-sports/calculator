import React from "react";

const SYMBOL = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "÷",
  equals: "=",
  clear: "clear"
};

const MATH_OPERATORS = [SYMBOL.add, SYMBOL.subtract, SYMBOL.multiply, SYMBOL.divide];

const INIT_STATE = {
  currentValue: 0,
  previousValue: undefined,
  unhandledPendingOperation: undefined,
  pendingOperation: undefined
};

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
      return val1 / val2;
    }
  };

  onPress = arg => {
    const { currentValue, previousValue, unhandledPendingOperation, pendingOperation } = this.state;

    if (typeof arg === "number") {
      if (unhandledPendingOperation) {
        //Insert this.setState({}) call here
      } else {
        //Insert this.setState({}) call here
      }
    } else if (MATH_OPERATORS.includes(arg)) {
      //Insert this.setState({}) call here

      if (previousValue !== undefined && pendingOperation !== undefined) {
        //Insert this.setState({}) call here
      }
    } else if (arg === SYMBOL.equals) {
      //Insert this.setState({}) call here
    } else if (arg === SYMBOL.clear) {
      //Insert this.setState({}) call here
    }
  };

  render() {
    return (
      <div>
        <div style={{ ...styles.topDisplayBar }} data-testid="topInput">
          {this.state.currentValue}
        </div>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.clear)}>
          {SYMBOL.clear}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.divide)}>
          {SYMBOL.divide}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(7)}>
          {7}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(8)}>
          {8}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(9)}>
          {9}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.multiply)}>
          {SYMBOL.multiply}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(4)}>
          {4}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(5)}>
          {5}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(6)}>
          {6}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.subtract)}>
          {SYMBOL.subtract}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(1)}>
          {1}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(2)}>
          {2}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(3)}>
          {3}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.add)}>
          {SYMBOL.add}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(0)}>
          {0}
        </button>
        <button style={{ ...styles.button }} onClick={() => this.onPress(SYMBOL.equals)}>
          {SYMBOL.equals}
        </button>
      </div>
    );
  }
}

const styles = {
  topDisplayBar: {},
  button: {}
};
