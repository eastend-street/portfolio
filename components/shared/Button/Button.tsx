import React, { HTMLAttributes } from "react";
import styled from "styled-components";

const Button: React.FC = React.forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>((props, ref) => <StyledButton ref={ref} {...props} />);

export default Button;

const StyledButton = styled.button`
  display: block;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-radius: 0rem;
  padding: 0.7rem 0.5rem;
  margin: 1rem;
  width: 12rem;
  transition: 0.3s;
  cursor: pointer;
  outline: none;

  @media (max-width: 960px) {
    margin: 1rem;
  }
  :hover {
    opacity: 0.7;
  }
`;