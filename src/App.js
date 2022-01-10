import "./App.css";
import Buttons from "./Components/buttons";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const allowedSymbols = ["/", "*", "%", "+", "-", ".", "(", ")"];
let clearNow = false;

function App() {
  const [result, setResult] = useState("");
  ///////////////////////Calculator logic/////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  const handleClick = (button) => {
    if (!button) return; //If there is no button, return

    if (button === "AC" || button === "Delete") {
      //If button is AC or Delete, clear input field
      clear();
      return;
    }
    if (button === "C" || button === "Backspace") {
      //If button is C or Backspace, delete input from the end one time per press
      backspace();
      return;
    }
    if (button === "equal" || button === "Enter") {
      // if button is = or Enter, calculate answer
      calculate();
      return;
    }
    if (button === "opposite") {
      //if button is +/- , add or remove minus from the number
      opposite();
      return;
    }

    if (allowedSymbols.includes(button)) typeToScreen(button); // if button pressed has allowed symbols, type them to input field
    if (!Number(button)) return; // if button is not a number, return
    typeToScreen(button); //types everything that passes through filter
  };

  ///////////////////////////////////
  //////Functions///////////////////
  const typeToScreen = (button) => {
    clearNow = false;
    setResult(result.concat(button));
  };
  const clear = () => {
    setResult("");
    clearNow = false;
  };
  const backspace = () => {
    clearNow ? clear() : setResult(result.slice(0, -1));
  };
  const calculate = () => {
    clearNow = true;
    try {
      setResult(eval(result).toString());
      clearNow = true;
    } catch (err) {
      setResult("Error");
    }
  };
  const opposite = () => {
    result[0] === "-"
      ? setResult(result.slice(1))
      : setResult("-".concat(result));
    // setResult(result.unshift("-")
  };
  ///////////////////////////////////////////////////////////////////////////////////
  return (
    <div className="App" tabIndex="0">
      <div className="inputContainer">
        <form>
          <input type="text" value={result} />
        </form>
      </div>
      <Buttons onButtonClick={handleClick} onKeyPress={handleClick}></Buttons>
    </div>
  );
}

export default App;
