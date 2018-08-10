import React from "react";

const Character = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "enter"
  };

  return (
    <div onClick={props.onClick} style={style}>
      {props.character}
    </div>
  );
};

export default Character;
