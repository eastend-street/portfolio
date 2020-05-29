import React, { FC } from "react";
import styled from "styled-components";
import githubLogo from "assets/images/logo/github.png";

const Footer: FC = () => (
  <StyledFooter>
    <a
      href="https://github.com/eastend-street"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocialLogo src={githubLogo} alt="Github" />
    </a>
    <Copyright>&copy; Jun Yamada 2019-2020 All rights reserved.</Copyright>
  </StyledFooter>
);

const StyledFooter = styled.footer`
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

export default Footer;
