import { useState } from "react";
import Counter from "./components/Counter";
import FizzBuzz from "./components/FizzBuzz";

export default function App() {
  const [tab, setTab] = useState<"fizz" | "counter">("fizz");

  return (
    <div style={{ padding: 20 }}>
      <nav>
        <button onClick={() => setTab("fizz")}>FizzBuzz</button>
        <button onClick={() => setTab("counter")}>Counter</button>
      </nav>

      <hr />

      {tab === "fizz" ? <FizzBuzz /> : <Counter />}
    </div>
  );
}
