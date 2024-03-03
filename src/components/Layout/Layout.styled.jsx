import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 15px;
`;

export const Header = styled.header`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  width: 415px;
  height: 35px;
  box-shadow: 5px 5px 10px 0 #babecc, -5px -5px 10px 0 #fff;
  background: #ebecf0;
  border-radius: 50px;

  &:hover {
    box-shadow: inset 5px 5px 10px 0 #babecc, inset -5px -5px 10px 0 #fff;
    background: #ebecf0;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 22px;
  color: #616472;
  text-shadow: 1px 1px 0 0 #fff;
  margin-right: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #6578c2;
  }

  &.active {
    color: #dd1fb7;
  }
`;
