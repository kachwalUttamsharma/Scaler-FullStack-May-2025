import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("Counter Component Test Cases", () => {
  test("Initial Rendering Testing", () => {
    render(<Counter />);
    // selections
    const countText = screen.getByText("Count is 0");
    const plusButton = screen.getByText("+");
    const minusButton = screen.getByText("-");
    const header = screen.getByText("Counter");
    const mismatchText = screen.queryByText("Counter1");

    // assertions
    expect(countText).toBeInTheDocument();
    expect(plusButton).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(mismatchText).not.toBeInTheDocument();
  });

  test("increment the counter", () => {
    render(<Counter />);
    const plusButton = screen.getByText("+");
    const isZeroPresent = screen.getByText("Count is 0");
    expect(isZeroPresent).toBeInTheDocument();
    fireEvent.click(plusButton);
    const isOnePresent = screen.getByText("Count is 1");
    expect(isOnePresent).toBeInTheDocument();
  });

  test("decrement the counter", () => {
    render(<Counter />);
    const minusButton = screen.getByText("-");
    const isZeroPresent = screen.getByText("Count is 0");
    expect(isZeroPresent).toBeInTheDocument();
    fireEvent.click(minusButton);
    const isMinusOnePresent = screen.getByText("Count is -1");
    expect(isMinusOnePresent).toBeInTheDocument();
  });
});
