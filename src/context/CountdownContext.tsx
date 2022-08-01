import React, { useContext, useState } from "react";

import type { Children } from "common/types";

const defaultValue: { startCountDown: boolean; BeginCountDown: () => void } = {
  startCountDown: false,
  BeginCountDown: () => {
    return;
  },
};
const countDownContext = React.createContext(defaultValue);

export const useCountDown = () => {
  return useContext(countDownContext);
};

const CountdownContext: React.FC<Children> = ({ children }) => {
  const [startCountDown, setStartCountDown] = useState(false);

  const BeginCountDown = () => {
    setStartCountDown(true);
  };

  return (
    <countDownContext.Provider value={{ startCountDown, BeginCountDown }}>
      {children}
    </countDownContext.Provider>
  );
};

export default CountdownContext;
