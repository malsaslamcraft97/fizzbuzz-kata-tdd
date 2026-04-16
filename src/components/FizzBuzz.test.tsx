import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz component", () => {
  it("shows fizzbuzz output", async () => {
    const user = userEvent.setup();
    render(<FizzBuzz />);

    const input = screen.getAllByRole("spinbutton")[0];

    await user.clear(input);
    await user.type(input, "15");

    expect(screen.getByTestId("result")).toHaveTextContent("FizzBuzz");
  });

  it("shows default value when input is cleared", async () => {
    const user = userEvent.setup();
    render(<FizzBuzz />);

    const input = screen.getAllByRole("spinbutton")[0];

    await user.clear(input);

    expect(screen.getByTestId("result")).toHaveTextContent("1");
  });

  it("allows adding a custom rule and reflects in output", async () => {
    const user = userEvent.setup();
    render(<FizzBuzz />);

    const input = screen.getAllByRole("spinbutton")[0];

    // Add new rule
    await user.type(screen.getByTestId("rule-number-input"), "2");
    await user.type(screen.getByTestId("rule-text-input"), "Foo");
    await user.click(screen.getByText("Add Rule"));

    await user.clear(input);
    await user.type(input, "2");

    expect(screen.getByTestId("result")).toHaveTextContent("Foo");
  });
});
