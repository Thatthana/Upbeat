import { useState, useEffect } from "react";
import Timer from "../components/timer";
import Money from "../components/money";
import Turn from "../components/turn";

export default function gamePage() {
  return (
    <div>
      <Turn />
      <Timer />
      <Money />
    </div>
  );
}
