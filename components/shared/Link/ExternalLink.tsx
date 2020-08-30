interface ExternalLink {
  href: string | undefined;
  children: React.ReactNode;
  target?: string;
}

const ExternalLink: React.FC<ExternalLink> = ({
  href,
  target = "_blank",
  children,
}) => (
  <>
    {href ? (
      <a href={href} target={target}>
        {children}
      </a>
    ) : (
      <>{children}</>
    )}
  </>
);

export default ExternalLink;
