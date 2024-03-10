import styled from 'styled-components';

export const WraperMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
  min-width: 1184px;

  @media (max-width: 1260px) {
    min-width: auto;
  }
`;

export const TitleMenu = styled.p`
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const OptLanguages = styled.li`
  font-weight: 500;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownSvg = styled.svg`
  position: absolute;
  top: 14px;
  right: 18px;
  cursor: pointer;
  stroke: #121417;
  fill: none;
`;

export const DropdownButton = styled.button`
  display: flex;

  font-weight: 500;
  font-size: 18px;
  height: 48px;
  border-radius: 14px;
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #ffffff;
  padding: 10px;

  min-width: ${props => props.width || '221px'};
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #121417;
  border-top: none;
  display: none;

  list-style: none;
  padding: 0;
  margin: 0;

  width: 100%;
  border-radius: 0 0 12px 12px;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #1214171a;
  }
`;

export const ResetButton = styled.button`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
  border: none;
  outline: none;
  margin-top: auto;
  background-color: #f4c550;
  padding: 4px 12px;
  transition: background 0.25s linear;
  &:hover,
  &:focus {
    background: #ffdc86;
  }
`;
