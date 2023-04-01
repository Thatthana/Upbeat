import React, { Usestate } from "react";
import "./App.css";
import Button from "./components/button";
import { BUTTON_TYPES } from "./data/button";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <img src="picture/upbeat.png" className="logo" alt="" />
      <div className="button-wrapper">
        <Link to="./pagePlayer" className="text">
          <Button type={BUTTON_TYPES.PRIMARY} btnText="Start" />
        </Link>
        <Link to="./pageConfigs" className="text">
          <Button type={BUTTON_TYPES.SECONDARY} btnText="Configs" />
        </Link>
        <Link to="./pageHowtoplay" className="text">
          <Button type={BUTTON_TYPES.TERTIARY} btnText="How to play ?" />
        </Link>
      </div>
    </div>
  );
};

export default App;
