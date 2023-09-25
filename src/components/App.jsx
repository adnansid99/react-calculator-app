import { useState } from "react";

const calValues = {
  "btn-4": "/",
  "btn-5": "7",
  "btn-6": "8",
  "btn-7": "9",
  "btn-8": "*",
  "btn-9": "4",
  "btn-10": "5",
  "btn-11": "6",
  "btn-12": "-",
  "btn-13": "1",
  "btn-14": "2",
  "btn-15": "3",
  "btn-16": "+",
  "btn-17": "0",
  "btn-18": ".",
  "btn-19": "=",
};

export default function App() {
  const [outputState, setOutputState] = useState("0");
  const [isLocked, setIsLocked] = useState(true);
  const [pointValueLock, setPointValueLock] = useState(false);

  function doSum(inputString, setOutputState) {
    let result = eval(inputString);
    return setOutputState(result.toString());
  }

  function restrictClick() {
    return { pointerEvents: isLocked ? "none" : "auto" };
  }

  function handleClick(event) {
    const { id, className } = event.target;
    if (id === "btn") {
      setIsLocked(false);
      if (className == "btn-1" || className == "btn-2") {
        if (className == "btn-1") {
          setOutputState("0");
          setIsLocked(true);
        } else {
          setIsLocked(false);
          setOutputState((preValue) => {
            if (outputState == "0") {
              setPointValueLock(false);
              return preValue;
            } else {
              if (outputState.length == 1) {
                setOutputState("0");
                setPointValueLock(false);
                setIsLocked(true);
              } else {
                setPointValueLock(false);
                return preValue.slice(0, -1);
              }
            }
          });
        }
      } else {
        if (calValues[className] == "=") {
          doSum(outputState, setOutputState);
          setIsLocked(false);
        } else {
          setOutputState((preValue) => {
            if (preValue == "0") {
              if (className == "btn-18") {
                // setPointValueLock(true);
                return preValue + calValues[className];
              } else {
                return calValues[className];
              }
            } else {
              return preValue + calValues[className];
            }
          });
        }
      }
    }
  }

  const symbolClick = (event) => {
    handleClick(event);
    setIsLocked(true);
    setPointValueLock(false);
  };

  const pointValueClick = (event) => {
    handleClick(event);
    setPointValueLock(true);
  };
  //   console.log(isClicked);
  return (
    <div className="calculator">
      {/* input Section */}
      <input
        name="outputBar"
        className="outputBar"
        type="text"
        value={outputState}
        readOnly
      />
      {/* input Section */}

      {/* button Section */}
      <div className="buttonGrid">
        <div onClick={handleClick} id="btn" className="btn-1">
          AC
        </div>
        <div onClick={handleClick} id="btn" className="btn-2">
          CE
        </div>
        <div
          style={restrictClick()}
          onClick={symbolClick}
          name="btn-3"
          id="btn"
          className="btn-3"
        >
          <i className="fa-solid fa-percent"></i>
        </div>
        <div
          style={restrictClick()}
          onClick={symbolClick}
          name="btn-4"
          id="btn"
          className="btn-4"
        >
          <i className="fa-solid fa-divide"></i>
        </div>
        <div name="btn-5" onClick={handleClick} id="btn" className="btn-5">
          7
        </div>
        <div name="btn-6" onClick={handleClick} id="btn" className="btn-6">
          8
        </div>
        <div name="btn-7" onClick={handleClick} id="btn" className="btn-7">
          9
        </div>
        <div
          style={restrictClick()}
          onClick={symbolClick}
          name="btn-8"
          id="btn"
          className="btn-8"
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div name="btn-9" onClick={handleClick} id="btn" className="btn-9">
          4
        </div>
        <div name="btn-10" onClick={handleClick} id="btn" className="btn-10">
          5
        </div>
        <div name="btn-11" onClick={handleClick} id="btn" className="btn-11">
          6
        </div>
        <div
          style={restrictClick()}
          onClick={symbolClick}
          name="btn-12"
          id="btn"
          className="btn-12"
        >
          <i className="fa-solid fa-minus"></i>
        </div>
        <div name="btn-13" onClick={handleClick} id="btn" className="btn-13">
          1
        </div>
        <div name="btn-14" onClick={handleClick} id="btn" className="btn-14">
          2
        </div>
        <div name="btn-15" onClick={handleClick} id="btn" className="btn-15">
          3
        </div>
        <div
          style={restrictClick()}
          onClick={symbolClick}
          name="btn-16"
          id="btn"
          className="btn-16"
        >
          <i className="fa-solid fa-plus"></i>
        </div>
        <div name="btn-17" onClick={handleClick} id="btn" className="btn-17">
          0
        </div>
        <div
          name="btn-18"
          onClick={pointValueClick}
          style={{ pointerEvents: pointValueLock ? "none" : "auto" }}
          id="btn"
          className="btn-18"
        >
          .
        </div>
        <div name="btn-19" onClick={handleClick} id="btn" className="btn-19">
          <i className="fa-solid fa-equals"></i>
        </div>
      </div>
      {/* button Section */}
    </div>
  );
}
