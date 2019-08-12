import Calculator from "./Calculator-typescript-hooks";

import React from "react";
import ReactDOM from "react-dom";
import TestCasesWrapper from "./TestCasesWrapper";

ReactDOM.render(
  <TestCasesWrapper>
    <Calculator />
  </TestCasesWrapper>,
  document.getElementById("root")
);
