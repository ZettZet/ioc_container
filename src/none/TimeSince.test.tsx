import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimeSince } from "./TimeSince";
import { SubmitRequest } from "./SubmitRequest";

test("TimeSince returns valid value(none)", () => {
  vi.spyOn(Date, "now").mockImplementationOnce(() =>
    new Date(2022, 9).valueOf()
  );
  render(<TimeSince date={new Date(2019, 9)} />);

  expect(screen.getByText("3 years ago")).toBeTruthy();
});

test("Can't submit request if year less than 3(none)", () => {
  vi.spyOn(Date, "now").mockImplementationOnce(() =>
    new Date(2021, 9).valueOf()
  );
  render(<SubmitRequest date={new Date(2019, 9)} />);

  const button = screen.getByRole<HTMLButtonElement>("button");

  expect(button.disabled).toBeTruthy();
});
