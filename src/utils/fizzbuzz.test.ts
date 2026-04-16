import { describe, it, expect } from "vitest";
import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("returns number for values not divisible by 3 or 5", () => {
    [1, 2, 4, 7, 8].forEach((n) => {
      expect(fizzbuzz(n)).toBe(String(n));
    });
  });

  it("returns Fizz for all multiples of 3", () => {
    [3, 6, 9, 12].forEach((n) => {
      expect(fizzbuzz(n)).toBe("Fizz");
    });
  });

  it("returns Buzz for all multiples of 5", () => {
    [5, 10, 20].forEach((n) => {
      expect(fizzbuzz(n)).toBe("Buzz");
    });
  });

  it("returns FizzBuzz for all multiples of 15", () => {
    [15, 30, 45].forEach((n) => {
      expect(fizzbuzz(n)).toBe("FizzBuzz");
    });
  });

  it("returns Fizz for multiples of 3", () => {
    const multiplesOf3 = Array.from({ length: 10 }, (_, i) => (i + 1) * 3);

    multiplesOf3.forEach((n) => {
      if (n % 5 !== 0) {
        expect(fizzbuzz(n)).toBe("Fizz");
      }
    });
  });

  it("does not return Fizz for non-multiples of 3", () => {
    [1, 2, 4, 7].forEach((n) => {
      expect(fizzbuzz(n)).not.toBe("Fizz");
    });
  });

  it("combines multiple matching rules", () => {
    const result = fizzbuzz(15);
    expect(result).toContain("Fizz");
    expect(result).toContain("Buzz");
  });

  it("supports custom rules", () => {
    const customRules = [{ test: (n: number) => n % 7 === 0, value: "Foo" }];

    expect(fizzbuzz(7, customRules)).toBe("Foo");
  });
});
