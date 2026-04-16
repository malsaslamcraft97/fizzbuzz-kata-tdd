import { useState } from "react";
import { fizzbuzz } from "../utils/fizzbuzz";

export default function FizzBuzz() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2>FizzBuzz</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p data-testid="result">{fizzbuzz(value)}</p>
    </div>
  );
}
