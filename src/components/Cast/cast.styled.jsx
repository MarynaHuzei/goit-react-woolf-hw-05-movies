import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 20px;
  gap: 40px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  color: #7b7c81;
  padding-left: 40px;
`;
