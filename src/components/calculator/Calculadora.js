import Button from "./Button";
import { useState } from "react";
function Contendor() {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <button type="submit" onClick={handleChange} value={1}>
        1
      </button>

      <p>valor 1: {inputs}</p>
    </>
  );
}
export default Contendor;
