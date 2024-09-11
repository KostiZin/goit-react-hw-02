import "./App.css";
import CustomButton from "./CustomButton";
import { useState } from "react";
import ClickCounter from "./ClickCounter";

// const App = () => {
//   const [clicks, setClicks] = useState(34);
//   // const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   // const handleToggle = () => {
//   //   setIsOpen(!isOpen);
//   //   console.log(isOpen);
//   // };

//   return (
//     <>
//       {/* <button onClick={handleClick}>Current: {clicks}</button>;
//       <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button> */}
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//     </>
//   );
// };

// Стан з об'єктами

const App = () => {
  const [values, setValues] = useState({
    x: 78,
    y: 89,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1,
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1,
    });
  };

  return (
    <div>
      <p>
        x: {values.x}, y: {values.y}
      </p>

      <button onClick={updateX}>Update</button>
      <button onClick={updateY}>Update</button>
    </div>
  );
};

export default App;
