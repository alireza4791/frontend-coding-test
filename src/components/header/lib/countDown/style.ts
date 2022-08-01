import styled from "styled-components";

import { device } from "common/constants/mediaQueries";
import type { List } from "common/types";

export const UL = styled.ul<List>`
  display: flex;
  justify-content: center;
  list-style: none;
  width: 100%;
  overflow: hidden;
  position: relative;
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0;
  /* animation-name: header-animation;
    animation-duration: 1.2s; */
  li {
    width: 100%;
    color: ${({ mode }) => (mode === "dark" ? "white" : "black")};
    font-size: 14px;
    font-family: Georgia;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }
  /* @keyframes header-animation {
    0% {right: -800px;}
    100% {right: 0px;}
    } */

  @media ${device.tablet} {
    width: 100%;
    padding-left: 1rem;
    li {
      width: 100%;
      text-align: center;
    }
  }
  @media ${device.mobileL} {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ mode }) =>
      mode === "dark" ? "#333338" : "#FFFFFF"};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3rem;
    z-index: 10;
    transition: transform 0.3s ease-in-out;
    li {
      width: 100%;
      height: 2rem;
      text-align: center;
      color: ${({ mode }) => (mode === "dark" ? "white" : "black")};
      margin-right: 0px;
      margin-bottom: 1.25rem;
    }
  }
`;
