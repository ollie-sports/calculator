import React from "react";
import "./Calculator.css";

enum SYMBOL {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
  equals = "=",
  clear = "clear"
}

const MATH_OPERATORS = [SYMBOL.add, SYMBOL.subtract, SYMBOL.multiply, SYMBOL.divide];

export default function Calculator() {
  function onPress(arg: SYMBOL | number) {
    if (typeof arg === "number") {
      //Something...
    } else if (MATH_OPERATORS.includes(arg)) {
      //Something
    } else if (arg === SYMBOL.equals) {
      //Something
    } else if (arg === SYMBOL.clear) {
      //Something
    }
  }

  return (
    <div>
      <div data-testid="topInput">0</div>
      <div>
        <button onClick={() => onPress(SYMBOL.clear)}>{SYMBOL.clear}</button>
        <button onClick={() => onPress(SYMBOL.divide)}>{SYMBOL.divide}</button>
      </div>
      <div>
        <button onClick={() => onPress(7)}>{7}</button>
        <button onClick={() => onPress(8)}>{8}</button>
        <button onClick={() => onPress(9)}>{9}</button>
        <button onClick={() => onPress(SYMBOL.multiply)}>{SYMBOL.multiply}</button>
      </div>
      <div>
        <button onClick={() => onPress(4)}>{4}</button>
        <button onClick={() => onPress(5)}>{5}</button>
        <button onClick={() => onPress(6)}>{6}</button>
        <button onClick={() => onPress(SYMBOL.subtract)}>{SYMBOL.subtract}</button>
      </div>
      <div>
        <button onClick={() => onPress(1)}>{1}</button>
        <button onClick={() => onPress(2)}>{2}</button>
        <button onClick={() => onPress(3)}>{3}</button>
        <button onClick={() => onPress(SYMBOL.add)}>{SYMBOL.add}</button>
      </div>
      <div>
        <button onClick={() => onPress(0)}>{0}</button>
        <button onClick={() => onPress(SYMBOL.equals)}>{SYMBOL.equals}</button>
      </div>
    </div>
  );
}

function doMath(val1: number, val2: number, operation: SYMBOL) {
  if (operation === SYMBOL.add) {
    return val1 + val2;
  } else if (operation === SYMBOL.subtract) {
    return val1 - val2;
  } else if (operation === SYMBOL.multiply) {
    return val1 * val2;
  } else if (operation === SYMBOL.divide) {
    return Math.floor(val1 / val2); //This is an integer only calculator...
  }
}
