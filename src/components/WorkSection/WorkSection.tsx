import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Work as WorkType } from "types/works";

interface Props extends WorkType {
  odd: boolean;
}

const WorkSection: FC<Props> = ({
  TITLE,
  SUBTITLE,
  TECHNOLOGIES,
  IMAGE_PATH,
  INNER_URL,
  odd,
}) => {
  const detailUrl = process.env.PUBLIC_URL + INNER_URL;
  return (
    <Container odd={odd}>
      <SummaryArea>
        <div>
          <StyledLink to={detailUrl}>
            <Title>{TITLE}</Title>
          </StyledLink>
          <Subtitle>{`- ${SUBTITLE} -`}</Subtitle>
          <Technologies>
            {TECHNOLOGIES.map((name: string, index: number) => (
              <TechName key={index}>{name}</TechName>
            ))}
          </Technologies>
        </div>
      </SummaryArea>
      <ThumbnailArea>
        <StyledLink to={detailUrl}>
          <Thumbnail src={IMAGE_PATH} />
        </StyledLink>
      </ThumbnailArea>
    </Container>
  );
};

const Container = styled.div<Pick<Props, "odd">>`
  display: flex;
  margin: 5rem;
  flex-direction: ${(props) => props.odd && "row-reverse"};
  @media (max-width: 960px) {
    flex-direction: column;
    margin: 5rem 1rem;
  }
`;

const ThumbnailArea = styled.div`
  flex-basis: 50%;
  padding: 0 1rem;
  @media (max-width: 960px) {
    padding: 0 1rem;
  }
`;

const SummaryArea = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    margin-bottom: 1rem;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 900;
  margin: 0;
  :hover {
    opacity: 0.7;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  margin: 0;
  opacity: 0.8;
`;

const Technologies = styled.div`
  text-align: center;
  margin-top: 2rem;
  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`;

const TechName = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  opacity: 0.8;
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4e4e4e;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default WorkSection;
