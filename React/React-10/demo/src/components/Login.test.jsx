import { fireEvent, render, screen } from "@testing-library/react";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import Login from "./Login";

describe("Login component test cases", () => {
  let userNameInput;
  let passwordInput;
  let subitButton;

  // it execute before each test is executed
  beforeEach(() => {
    render(<Login />);
    userNameInput = screen.getByPlaceholderText("enter username");
    passwordInput = screen.getByPlaceholderText("enter password");
    subitButton = screen.getByRole("button");
  });

  beforeAll(() => {});

  afterEach(() => {});

  afterAll(() => {});

  test("is form rendered", () => {
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(subitButton).toBeInTheDocument();
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
  });

  test("check for username change event", () => {
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    fireEvent.change(userNameInput, { target: { value: "Prabhu" } });
    expect(userNameInput.value).toBe("Prabhu");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
  });

  test("check for password change event", () => {
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    fireEvent.change(passwordInput, { target: { value: "test1234" } });
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("test1234");
    expect(subitButton).toBeDisabled();
  });

  test("check for submit event", () => {
    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(subitButton).toBeDisabled();
    fireEvent.change(userNameInput, { target: { value: "Prabhu" } });
    fireEvent.change(passwordInput, { target: { value: "test1234" } });
    expect(userNameInput.value).toBe("Prabhu");
    expect(passwordInput.value).toBe("test1234");
    expect(subitButton).toBeEnabled();
  });
});
