import { FC, PropsWithChildren, createContext, useContext } from "react";

type TimeProvider = () => Date;

const TimeProviderContext = createContext<TimeProvider | null>(null);

export const TimeProviderContextProvider: FC<
  PropsWithChildren<{ timeProvider: TimeProvider }>
> = ({ children, timeProvider }) => {
  return (
    <TimeProviderContext.Provider value={timeProvider}>
      {children}
    </TimeProviderContext.Provider>
  );
};

export const useTimeProvider = () => {
  const context = useContext(TimeProviderContext);

  if (context === null) {
    throw new Error("No time provider found");
  }

  return context;
};
