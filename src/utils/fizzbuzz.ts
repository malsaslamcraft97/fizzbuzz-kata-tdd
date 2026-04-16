type Rule = {
  test: (n: number) => boolean;
  value: string;
};

const defaultRules: Rule[] = [
  { test: (n) => n % 3 === 0, value: "Fizz" },
  { test: (n) => n % 5 === 0, value: "Buzz" },
];

export const fizzbuzz = (n: number, rules: Rule[] = defaultRules): string => {
  const result = rules
    .filter((rule) => rule.test(n))
    .map((rule) => rule.value)
    .join("");

  return result || String(n);
};
