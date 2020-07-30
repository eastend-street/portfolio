import styled from "styled-components";
import { ButtonStyle } from "./style";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => <StyledButton {...props} />;

export default Button;

const StyledButton = styled.button`
  ${ButtonStyle}
`;
