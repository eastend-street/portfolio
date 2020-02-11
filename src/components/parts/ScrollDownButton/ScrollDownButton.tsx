import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

const StyledHashLink = styled(HashLink)`
  padding-top: 40px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    opacity: 0.7;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 0.1rem solid #4e4e4e;
  border-bottom: 0.1rem solid #4e4e4e;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  box-sizing: border-box;
`;

const ScrollDownButton: React.FC = () => {
  return (
    <StyledHashLink smooth={true} to="/#about">
      <StyledSpan></StyledSpan>
    </StyledHashLink>
  );
};

export default ScrollDownButton;
