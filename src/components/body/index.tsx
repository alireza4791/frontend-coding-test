import type React from "react";

import * as S from "./style";
import { useCountDown } from "context/CountdownContext";
import { useMode } from "context/ThemeContext";

const Body: React.FC = () => {
  const { BeginCountDown } = useCountDown();
  const mode = useMode();

  return (
    <S.container mode={mode}>
      <button onClick={() => BeginCountDown()}>Start CountDown</button>
    </S.container>
  );
};

export default Body;
