import React from 'react';
import ExternalLink from 'components/shared/ExternalLink';
import Button from '../Button';

import { ExternalLinkButtonProps } from './types';

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  href,
  target = '_blank',
  children,
  ...restProps
}) => (
  <ExternalLink href={href} target={target}>
    <Button {...restProps}>{children}</Button>
  </ExternalLink>
);

export default ExternalLinkButton;
