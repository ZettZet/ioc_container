import { FC } from "react";

type TimeSinceProps = {
  date: Date
  anchor?: Date
}

export const TimeSince: FC<TimeSinceProps> = ({ date, anchor = new Date() }) => {
  const timeElapsed = anchor.valueOf() - date.valueOf();
  const seconds = Math.floor(timeElapsed / 1000);

  let interval = Math.floor(seconds / (60 * 60 * 24 * 365));
  if (interval > 1) {
    return `${interval} years ago`;
  }

  interval = Math.floor(seconds / (60 * 60 * 24 * 30));
  if (interval > 1) {
    return `${interval} months ago`;
  }

  interval = Math.floor(seconds / (60 * 60 * 24));
  if (interval > 1) {
    return `${interval} days ago`;
  }

  interval = Math.floor(seconds / (60 * 60));
  if (interval > 1) {
    return `${interval} hours ago`;
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }

  return `${seconds} seconds ago`;
};