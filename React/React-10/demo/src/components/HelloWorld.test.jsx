import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";
import { expect } from "vitest";

test("render hello component", () => {
  render(<HelloWorld />);
  expect(screen.getByText("HelloWorld")).toBeInTheDocument();
});
