import React from 'react';

interface ExternalLink {
  name: string;
  href: string | undefined;
  children: React.ReactNode;
  target?: string;
}

const ExternalLink: React.FC<ExternalLink> = ({
  name,
  href,
  target = '_blank',
  children,
}) => (
  <>
    {href ? (
      <a href={href} target={target} data-testid={`external-link-${name}`}>
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </>
);

export default ExternalLink;
