import React from 'react';
import Link, { LinkProps } from 'next/link';
import Button from './Button';

interface LinkButtonProps extends LinkProps {
  name: string;
  target?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, target, ...props }) => (
  <Link {...props} passHref>
    <a target={target}>
      <Button>{name}</Button>
    </a>
  </Link>
);

export default LinkButton;
