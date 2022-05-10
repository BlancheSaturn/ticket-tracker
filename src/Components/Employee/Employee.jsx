import React, { useState } from "react";
import "./Employee.scss";
import addition from "../../asset/images/addition.png";
import subtraction from "../../asset/images/subtraction.png";

const Employee = ({ name, role }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <section>
      <div className="employee-content">
        <p>
          {name} <br /> {role}{" "}
        </p>
        <div className="employee__counter">
          <p className="count">Counter</p>
          <p className="count">{counter}</p>
          <img
            src={subtraction}
            alt=""
            onClick={handleDecrement}
            className="employee__sub--sign"
          />
          <img
            src={addition}
            alt=""
            onClick={handleIncrement}
            className="employee__add--sign"
          />
        </div>
      </div>
    </section>
  );
};

export default Employee;
