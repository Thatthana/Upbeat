import { useState } from "react";
import axios from "axios";

export default function InputPlan() {
  const [inputValue, setInputValue] = useState("");
  const [CP, setCP] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setCP(true);
  };

  const handleClick = async () => {
    try {
      await axios.post("/api/write-file", { inputValue });
      console.log("Input saved!");
      alert("Construction plan saved!");
      setCP(false);
    } catch (error) {
      console.error(error);
      alert("Failed to save construction plan.");
    }
  };

  const frameStyle = {
    width: "60%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    marginTop: "50px",
  };

  return (
    <div className="homeplan">
      <h1 style={{ color: "black" }}>Construction Plan</h1>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your construction plan here.. ."
        className="plan"
      />
      <button onClick={handleClick} className="btn-container">
        Save
      </button>
    </div>
  );
}
