import React from "react";

function textbox() {
  return (
    <div className="home">
      <h1>Enter your name.</h1>
      <form>
        <div>
          <label></label>

          <input type="text" name="name" />
        </div>
      </form>
    </div>
  );
}

export default textbox;
