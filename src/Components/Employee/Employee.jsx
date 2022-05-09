import React, { useState } from "react";
import "./Employee.scss";
import addition from "../../asset/images/addition.png";
import subtraction from "../../asset/images/subtraction.png";

const Employee = ({ name, role }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((count) => count + 1);
  };

  const handleDecrement = () => {
    setCounter((count) => count - 1);
  };

  return (
    <div className="employee-contents">
      <p>{name}</p>
      <p>{role}</p>
      <img
        src={addition}
        alt=""
        onClick={handleIncrement}
        className="employee__add"
      />
      <img
        src={subtraction}
        alt=""
        onClick={handleDecrement}
        className="employee__sub"
      />
    </div>
  );
};

export default Employee;
