import { useState, useEffect } from "react";
import Timer from "../components/timer";
import Money from "../components/money";
import Turn from "../components/turn";
import Frame from "../components/Frame";

export default function gamePage() {
  return (
    <div>
      <Turn />
      <Timer />
      <Money />
      <Frame />
    </div>
  );
}
