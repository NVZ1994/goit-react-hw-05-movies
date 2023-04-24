import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderList = styled.ul`
  justify-content: center;
  background-color: rgb(82 31 173);
  border-radius: 15px;
  margin-top: 10px;

  display: flex;
`;
export const HeaderText = styled.li`
  margin: 15px;
`;

export const HeaderLink = styled(NavLink)`
  color: #eae051;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;
