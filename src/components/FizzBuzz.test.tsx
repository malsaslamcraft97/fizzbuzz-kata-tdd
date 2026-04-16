import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz component", () => {
  it("shows fizzbuzz output", async () => {
    const user = userEvent.setup();
    render(<FizzBuzz />);

    const input = screen.getByRole("spinbutton");

    await user.clear(input);
    await user.type(input, "15");

    expect(screen.getByTestId("result")).toHaveTextContent("FizzBuzz");
  });
});
