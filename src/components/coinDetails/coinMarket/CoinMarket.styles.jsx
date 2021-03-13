import styled from 'styled-components';

const StyledCoinMarket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background: #fff;
  border-radius: 15px;
  flex: 1 1 auto;
  max-width: 25vw;
  margin: 2%;
  padding: 1%;
  height: 10vh;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyledMarketWithDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 60px;
`;

export { StyledCoinMarket, StyledMarketWithDate };
