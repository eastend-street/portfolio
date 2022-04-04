import { FC, ComponentPropsWithoutRef } from 'react';

import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
