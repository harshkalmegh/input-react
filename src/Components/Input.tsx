import { useState } from "react";
import TextShow from "./TextShow";

/**
 * Algorithm
 * 1. create a input field
 * 2. use useState to maintain a state
 * 3. create a function implement to onChange
 * 4. update input value to state by set state
 * 5. show the input data by state
 */

function Input() {
  const [input, setInput] = useState("");

  const handleUpdate = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleUpdate}
        value={input}
        placeholder="Enter Here"
      />
      <TextShow data={input} />
    </div>
  );
}

export default Input;
