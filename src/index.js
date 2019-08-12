import Calculator from "./Calculator-js-solution";

import ReactDOM from "react-dom";
import React from "react";
import TestCasesHOC from "./TestCasesHOC";
const WrappedCalculator = TestCasesHOC(Calculator);

ReactDOM.render(<WrappedCalculator />, document.getElementById("root"));
