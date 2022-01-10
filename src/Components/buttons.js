import "./buttons.css";

const Buttons = (props) => {
  const handleClick = (e) => {
    props.onButtonClick(e.target.id); /////////////Calls function from App.js and sends in the button pressed
  };
  const handleKeyPress = (e) => {
    props.onButtonClick(e.key); /////////////Calls function from App.js and sends in the key pressed
  };
  return (
    <div
      className="buttonsContainer"
      onClick={handleClick}
      onKeyUp={handleKeyPress}
    >
      <button className="symbol" id="AC">
        AC
      </button>
      <button className="symbol" id="C">
        C
      </button>
      <button className="symbol" id="opposite">
        +/-
      </button>
      <button className="symbol" id="%">
        %
      </button>

      <button className="number" id="7">
        7
      </button>
      <button className="number" id="8">
        8
      </button>
      <button className="number" id="9">
        9
      </button>
      <button className="symbol" id="/">
        /
      </button>
      <button className="number" id="4">
        4
      </button>
      <button className="number" id="5">
        5
      </button>
      <button className="number" id="6">
        6
      </button>
      <button className="symbol" id="*">
        *
      </button>
      <button className="number" id="1">
        1
      </button>
      <button className="number" id="2">
        2
      </button>
      <button className="number" id="3">
        3
      </button>
      <button className="symbol" id="-">
        -
      </button>

      <button className="span-two number" id="0">
        0
      </button>

      <button className="symbol" id=".">
        .
      </button>
      <button className="symbol" id="+">
        +
      </button>
      <button className="symbol" id="(">
        (
      </button>
      <button className="symbol" id=")">
        )
      </button>

      <button className="span-two symbol" id="equal">
        =
      </button>
    </div>
  );
};
export default Buttons;
