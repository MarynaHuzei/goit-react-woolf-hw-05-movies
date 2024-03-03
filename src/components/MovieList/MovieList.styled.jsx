import styled from 'styled-components';
import noImage from '../noImage/noImage.png';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
  margin-top: 25px;
  margin-bottom: 0;
  margin-left: 0px;
  margin-right: 580px;
  padding: 10px;
  color: black;
  width: 400px;

  box-shadow: 5px 5px 10px 0 #babecc, -5px -5px 10px 0 #fff;
  background: #ebecf0;
  border-radius: 10px;

  &:hover {
    box-shadow: inset 5px 5px 10px 0 #babecc, inset -5px -5px 10px 0 #fff;
    background: #ebecf0;
  }
`;

export const Item = styled.li`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  color: #616472;
  padding-left: 20px;

  &:hover {
    color: #dd1fb7;
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &:hover::after,
  &:focus::after {
    content: '';
    background-image: ${props =>
      props.cover
        ? `url('https://image.tmdb.org/t/p/w500/${props.cover}')`
        : `url(${noImage})`};

    background-size: cover;
    width: 400px;
    height: 560px;
    display: block;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 26%;
    left: 50%;
    z-index: 1;
  }
`;
