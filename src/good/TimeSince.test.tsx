import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TimeSince } from "./TimeSince";
import { TimeProviderContextProvider } from "./context";
import { SubmitRequest } from "./SubmitRequest";

test("TimeSince returns valid value(good)", () => {
  render(
    <TimeProviderContextProvider timeProvider={() => new Date(2022, 9)}>
      <TimeSince date={new Date(2019, 9)} />
    </TimeProviderContextProvider>
  );

  expect(screen.getByText("3 years ago")).toBeTruthy();
});

test("Can't submit request if year less than 3(good)", () => {
  render(
    <TimeProviderContextProvider timeProvider={() => new Date(2021, 9)}>
      <SubmitRequest date={new Date(2019, 9)} />
    </TimeProviderContextProvider>
  );

  const button = screen.getByRole<HTMLButtonElement>("button");

  expect(button.disabled).toBeTruthy();
});
