import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  it("increments count", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  it("decrements count", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByText("Increment"));
    await user.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  it("resets count to 0", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /increment/i }));
    await user.click(screen.getByRole("button", { name: /increment/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("2");

    await user.click(screen.getByRole("button", { name: /reset/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  it("does not go below 0", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole("button", { name: /decrement/i }));

    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
});
