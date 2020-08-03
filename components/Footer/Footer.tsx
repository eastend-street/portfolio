import styled from "styled-components";
import { GITHUB_URL } from "constants/info";

const Footer: React.FC = () => (
  <Container>
    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
      <SocialLogo src="assets/images/logo/github.png" alt="Github" />
    </a>
    <Copyright>
      &copy; Jun Yamada {new Date().getFullYear()} All rights reserved.
    </Copyright>
  </Container>
);

export default Footer;

const Container = styled.footer`
  text-align: center;
  padding: 3rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: #aea9a5;
  margin-top: 1rem;
`;

const SocialLogo = styled.img`
  text-align: center;
  height: 2rem;
  margin: auto 1rem;
  transition: 0.5s;
  :hover {
    opacity: 0.7;
  }
`;
