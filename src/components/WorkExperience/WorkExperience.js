import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import StyledButton from "../StyledButton/StyledButton";
// import resume from "../../static/pdf/resume_jun_yamada.pdf";

const ContentWorkExperience = styled(Grid)`
  && {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #fcfcfc;
  }
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
  }
`;

const Occupation = styled(Typography)`
  && {
    color: inherit;
    font-weight: bold;
  }
`;

const CompanyName = styled(Typography)`
  && {
    color: inherit;
    margin-top: 0;
  }
`;

const Period = styled(Typography)`
  && {
    color: inherit;
    margin-top: 0.5rem;
    opacity: 0.8;
  }
`;
const Place = styled(Typography)`
  && {
    color: inherit;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  margin-top: 1.5rem;
  /* margin-left: 1rem; */
`;

const SkillDescription = styled.div`
  margin: 1.5rem auto auto auto;
`;

const DescSentence = styled(Typography)`
  && {
    display: inline;
    color: inherit;
  }
`;

const StyledUl = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
  /* list-style-position: inside; */
  color: inherit;
`;

const StyledLi = styled.li`
  margin-top: 0.5rem;
`;

const EachCompany = styled.div`
  margin-top: 5rem;
`;

const ContentButton = styled.div`
  margin-top: 4rem;
  text-align: center;
`;

class WorkExperience extends Component {
  render() {
    return (
      <ContentWorkExperience container justify="center">
        <Grid item xs={12}>
          <Title variant="h4">EXPERIENCE</Title>
        </Grid>
        <Grid item xs={11} sm={8}>
          <EachCompany>
            <Occupation variant="h5">Software Engineer</Occupation>
            <CompanyName variant="subtitle1">bizocean Co., Ltd.</CompanyName>
            <Period variant="subtitle2">
              September 2017 – September 2018 (1year and 1month)
            </Period>
            <Place variant="subtitle2">Tokyo, Japan</Place>
            <Description>
              <StyledUl>
                <StyledLi>
                  <DescSentence>
                    Developed all the front end work, backend API server for
                    advertisement trading system, document creation web service
                    using JavaScript, Vue.js, Python, Django REST framework.
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Constructed cloud infrastructure environment using Google
                    Cloud Platform, Docker
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Analyzed and managed document creation web service for
                    marketing, SEO, and traffic growth
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    As a product owner, held user interview and verified the
                    hypothesis to grow the product using the Design Sprint
                    method, Agile software development
                  </DescSentence>
                </StyledLi>
              </StyledUl>
            </Description>
            <SkillDescription>
              <DescSentence>
                Vue.js(JavaScript), Django(Python), Django REST framework,
                HTML5, CSS3, SCSS, jQuery, Docker, MySQL, Google Cloud Platform,
                REST API, Trello, Asana, Backlog, Google Analytics, Google
                search console, Google keyword planners
              </DescSentence>
            </SkillDescription>
          </EachCompany>
          <EachCompany>
            <Occupation variant="h5">Systems Engineer</Occupation>
            <CompanyName variant="subtitle1">
              Mizuho Information & Research Institute, Inc.
            </CompanyName>
            <Period variant="subtitle2">
              April 2016 – August 2017 (1year and 5months)
            </Period>
            <Place variant="subtitle2">Tokyo, Japan</Place>
            <Description>
              <StyledUl>
                <StyledLi>
                  <DescSentence>
                    Tested the banking system made by Java
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Progress management and operated banking network system
                  </DescSentence>
                </StyledLi>
              </StyledUl>
            </Description>
            <SkillDescription>
              <DescSentence>Java, SQL, VBA</DescSentence>
            </SkillDescription>
          </EachCompany>
        </Grid>
        <Grid item xs={10} sm={8}>
          <ContentButton>
            {/* <StyledButton name="Resume" url={process.env.PUBLIC_URL + '/resume_jun_yamada.pdf'} target="_blank" rel="nofollow"/> */}
            <StyledButton name="Email" url="mailto:jun.yamada0097@gmail.com" />
          </ContentButton>
        </Grid>
      </ContentWorkExperience>
    );
  }
}

export default WorkExperience;
