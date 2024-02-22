import { FC } from "react";
import { useTimeProvider } from "./context";

type SubmitRequestProps = {
  date: Date;
};

export const SubmitRequest: FC<SubmitRequestProps> = ({ date }) => {
  const timeProvider = useTimeProvider();

  const seconds = timeProvider().valueOf() - date.valueOf();
  const interval = Math.floor(seconds / (1000 * 60 * 60 * 24 * 365));
  const disabled = interval < 3;

  return <button disabled={disabled}>Submit</button>;
};
