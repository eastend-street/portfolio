import { ReactNode } from "react";

interface ExternalLink {
  href: string | undefined;
  children: ReactNode;
}

const ExternalLink: React.FC<ExternalLink> = ({ href, children }) => (
  <>
    {href ? (
      <a href={href} target="_blank">
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </>
);

export default ExternalLink;
