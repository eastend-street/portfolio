import { FC } from 'react';

import { ExternalLinkProps } from './types';

const ExternalLink: FC<ExternalLinkProps> = ({
  children,
  ...restProps
}) => (
  <a {...restProps}>
    {children}
  </a>
);

export default ExternalLink;
