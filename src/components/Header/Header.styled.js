import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0 auto;
  max-width: 1184px;
`;
export const HeaderNav = styled.nav`
  @media (min-width: 900px) {
    margin-left: 20px;
  }
  @media (max-width: 730px) {
    display: none;
  }
`;

export const StyledNavigation = styled(NavLink)`
  position: relative;
  padding: 14px;
  font-size: 16px;
  line-height: 1.25;

  &.active {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
    color: #f4c550;
  }

  &:hover {
    background: #ffdc86;
    color: #121417;
    transform: scale(1.1);
    border-radius: 12px;
  }
`;
