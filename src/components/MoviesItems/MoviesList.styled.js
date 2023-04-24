import styled from 'styled-components';
import { NavLink } from 'react-router-dom';




export const MoviesBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;
export const MovieItem = styled.li`
  border: 2px solid black;
  border-radius: 5px;
  background-color: #5f9ea0;
  width: calc((100% - 20px) / 6);
`;
export const Link = styled(NavLink)`text-decoration:none;`;
export const MovieImg = styled.img`
  display: block;
  width: 100%; ;
`;

export const Title = styled.p`
  display: flex;
  color: black;
 font-weight: bold;
  flex-direction: column;
  margin: 0;
  padding: 5px;
`;
