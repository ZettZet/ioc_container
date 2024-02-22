import { FC } from "react";
import { SubmitRequest } from "./SubmitRequest";
import { AppProps } from "../common";
import { TimeSince } from "./TimeSince";

export const App: FC<AppProps> = ({ date }) => {
  return (
    <>
      <TimeSince date={date} />
      <SubmitRequest date={date} />
    </>
  );
};
