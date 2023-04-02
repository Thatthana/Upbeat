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
    <div  className="home">
      <h1 style={{ color: "black" }} className="textplan">
        Construction Plan
      </h1>
      <textarea 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your construction plan here.. ."
        className="inputplan"
      />
      <button onClick={handleClick} className="saveplan">
        Save
      </button>
    </div>
  );
}