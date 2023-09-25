/* eslint-disable react/prop-types */
import { useState } from "react";
import ButtonSection from "./ButtonSection";

export default function OutputBar() {
  const [valueState, setValueState] = useState([2, 4, "rtgr"]);

  <ButtonSection setValueState={setValueState} />;
  return (
    <input
      name="outputBar"
      className="outputBar"
      type="text"
      value={valueState}
      readOnly
    />
  );
}
