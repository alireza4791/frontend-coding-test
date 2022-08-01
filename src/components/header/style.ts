import styled from "styled-components";

import type { Mode } from "common/types";

export const container = styled.div<Mode>`
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  min-height: 3rem;
  background-color: ${({ mode }) => (mode === "dark" ? "#333338" : "#FFFFFF")};
`;
