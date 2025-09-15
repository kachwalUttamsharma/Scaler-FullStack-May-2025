import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";
import { describe, test, vi, expect } from "vitest";

describe("Pagination Component", () => {
  test("renders current page number", () => {
    render(
      <Pagination pageNo={5} handlePrev={() => {}} handleNext={() => {}} />
    );
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("calls handlePrev when Previous button is clicked", () => {
    const handlePrev = vi.fn();
    render(
      <Pagination pageNo={1} handlePrev={handlePrev} handleNext={() => {}} />
    );
    const prevButton = screen.getByRole("button", { name: /previous page/i });
    fireEvent.click(prevButton);
    expect(handlePrev).toHaveBeenCalledTimes(1);
  });

  test("calls handleNext when Next button is clicked", () => {
    const handleNext = vi.fn();
    render(
      <Pagination pageNo={1} handlePrev={() => {}} handleNext={handleNext} />
    );
    const nextButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextButton);
    expect(handleNext).toHaveBeenCalledTimes(1);
  });
});
