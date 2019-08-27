import React from "react";
import { render, fireEvent } from "@testing-library/react";
import testCases from "./testCases";

export default function TestCaseWrapper(Calculator) {
  const results = [];
  testCases.forEach(a => {
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

  return () => (
    <>
      <Calculator />
      <div id="tests">
        Test cases passing: {results.filter(a => a).length} / {results.length}
      </div>
    </>
  );
}
