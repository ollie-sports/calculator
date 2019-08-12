import React from "react";
import Calculator from "./Calculator";
import { render, fireEvent } from "@testing-library/react";

const cases = [
  {
    inputs: [1, 1],
    output: 11
  },
  {
    inputs: [1, 1, "+"],
    output: 11
  },
  {
    inputs: [1, 1, "+", 1, 1],
    output: 11
  },
  {
    inputs: [1, 1, "+", 1, "="],
    output: 12
  },
  {
    inputs: [1, 1, "+", 1, "+"],
    output: 12
  },
  {
    inputs: [1, 1, "+", 1, "+", 1, 1],
    output: 11
  },
  {
    inputs: [1, 1, "+", 1, "+", 1, 1],
    output: 11
  },
  {
    inputs: [1, 1, "+", 1, "+", 1, 1, "+"],
    output: 23
  },
  {
    inputs: [1, 1, "+", 1, "+", 1, 1, "+", 1, "="],
    output: 24
  },
  {
    inputs: [1, 1, "+", "-"],
    output: 11
  },
  {
    inputs: [1, 1, "+", "÷", 1, 1],
    output: 11
  },
  {
    inputs: [1, 1, "+", "÷", 1, "+"],
    output: 11
  },
  {
    inputs: [1, 1, "+", "-", 1, "÷"],
    output: 10
  },
  {
    inputs: [1, 1, "clear"],
    output: 0
  },
  {
    inputs: [1, 1, "+", "-", 1, "÷"],
    output: 10
  },
  {
    inputs: ["-", 1, 1, "="],
    output: -11
  }
];

const results = [];
cases.forEach(a => {
  const { queryByText, unmount, queryByTestId } = render(
    <div style={{ position: "absolute", left: -99999 }}>
      <Calculator />
    </div>
  );

  const buttonOne = queryByText("1");

  a.inputs.forEach(input => {
    const clickElm = input === 1 ? buttonOne : queryByText(input);
    fireEvent.click(clickElm);
  });

  const didPass = queryByTestId("topInput").textContent === String(a.output);
  results.push(didPass);

  if (!didPass) {
    console.log(
      "Failing test inputs:",
      a.inputs,
      "Expected output:",
      a.output,
      "Actual test output:",
      queryByTestId("topInput").textContent
    );
  }

  unmount();
});

export default function App() {
  return (
    <div>
      <Calculator />
      <div style={{ marginTop: 50 }}>
        Test cases passing: {results.filter(a => a).length} / {results.length}
      </div>
    </div>
  );
}
