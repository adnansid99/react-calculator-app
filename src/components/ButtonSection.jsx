// import { useState } from "react";
// import OutputBar from "./OutputBar";

// const valueTree = {};

export default function ButtonSection() {
  //   const [dataState, setDataState] = useState(34);

  //   const handleClick = (event) => {
  //       const { id, className } = event.target;
  //       console.log(props)
  //     if (id === "btn") {
  //       setValueState((preValue) => {
  //         return [...preValue, "HI"];
  //       });
  //     }
  //   };

  return (
    <div className="buttonGrid">
      <div id="btn" className="btn-1">
        AC
      </div>
      <div id="btn" className="btn-2">
        CE
      </div>
      <div name="btn-3" id="btn" className="btn-3">
        <i className="fa-solid fa-percent"></i>
      </div>
      <div name="btn-4" id="btn" className="btn-4">
        <i className="fa-solid fa-divide"></i>
      </div>
      <div name="btn-5" id="btn" className="btn-5">
        7
      </div>
      <div name="btn-6" id="btn" className="btn-6">
        8
      </div>
      <div name="btn-7" id="btn" className="btn-7">
        9
      </div>
      <div name="btn-8" id="btn" className="btn-8">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div name="btn-9" id="btn" className="btn-9">
        4
      </div>
      <div name="btn-10" id="btn" className="btn-10">
        5
      </div>
      <div name="btn-11" id="btn" className="btn-11">
        6
      </div>
      <div name="btn-12" id="btn" className="btn-12">
        <i className="fa-solid fa-minus"></i>
      </div>
      <div name="btn-13" id="btn" className="btn-13">
        1
      </div>
      <div name="btn-14" id="btn" className="btn-14">
        2
      </div>
      <div name="btn-15" id="btn" className="btn-15">
        3
      </div>
      <div name="btn-16" id="btn" className="btn-16">
        <i className="fa-solid fa-plus"></i>
      </div>
      <div name="btn-17" id="btn" className="btn-17">
        0
      </div>
      <div name="btn-18" id="btn" className="btn-18">
        .
      </div>
      <div name="btn-19" id="btn" className="btn-19">
        <i className="fa-solid fa-equals"></i>
      </div>
    </div>
  );
}
