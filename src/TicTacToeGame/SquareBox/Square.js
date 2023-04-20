import React from "react";

const boxStyle = {
  background: "lightblue",
  border: "1px solid",
  height: "100px",
  width: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Square = (props) => {
  return (
    <div onClick={props.onClick} style={boxStyle} className="square">
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;