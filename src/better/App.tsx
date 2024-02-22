import { FC } from "react";
import { SubmitRequest } from "./SubmitRequest";
import { AppProps } from "../common";
import { TimeSince } from "./TimeSince";

export const App: FC<AppProps & { anchor?: Date }> = ({
  date,
  anchor = new Date(),
}) => {
  return (
    <>
      <TimeSince date={date} anchor={anchor} />
      {/* ошибка специально */}
      <SubmitRequest date={date} anchor={date} />
    </>
  );
};
