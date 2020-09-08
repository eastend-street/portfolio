import React from 'react';
import ExternalLink from 'components/shared/ExternalLink';
import Button from './Button';

interface ExternalLinkButtonProps {
  name: string;
  href: string;
  target?: string;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  name,
  href,
  target = '_blank',
}) => (
  <ExternalLink href={href} target={target}>
    <Button>{name}</Button>
  </ExternalLink>
);

export default ExternalLinkButton;
