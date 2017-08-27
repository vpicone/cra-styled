import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";
import { goToTop } from "react-scrollable-anchor";

const pulsate = keyframes`
    0% {
        transform: scale(1.05);
    }
    15% {
        transform: scale(1);
    }
    25% {
        transform: scale(1.10);
    }
    60% {
        transform: scale(1.02);
    }
    90% {
        transform: scale(1.01);
    }
    100% {
        transform: scale(1.05);
    }
`;

const StyledLogo = styled.img`
  transition: all 5s ease-in-out;
  &:hover {
    transform: rotate(360deg);
    animation: ${pulsate} .8s ease-in-out 0s infinite;
  }
  height: 80px;
  width: 80px;
`;

export default () => <StyledLogo onClick={goToTop} src={logo} />;
