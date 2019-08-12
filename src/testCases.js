export default [
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
    inputs: [1, 1, "clear", 1],
    output: 1
  },
  {
    inputs: [1, 1, "+", "-", 1, "÷"],
    output: 10
  },
  {
    inputs: ["-", 1, 1, "="],
    output: -11
  },
  {
    inputs: ["-", 1, 1, "=", 1, 1],
    output: 11
  }
];
