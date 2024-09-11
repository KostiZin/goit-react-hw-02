import React from "react";
import { useState } from "react";

const ClickCounter = ({ value, onUpdate }) => {
  //   const [clicks, setClicks] = useState(784);

  //   const handleClick = () => {
  //     setClicks(clicks + 1);
  //   };

  return (
    <div>
      <button onClick={onUpdate}>Current: {value}</button>
    </div>
  );
};

export default ClickCounter;
