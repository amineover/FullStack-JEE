import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const NoMatch = () => (
  <Wrapper>
    <h2 className="text-center">Cette Page N'existe Pas !</h2>
  </Wrapper>
)