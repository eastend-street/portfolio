import { ReactNode } from "react";
import Link from "next/link";

interface InnerLinkProps {
  href: string | undefined;
  children: ReactNode;
}

const InnerLink: React.FC<InnerLinkProps> = ({ href, children }) => (
  <>{href ? <Link href={href}>{children}</Link> : <>{children}</>}</>
);

export default InnerLink;
