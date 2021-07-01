import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardList = styled.div`
  border: 1px solid lightgrey;
  margin: auto;
  max-width: 80%;
  min-height: 60px;
  text-align: center;
`;

export const CenteredTextContainer = styled.div`
  margin: 0.5rem;
  text-align: center;
`;

export const Error = styled(CenteredTextContainer)`
  color: red;
`;

export const LinkedCard = styled(Link)`
  border: 1px solid navy;
  border-radius: 3px;
  color: inherit;
  line-height: 1.35;
  margin: 0.75rem;
  padding: 1rem 2rem 2rem;
  text-decoration: none;
  width: 33%;

  > span {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin: 0 0 1.5rem;
    padding: 1rem 0.5rem 2rem;
    width: 100%;
  }
`;

export const LinkedCardContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
