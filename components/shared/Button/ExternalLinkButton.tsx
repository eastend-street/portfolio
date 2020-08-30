import Button from "./Button";
import { ExternalLink } from "components/shared/Link";

interface ExternalLinkButtonProps {
  name: string;
  href: string;
  target?: string;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  name,
  href,
  target,
}) => (
  <ExternalLink href={href} target={target}>
    <Button>{name}</Button>
  </ExternalLink>
);

export default ExternalLinkButton;
