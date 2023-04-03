import React from "react";
import Hexgrid from "./Hex";

function Frame() {
  const frameStyle = {
    width: "60%",
    height: "30%",
    border: "5px solid #000",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    marginTop: "50px",
  

  };

  return (
    <div className="home">
      <div style={frameStyle}>
        <Hexgrid />
      </div>
    </div>
  );
}

export default Frame;
