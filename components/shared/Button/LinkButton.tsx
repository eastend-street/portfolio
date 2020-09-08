import React from 'react';
import Link, { LinkProps } from 'next/link';
import Button from './Button';

interface LinkButtonProps extends LinkProps {
  name: string;
  href: string;
  target?: string;
  prefetch?: boolean
}

const LinkButton: React.FC<LinkButtonProps> = ({
  name,
  href,
  target = '_self',
  prefetch = true,
}) => (
  <Link href={href} prefetch={prefetch}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a target={target}>
      <Button>{name}</Button>
    </a>
  </Link>
);

export default LinkButton;
