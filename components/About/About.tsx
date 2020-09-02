import styled from "styled-components";
import { LinkButton, ExternalLinkButton } from "components/shared/Button";

import { SKILLS } from "constants/skills";
import { EMAIL } from "constants/info";
import mq from "styles/mediaQuery";

const About: React.FC = () => (
  <Container id="about">
    <Title>ABOUT</Title>
    <Wrapper>
      <PhotoSection>
        <Profile src="assets/images/profile.png" alt="profile" />
      </PhotoSection>
      <AboutSection>
        <Name>Jun Yamada</Name>
        <JobTitle>Front End Engineer</JobTitle>
        <Intro>
          Front end engineer with 3&#43; years of experience in software and
          systems engineering. Specializes in React.js, TypeScript and
          JavaScript. Keen on writing readable and maintainable code and
          repeating verifying and hypothesis to make a user-first product.
        </Intro>
        <SubHeading>Specialties:</SubHeading>
        <Specialties>
          {SKILLS.specialties.map((skill, index) => (
            <WrapSkillLogo key={index}>
              <SkillsLogo src={skill.imagePath} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </WrapSkillLogo>
          ))}
        </Specialties>
        <SubHeading>Other skills:</SubHeading>
        <StyledUl>
          {SKILLS.otherSkills.map((category, index) => (
            <StyledLi key={index}>
              <Category>{category.name}: </Category>
              <span>
                &nbsp;
                {category.skills.map((techName) => `${techName}, `)}
              </span>
            </StyledLi>
          ))}
        </StyledUl>
        <WrapButtons>
          <LinkButton
            name="Resume"
            href="resume_jun_yamada.pdf"
            target="_blank"
          />
          <ExternalLinkButton name="Email" href={`mailto:${EMAIL}`} />
        </WrapButtons>
      </AboutSection>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  background-color: #fff;
  padding-top: 5rem;
  padding-bottom: 10rem;
  ${mq("xs")} {
    padding: 3rem 0;
  }
`;

const Title = styled.h2`
  font-size: 2.125rem;
  text-align: center;
  margin-bottom: 5rem;
  ${mq("xs")} {
    margin-bottom: 3rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  ${mq("sm")} {
    flex-direction: column;
  }
  ${mq("xs")} {
    width: 90%;
  }
`;

const PhotoSection = styled.div`
  text-align: center;
  flex: 50%;
`;

const Profile = styled.img`
  max-width: 50%;
`;

const AboutSection = styled.div`
  flex: 50%;
`;

const Name = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  ${mq("xs")} {
    margin-top: 2rem;
    text-align: center;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.3rem;
  margin: 0 0 1rem;
  opacity: 0.7;
  ${mq("xs")} {
    text-align: center;
  }
`;

const Intro = styled.p`
  font-size: 1.1rem;
  line-height: 1.8rem;
  ${mq("xs")} {
    margin-top: 2rem;
  }
`;

const SubHeading = styled.h4`
  font-size: 1.3rem;
  opacity: 0.7;
  margin: 4rem auto 1rem auto;
`;

const Specialties = styled.div`
  display: flex;
`;

const WrapSkillLogo = styled.div`
  text-align: center;
  margin-right: 3rem;
  ${mq("sm")} {
    margin-right: 2rem;
  }
  ${mq("xs")} {
    margin-right: 1rem;
  }
  ${mq("xxxs")} {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillsLogo = styled.img`
  height: 3rem;
  margin: 0 auto;
`;

const StyledUl = styled.ul`
  margin-top: 0.7rem;
  padding-left: 0rem;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.8rem;
`;

const Category = styled.span`
  font-family: "Open Sans", sans-serif;
  color: inherit;
  opacity: 0.7;
`;

const WrapButtons = styled.div`
  display: flex;
  margin: 3rem auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${mq("xs")} {
    flex-direction: column;
  }
`;

const SkillName = styled.div`
  margin-top: 1rem;
`;

export default About;
