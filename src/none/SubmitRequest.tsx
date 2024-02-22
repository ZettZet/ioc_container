import { FC } from "react";

type SubmitRequestProps = {
  date: Date;
};

export const SubmitRequest: FC<SubmitRequestProps> = ({ date }) => {
  const seconds = Date.now().valueOf() - date.valueOf();
  const interval = Math.floor(seconds / (1000 * 60 * 60 * 24 * 365));
  const disabled = interval < 3;

  return <button disabled={disabled}>Submit</button>;
};
