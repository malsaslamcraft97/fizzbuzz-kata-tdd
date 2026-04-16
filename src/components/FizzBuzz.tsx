import { useState } from "react";
import { fizzbuzz } from "../utils/fizzbuzz";

type UIRule = {
  divisor: number;
  value: string;
};

export default function FizzBuzz() {
  const [input, setInput] = useState("1");

  const [rules, setRules] = useState<UIRule[]>([
    { divisor: 3, value: "Fizz" },
    { divisor: 5, value: "Buzz" },
  ]);

  const [ruleNumber, setRuleNumber] = useState("");
  const [ruleText, setRuleText] = useState("");

  const value = input === "" ? 1 : Number(input);

  const handleAddRule = () => {
    const divisor = Number(ruleNumber);

    if (!divisor || !ruleText) return;

    setRules((prev) => [...prev, { divisor, value: ruleText }]);
    setRuleNumber("");
    setRuleText("");
  };

  // ✅ IMPORTANT: convert UI rules → engine rules
  const engineRules = rules.map((rule) => ({
    test: (n: number) => n % rule.divisor === 0,
    value: rule.value,
  }));

  return (
    <div>
      <h2>FizzBuzz</h2>

      {/* Number input */}
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Result */}
      <p data-testid="result">{fizzbuzz(value, engineRules)}</p>

      <hr />

      {/* Add Rule UI */}
      <h3>Add Rule</h3>

      <input
        data-testid="rule-number-input"
        type="number"
        placeholder="Divisor"
        value={ruleNumber}
        onChange={(e) => setRuleNumber(e.target.value)}
      />

      <input
        data-testid="rule-text-input"
        type="text"
        placeholder="Label"
        value={ruleText}
        onChange={(e) => setRuleText(e.target.value)}
      />

      <button onClick={handleAddRule}>Add Rule</button>
    </div>
  );
}
