import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Button = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 0.75rem;
`;

export const CardList = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 1rem auto;
  max-width: 80%;
  min-height: 60px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CardText = styled.p`
  margin: 0.25rem;
`;

export const CenteredTextContainer = styled.div`
  margin: 0.5rem;
  text-align: center;
`;

export const ColWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Error = styled(CenteredTextContainer)`
  color: red;
  text-transform: capitalize;
`;

export const LinkedCard = styled(Link)`
  border: 1px solid #555;
  border-radius: 4px;
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

export const MenuContainer = styled.nav`
  border-bottom: 1px solid #ddd;
  display: flex;
  margin: 0 2rem 2rem;
  padding-bottom: 1rem;
  > a {
    color: black;
    margin-right: .5rem;
    text-decoration: none;
  }
`;

export const RowWrapper = styled(ColWrapper)`
  flex-direction: row;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  width: 50%;
`;

export const WeatherCard = styled(LinkedCard)`
  background: white;
  border: 1px solid lightgrey;
  width: auto;

  @media (max-width: 768px) {
    margin: 0.75rem;
    padding: 1rem 2rem 2rem;
  }
`;
