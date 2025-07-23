import React from "react";
import "./style.css";
const ButtonVariants = (props) => {
  const { color, text, varient } = props;
  return (
    <div className="btnGroupData">
        <button className={`cta-button ${varient}`}>
          <span className="circle"></span>
          {text}
          <span className="circle"></span>
        </button>
    </div>
  );
};

export default ButtonVariants;
