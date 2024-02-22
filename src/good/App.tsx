import { FC } from "react";
import { SubmitRequest } from "./SubmitRequest";
import { AppProps } from "../common";
import { TimeSince } from "./TimeSince";
import { TimeProviderContextProvider } from "./context";

export const App: FC<AppProps> = ({ date }) => {
  return (
    <TimeProviderContextProvider timeProvider={() => new Date()}>
      <TimeSince date={date} />
      <SubmitRequest date={date} />
    </TimeProviderContextProvider>
  );
};
