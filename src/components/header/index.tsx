import type React from "react";

import * as S from "./style";
import Burger from "./lib/burger";
import { useMode } from "context/ThemeContext";

const Header: React.FC = () => {
  const mode = useMode();

  return (
    <S.container mode={mode}>
      {/* header content */}
      <Burger />
    </S.container>
  );
};

export default Header;
