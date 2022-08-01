import styled from "styled-components";

import type { Mode } from "common/types";

export const container = styled.div<Mode>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ mode }) => (mode === "dark" ? "#19191b" : "#F0F0F0")};
  button {
    cursor: pointer;
    width: 100%;
    max-width: 15rem;
    height: 100%;
    max-height: 4rem;
    padding: 1rem;
    background-color: rgb(37 99 235);
    color: white;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 15px;
  }
`;
