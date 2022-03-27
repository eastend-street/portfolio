import React from 'react';
import Link, { LinkProps } from 'next/link';
import Button from './Button';

interface LinkButtonProps extends LinkProps {
  name: string;
  href: string;
  target?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  name,
  href,
  target = '_self',
}) => (
  <Link href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a target={target} data-testid={`link-${name}`}>
      <Button>{name}</Button>
    </a>
  </Link>
);

export default LinkButton;
