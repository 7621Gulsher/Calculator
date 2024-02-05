import React, { useState } from "react";
import "./App.css";

interface Props {
  add: boolean;
  sub: boolean;
  mul: boolean;
  div: boolean;
}

function App() {
  const [operand1, setOperand1] = useState<number>(0);
  const [temp, setTemp] = useState<string>("");
  const [operation, setOperation] = useState<Props>({
    add: false,
    sub: false,
    mul: false,
    div: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [flag, setFlag] = useState(false);

  const operator = (operator: string) => {
    if (inputValue !== "") {
      switch (operator) {
        case "+":
          setOperand1(parseInt(inputValue));
          setInputValue(inputValue + "+");
          setOperation({ ...operation, add: true });
          setFlag(true);
          break;
        case "-":
          setOperand1(parseInt(inputValue));
          setInputValue(inputValue + "-");
          setOperation({ ...operation, sub: true });
          setFlag(true);
          break;
        case "*":
          setOperand1(parseInt(inputValue));
          setInputValue(inputValue + "*");
          setOperation({ ...operation, mul: true });
          setFlag(true);
          break;
        case "/":
          setOperand1(parseInt(inputValue));
          setInputValue(inputValue + "/");
          setOperation({ ...operation, div: true });
          setFlag(true);
          break;
        default:
          break;
      }
    }
  };

  const getInput = (i: any) => {
    if (i === "") {
      setInputValue("");
      setFlag(false);
      setTemp("");
    } else {
      setInputValue(inputValue + i);
      if (flag === true) setTemp(temp + i);
    }
  };

  const calculate = () => {
    let x = parseInt(temp);
    let y;
    if (operation.add) y = operand1 + x;
    else if (operation.sub) y = operand1 - x;
    else if (operation.mul) y = operand1 * x;
    else if (operation.div) y = operand1 / x;
    setInputValue("" + y);
    setTemp("");
    setFlag(false);
    setOperation({ add: false, sub: false, mul: false, div: false });
  };

  return (
    <div className="calculator">
      <input className="input" value={inputValue} />
      <div className="number-container">
        {[...Array(9)].map((_, i) => (
          <button onClick={() => getInput(i + 1)} className="number-button">
            {i + 1}
          </button>
        ))}
        <button onClick={() => getInput(0)} className="number-button">
          0
        </button>
        <button className="number-button" onClick={() => getInput("")}>
          C
        </button>
        <button onClick={calculate} className="number-button">
          =
        </button>
      </div>

      <div className="button-container">
        <button className="operator" onClick={() => operator("+")}>
          +
        </button>
        <button className="operator" onClick={() => operator("-")}>
          -
        </button>
        <button className="operator" onClick={() => operator("*")}>
          *
        </button>
        <button className="operator" onClick={() => operator("/")}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
