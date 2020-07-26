import styled from "styled-components";

import { Button } from "@material-ui/core";

type ButtonProps = {
  url: string;
  target?: string;
  name: string;
  rel?: string;
};

const StyledButton: React.FC<ButtonProps> = ({ url, target, name }) => (
  <StyledAnchor href={url} target={target} rel="noopener noreferrer">
    <StyledResumeButton>{name}</StyledResumeButton>
  </StyledAnchor>
);

const StyledResumeButton = styled(Button)`
  && {
    background-color: transparent;
    font-family: inherit;
    border: 0.01rem solid #4e4e4e;
    border-radius: 0rem;
    text-transform: none;
    padding: 0.5rem;
    margin: 1rem 1rem 1rem 0;
    width: 80%;
    max-width: 15rem;
    color: #4e4e4e;
    @media (max-width: 960px) {
      margin: 1rem;
    }
    /* :hover {
      background-color: #eee;
      color: #fff;
      border: 0.01rem solid #eee;
      transition: 0.5s;
    } */
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default StyledButton;
