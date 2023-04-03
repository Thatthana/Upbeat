import Timer from "../components/timer";
import Money from "../components/money";
import Turn from "../components/turn";
import Frame from "../components/Frame";
import InputPlan from "../components/InputPlan";

export default function gamePage() {
  return (
    <div>
      <Turn />
      <Timer />
      <Money />
      <Frame />
      <InputPlan />
    </div>
  );
}
