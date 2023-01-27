import React from "react";
import "./_button.scss";

function Button({ name, onClick, type, addClass }) {
  return (
    <button className={`button ${addClass}`} type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
