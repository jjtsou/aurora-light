import styled from 'styled-components';

const StyledCoinMarkets = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const StyledCoinDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  margin: 0 auto;
  min-height: 30vh;
`;

const StyledCoinSummary = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 12vh;
`;

export {
  StyledCoinMarkets,
  StyledMarketStatistics,
  StyledMarketPriceChange,
  StyledCoinMarket,
  StyledMarketWithDate,
  StyledCoinDescription,
  StyledCoinSummary,
};
