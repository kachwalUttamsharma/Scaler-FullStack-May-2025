import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Product from "./Product";

global.fetch = vi.fn();

describe("Test cases for product components", () => {
  test("render Product Component", () => {
    render(<Product />);
    const getProduct = screen.getByText("Products");
    expect(getProduct).toBeInTheDocument();
  });

  test("fetches the data and displays products", async () => {
    const mockedProductResponse = [
      {
        id: 1,
        title: "product 1",
        price: 25,
        image: "https://placeholderUrl",
      },
      {
        id: 2,
        title: "product 2",
        price: 39,
        image: "https://placeholderUrl",
      },
      {
        id: 3,
        title: "product 3",
        price: 50,
        image: "https://placeholderUrl",
      },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedProductResponse,
    });
    render(<Product />);
    await waitFor(() => {
      expect(screen.getAllByRole("img")).toHaveLength(
        mockedProductResponse.length
      );
      expect(screen.getByText("product 1")).toBeInTheDocument();
      expect(screen.getByText("product 2")).toBeInTheDocument();
    });
  });

  test("testing empty product list", async () => {
    const mockedProducts = [];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockedProducts,
    });

    render(<Product />);

    await waitFor(() => {
      expect(
        screen.queryAllByRole("button", { name: "Add to Card" })
      ).toHaveLength(0);
      expect(screen.queryAllByRole("img")).toHaveLength(0);
      expect(screen.getByText("Products")).toBeInTheDocument();
    });
  });

  test("Testing error handling", async () => {
    fetch.mockRejectedValueOnce("Failed to fetch");
    render(<Product />);
    await waitFor(() => {
      expect(
        screen.queryAllByRole("button", { name: "Add to Card" })
      ).toHaveLength(0);
      expect(screen.queryAllByRole("img")).toHaveLength(0);
      expect(screen.queryByText("Products")).not.toBeInTheDocument();
      expect(screen.getByText("Failed to fetch")).toBeInTheDocument();
    });
  });
});
