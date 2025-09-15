import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner";
import { describe, test, expect } from "vitest";

describe("Spinner Component", () => {
  test("renders loader with correct role", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status", { name: /loading/i });
    expect(spinner).toBeInTheDocument();
  });
});
