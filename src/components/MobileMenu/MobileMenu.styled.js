import styled from 'styled-components';

export const WrapperMobileMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 18%;
  transform: translateX(-50%);
  top: 100%;
  z-index: 4;
  @media (min-width: 731px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0 auto;
  max-width: 1184px;
  background: transparent;
  stroke: #121417;
`;

export const MobileMenu = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;

  background: #ffdc86;
  border-radius: 14px;
`;
