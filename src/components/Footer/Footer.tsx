import React from "react";
import styled from "styled-components";
import githubLogo from "../../assets/images/logo/github.png";
import linkedInLogo from "../../assets/images/logo/linkedin.png";

const StyledFooter = styled.div`
  /* background-color: #fcfcfc; */
  padding: 3rem;
`;

const Copyright = styled.p`
  text-align: center;
  color: #aea9a5;
  margin-top: 5rem;
`;

const ContentSocial = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const SocialLogo = styled.img`
  text-align: center;
  height: 2rem;
  margin: auto 1rem;
  :hover {
    opacity: 0.7;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <ContentSocial>
        <a
          href="https://github.com/eastend-street"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLogo src={githubLogo} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jun-yamada-0097"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialLogo src={linkedInLogo} alt="LinkedIn" />
        </a>
      </ContentSocial>
      <Copyright>&copy; Jun Yamada 2019-2020 All rights reserved.</Copyright>
    </StyledFooter>
  );
};

export default Footer;
