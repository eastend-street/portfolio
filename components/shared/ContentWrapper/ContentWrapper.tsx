import React, { FC } from 'react';
import styled from 'styled-components';

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ContentWrapper;

const Container = styled.div`
  max-width: var(--content-max-width);
  margin: 0 auto;
`;
