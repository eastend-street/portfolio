import Link, { LinkProps } from "next/link";
import styled from "styled-components";
import Button from "./Button";

interface LinkButtonProps extends LinkProps {
  name: string;
  target?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ name, target, ...props }) => (
  <Link {...props} passHref={true}>
    <a target={target}>
      <Button>{name}</Button>
    </a>
  </Link>
);

export default LinkButton;
