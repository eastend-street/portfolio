import React, { Component } from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import WorkPhoto from "../../static/images/sample.png";
import StyledButton from "../StyledButton/StyledButton";

const ContentWorkDetail = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Title = styled(Typography)`
  && {
    text-align: center;
    color: inherit;
    font-weight: bold;
  }
`;

const Description = styled.div`
  background-color: #fcfcfc;
  padding-top: 5rem;
`;

const SiteDescription = styled(Typography)`
  && {
    /* margin: rem auto; */
  }
`;

const StyledWorkCard = styled(Card)`
  && {
    box-shadow: none;
    transform: translateY(20%)
    /* margin: 0 auto -20% */
  }
`;

const WorkImage = styled(CardMedia)`
  && {
    min-height: 30rem;
    object-fit: contain;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

class WorkDetail extends Component {
  render() {
    return (
      <ContentWorkDetail>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Title variant="h4">MemoMemo</Title>
          </Grid>
          <Grid item xs={8}>
            <StyledWorkCard>
              <CardActionArea target="_blank" href="https://www.google.com/">
                <WorkImage image={WorkPhoto} />
              </CardActionArea>
            </StyledWorkCard>
          </Grid>
        </Grid>
        <Description>
          <Grid container justify="center">
            <Grid item xs={7}>
              <Description>
                <SiteDescription variant="subtitle1">
                  MemoMemo is a bookmark and note service for developer. <br />
                  If you can solve a error, you can write a note that how to
                  solve the error, and save website that was used to help
                  resolve the error. Of course, even non-developers, you can use
                  MemoMemo as a bookmark and note managing web service.
                </SiteDescription>
                <ButtonWrapper>
                  <StyledButton
                    name="Visit Website"
                    url="https://www.google.com/"
                  />
                </ButtonWrapper>
              </Description>
            </Grid>
          </Grid>
        </Description>
      </ContentWorkDetail>
    );
  }
}

export default WorkDetail;
