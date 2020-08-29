import Button from "./Button";

interface ExternalLinkButtonProps {
  name: string;
  href: string;
  target?: string;
}

const ExternalLinkButton: React.FC<ExternalLinkButtonProps> = ({
  name,
  href,
  target = "_blank",
}) => (
  <a href={href} target={target}>
    <Button>{name}</Button>
  </a>
);

export default ExternalLinkButton;
