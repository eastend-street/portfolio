import { FC } from 'react';
import Link from 'next/link';

import Button from '../Button';

import { LinkButtonProps } from './types';

const LinkButton: FC<LinkButtonProps> = ({ href, children, ...restProps }) => (
  <Link href={href} passHref>
    <Button {...restProps}>{children}</Button>
  </Link>
);

export default LinkButton;
