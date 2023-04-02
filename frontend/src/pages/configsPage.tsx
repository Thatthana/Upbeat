import Slider from "../components/Slider";
import Slider2 from "../components/Slider2";
import Slider3 from "../components/Slider3";


export default function configsPage() {
  return (
    <div className="home">
      <p> Number of rows (m=20)</p>
      <Slider/>
      <p> Number of columns (n=15)</p>
      <Slider/>
      <p> number of minutes allowed for initial construction plan (init_plan_min=5)</p>
      <Slider/>
      <p> number of seconds allowed for initial construction plan (init_plan_sec=0)</p>
      <Slider2/>
      <p> Initial budget (init_budget=10000)</p>
      <Slider3/>
      <p> Initial city center deposit  (init_center_dep=100)</p>
      <Slider/>
      <p> number of minutes allowed for tp construction plan revisions (plan_rev_min=30)</p>
      <Slider/>
      <p>number of seconds allowed for tp construction plan revisions (plan_rev_sec=0)</p>
      <Slider2/>
      <p> Construction plan revision cost (rev_cost=100) </p>
      <Slider/>
      <p> Maximum deposit per region (max_dep=1000000) </p>
      <Slider/>
      <p> Interest rate percentage (interest_pct=5) </p>
      <Slider/>
    </div>
  );
}
