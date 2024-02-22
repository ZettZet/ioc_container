import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimeSince } from "./TimeSince";
import { SubmitRequest } from "./SubmitRequest";

test("TimeSince returns valid value(better)", () => {
  render(<TimeSince date={new Date(2019, 9)} anchor={new Date(2022, 9)} />);

  expect(screen.getByText("3 years ago")).toBeTruthy();
});

test("Can't submit request if year less than 3(none)", () => {
  render(<SubmitRequest date={new Date(2019, 9)} anchor={new Date(2021, 9)} />);

  const button = screen.getByRole<HTMLButtonElement>("button");

  expect(button.disabled).toBeTruthy();
});
