import { FC } from 'react';

import { ExternalLinkProps } from './types';

const ExternalLink: FC<ExternalLinkProps> = ({
  target = "_blank",
  children,
  ...restProps
}) => (
  <a  target={target} {...restProps}>
    {children}
  </a>
);

export default ExternalLink;
