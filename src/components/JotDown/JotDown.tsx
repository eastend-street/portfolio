import React, { FC, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import StyledButton from "components/ChildComponents/StyledButton/StyledButton";
import JotDownPhoto from "assets/images/websites/jotdown/home-jotdown.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const WorkDetail: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Jot down</title>
      </Helmet>
      <Header />
      <ContentWorkDetail>
        <Grid container justify="center">
          <Grid item xs={12}>
            <StyledAnchor target="_blank" href="https://jotdown.site">
              <Title variant="h4" component="h1">
                Jot down
              </Title>
            </StyledAnchor>
          </Grid>
          <Grid item xs={11} sm={10} md={7}>
            <StyledWorkCard>
              <CardActionArea target="_blank" href="https://jotdown.site">
                <WorkImage image={JotDownPhoto} />
              </CardActionArea>
            </StyledWorkCard>
          </Grid>
        </Grid>
        <ContentDescription>
          <Grid container justify="center">
            <Grid item xs={11} sm={10} md={8} lg={7}>
              <ButtonWrapper>
                <StyledButton
                  name="Visit website"
                  url="https://jotdown.site"
                  target="_blank"
                />
                <StyledButton
                  name="View Github"
                  url="https://github.com/eastend-street/jotdown"
                  target="_blank"
                />
              </ButtonWrapper>
              <WhatIsIt variant="h6" component="h2">
                What is Jot down?
              </WhatIsIt>
              <SiteDescription variant="subtitle1" component="p">
                Jot down is a bookmark and note web service. You can save some
                your favorite website or article to Jot down. Also you can write
                a note with your bookmark.
              </SiteDescription>
              <Technology variant="h6" component="h2">
                Why I created this app
              </Technology>
              <Typography variant="subtitle1" component="p">
                To manage a lot of bookmarks easily. I have been using chrome
                bookmark manager but sometimes I can't find the bookmark that
                I'm looking for. Then I often commented on bookmarks and saved
                them in slack to remember what bookmark is. But also difficult
                to find it again. Jotdown was born to solve these problems.
              </Typography>
              <Technology variant="h6" component="h2">
                Technology
              </Technology>
              <Typography variant="subtitle1" component="p">
                I developed all of the service, front end, back end,
                infrastructure and design. In front end, using React, Redux and
                styled-components that realized correct style application and
                state management. In back end, using Django REST framework,
                Docker, Heroku that established RESTful API communication.
              </Typography>
              <StyledUl>
                <StyledLi>
                  <Category>Front-end: </Category> React.js, Redux,
                  styled-components, Material-ui
                </StyledLi>
                <StyledLi>
                  <Category>Backend: </Category> Django REST framework, Python
                </StyledLi>
                <StyledLi>
                  <Category>Infrastructure: </Category> Docker, Heroku
                </StyledLi>
                <StyledLi>
                  <Category>Others: </Category> REST API, Axios, Gunicorn,
                  Netlify
                </StyledLi>
              </StyledUl>
              <ButtonWrapper>
                <StyledButton
                  name="Visit website"
                  url="https://jotdown.site"
                  target="_blank"
                />
                <StyledButton
                  name="View Github"
                  url="https://github.com/eastend-street/jotdown"
                  target="_blank"
                />
              </ButtonWrapper>
            </Grid>
          </Grid>
        </ContentDescription>
      </ContentWorkDetail>
      <Footer />
    </>
  );
};

const ContentWorkDetail = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Title = styled(Typography)`
  && {
    font-family: inherit;
    text-align: center;
    font-weight: bold;
    :hover {
      opacity: 0.7;
    }
  }
`;

const ContentDescription = styled.div`
  background-color: #fcfcfc;
  padding-top: 10rem;
  padding-bottom: 5rem;
  @media (max-width: 800px) {
    padding-top: 7rem;
  }
  @media (max-width: 500px) {
    padding-top: 5rem;
  }
`;

const SiteDescription = styled(Typography)`
  && {
  }
`;

const WhatIsIt = styled(Typography)`
  && {
    font-weight: bold;
    margin: 3rem auto 1rem auto;
  }
`;

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
    transform: translateY(20%);
    /* margin: 0 auto -20% */
  }
`;

const WorkImage = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 62.5%;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Technology = styled(Typography)`
  && {
    margin: 5rem auto 1rem auto;
    font-weight: bold;
  }
`;

const StyledUl = styled.ul`
  margin: 2rem auto 5rem auto;
  padding-left: 1rem;
`;

const StyledLi = styled.li`
  margin-top: 1rem;
`;

const Category = styled.span`
  font-weight: bold;
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default WorkDetail;
