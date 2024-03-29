import React from 'react';
import styled from 'styled-components';

import SKILLS from 'constants/skills';
import mq from 'styles/mediaQuery';

const Skills: React.FC = () => (
  <Container>
    <SubHeading>Specialties:</SubHeading>
    <Specialties>
      {SKILLS.specialties.map((skill) => (
        <WrapSkillLogo key={skill.name}>
          <SkillsLogo src={skill.imagePath} alt={skill.name} />
          <SkillName>{skill.name}</SkillName>
        </WrapSkillLogo>
      ))}
    </Specialties>
    <SubHeading>Other Skills:</SubHeading>
    <StyledUl>
      {SKILLS.otherSkills.map((category) => (
        <StyledLi key={category.name}>
          <Category>{category.name}:</Category>
          <span>
            &nbsp;
            {category.skills.map((techName, index) => (
              <span key={techName}>
                {techName}
                {index < category.skills.length - 2 && ', '}
                {index === category.skills.length - 2 && ', and '}
              </span>
            ))}
          </span>
        </StyledLi>
      ))}
    </StyledUl>
  </Container>
);

export default Skills;

const Container = styled.div`
  margin-top: 4rem;
`;

const SubHeading = styled.h4`
  font-size: 1.3rem;
  opacity: 0.7;
  margin: 3rem 0 0;
`;

const Specialties = styled.div`
  display: flex;
`;

const WrapSkillLogo = styled.div`
  text-align: center;
  margin: 0.5rem 3rem 0 0;
  ${mq('sm')} {
    margin-right: 2rem;
  }
  ${mq('xs')} {
    margin-right: 1rem;
  }
  ${mq('xxxs')} {
    margin-right: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const SkillsLogo = styled.img`
  height: 3rem;
  margin: 0 auto;
`;

const StyledUl = styled.ul`
  margin-top: 0.2rem;
  padding-left: 0rem;
  list-style: none;
`;

const StyledLi = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.8rem;
`;

const Category = styled.span`
  font-family: 'Open Sans', sans-serif;
  color: inherit;
  opacity: 0.7;
`;

const SkillName = styled.div`
  margin-top: 1rem;
`;
