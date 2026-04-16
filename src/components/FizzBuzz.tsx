import { useState } from "react";
import { fizzbuzz } from "../utils/fizzbuzz";

export default function FizzBuzz() {
  const [input, setInput] = useState("1");

  const value = input === "" ? 1 : Number(input);

  return (
    <div>
      <h2>FizzBuzz</h2>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p data-testid="result">{fizzbuzz(value)}</p>
    </div>
  );
}
