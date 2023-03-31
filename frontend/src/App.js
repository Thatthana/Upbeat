import React, { Usestate } from "react";
import "./App.css";
import Button from "./components/button";
import { BUTTON_TYPES } from "./data/button";

const App = () => {
  return (
    <div className="app">
      <img src="picture/upbeat.png" className="logo" alt="" />
      <div className="button-wrapper">
        <Button type={BUTTON_TYPES.PRIMARY} btnText="Start" />
        <Button type={BUTTON_TYPES.SECONDARY} btnText="Configs" />
        <Button type={BUTTON_TYPES.TERTIARY} btnText="How to play ?" />
      </div>
    </div>
  );
};

export default App;
