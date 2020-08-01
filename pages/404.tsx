import styled from "styled-components";

import { Grid } from "@material-ui/core";
import { LinkButton } from "components/shared/Button";

const NotFound: React.FC = () => (
  <Container container>
    <Grid item xs={11} sm={12}>
      <StyledH1>404 Page not found</StyledH1>
      <StyledH3>
        Sorry, I couldn't find the page...
        <br />
        Please click the button below to go back to the Homepage.
      </StyledH3>
      <ContentButton>
        <LinkButton name="Go to Homepage" href="/" target="_self" />
      </ContentButton>
    </Grid>
  </Container>
);

const Container = styled(Grid)`
  && {
    min-height: 90vh;
    justify-content: center;
    align-items: center;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;
`;

const StyledH3 = styled.h3`
  text-align: center;
`;

const ContentButton = styled.div`
  margin: 2rem;
  text-align: center;
`;

export default NotFound;
