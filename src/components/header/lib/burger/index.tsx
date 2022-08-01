import type React from "react";
import { useEffect, useState } from "react";

import * as S from "./style";
import CountDown from "../countDown";
import { useMode } from "context/ThemeContext";

const Burger: React.FC = () => {
  const mode = useMode();
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(() => {
    if (mode === "dark") {
      if (open) {
        return "#F0F0F0";
      } else if (!open) {
        return "#FFFFFF";
      }
    } else if (mode === "light") {
      if (open) {
        return "#19191b";
      } else if (!open) {
        return "#333338";
      }
    }
    return "#F0F0F0";
  });

  useEffect(() => {
    setBackground(() => {
      if (mode === "dark") {
        if (open) {
          return "#F0F0F0";
        } else if (!open) {
          return "#FFFFFF";
        }
      } else if (mode === "light") {
        if (open) {
          return "#19191b";
        } else if (!open) {
          return "#333338";
        }
      }
      return "#F0F0F0";
    });
  }, [mode, open]);

  return (
    <>
      {/* burger menu button */}
      <S.Container
        open={open}
        background={background}
        onClick={() => setOpen(!open)}
      >
        <div />
        <div />
        <div />
      </S.Container>
      {/* count down */}
      <CountDown open={open} />
    </>
  );
};

export default Burger;
