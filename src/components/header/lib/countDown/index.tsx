import type React from "react";
import { useEffect, useState } from "react";

import * as S from "./style";
import { useCountDown } from "context/CountdownContext";
import type { Open } from "common/types";
import { useMode } from "context/ThemeContext";

// const headerList = ['Home', 'Documentation', 'Examples', 'Blog'];

const CountDown: React.FC<Open> = ({ open }) => {
  const [count, setCount] = useState(15);
  const { startCountDown } = useCountDown();
  const mode = useMode();

  useEffect(() => {
    // reduces the count by 1 every one second until reduced to zero if startCountDown is true
    setInterval(() => {
      if (startCountDown) {
        setCount((prev: number) => {
          if (prev > 0) {
            return prev - 1;
          }
          return 0;
        });
      }
    }, 1000);
  }, [startCountDown]);

  // const renderHeaderList = () => {
  //   return headerList.map((item, index) => {
  //     return <li key={index}>{item}</li>;
  //   });
  // };

  return (
    <S.UL open={open} mode={mode}>
      {/* un comment the code in this file if you wish to see other menu items for the header */}
      {/* {renderHeaderList()} */}
      <li>{count} s</li>
    </S.UL>
  );
};

export default CountDown;
