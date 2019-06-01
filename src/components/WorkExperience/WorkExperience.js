import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const ContentWorkExperience = styled(Grid)`
  && {
    padding-top: 5rem;
    padding-bottom: 10rem;
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
  }
`;

const Period = styled(Typography)`
  && {
    color: #626262;
  }
`;
const Place = styled(Typography)`
  && {
    color: #626262;
  }
`;

const Description = styled.div``;

const SkillDescription = styled.div`
  margin-top: 1.5rem;
`;

const DescSentence = styled(Typography)`
  && {
    color: inherit;
  }
`;

const StyledUl = styled.ul`
  margin-top: 0.5rem;
  padding-left: 1rem;
  color: inherit;
`;

const StyledLi = styled.li`
  margin-top: 0.5rem;
`;

const EachCompany = styled.div`
  margin-top: 5rem;
`;

class WorkExperience extends Component {
  render() {
    return (
      <ContentWorkExperience container justify="center">
        <Grid item xs={12}>
          <Title variant="h4">Work experience</Title>
        </Grid>
        <Grid item xs={8}>
          <EachCompany>
            <Occupation variant="h6">Software Engineer</Occupation>
            <CompanyName variant="subtitle1">bizocean Co., Ltd.</CompanyName>
            <Period variant="subtitle2">
              September 2017 – September 2018 (1year and 1month)
            </Period>
            <Place variant="subtitle2">Tokyo, Japan</Place>
            <Description>
              <StyledUl>
                <StyledLi>
                  <DescSentence>
                    Developed house advertisement trading system, document
                    creation web service responsible for all the front end work
                    using Vue.js, service architecture, backend API server using
                    Django REST framework.
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Constructed cloud infrastructure environment using Google
                    cloud platform, Docker
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Analyzed and Managed document creation web service for
                    Marketing, SEO, traffic growth
                  </DescSentence>
                </StyledLi>
                <StyledLi>
                  <DescSentence>
                    Designed new web service using the Design Sprint method,
                    Agile software development
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
            <Occupation variant="h6">Systems Engineer</Occupation>
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
                    Promoted management and operated banking network system
                  </DescSentence>
                </StyledLi>
              </StyledUl>
            </Description>
            <SkillDescription>
              <DescSentence>Java, SQL, VBA</DescSentence>
            </SkillDescription>
          </EachCompany>
        </Grid>
      </ContentWorkExperience>
    );
  }
}

export default WorkExperience;
