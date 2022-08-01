import styled from "styled-components";

import { device } from "common/constants/mediaQueries";
import type { BurgerMenu } from "common/types";

export const Container = styled.div<BurgerMenu>`
  display: none;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 20;
  cursor: pointer;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ background }) => background};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media ${device.mobileL} {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;
