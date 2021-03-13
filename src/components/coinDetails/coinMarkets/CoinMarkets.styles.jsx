import styled from 'styled-components';

const StyledCoinMarkets = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const StyledMarketStatistics = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
`;

const StyledMarketPriceChange = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: wrap;
`;

export { StyledCoinMarkets, StyledMarketStatistics, StyledMarketPriceChange };
