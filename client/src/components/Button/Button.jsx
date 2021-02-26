import React from "react";
import "./Button.css";

function BtnStyle(props) {
  return (
    <div className="buttons">
      <button {...props} className="btn-hover color-1">
        SUBMIT
      </button>
    </div>
  );
}

export default BtnStyle;
