import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

const StyledPriceChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  min-height: 40vh;

  @media only screen and (min-width: 768px) {
    min-height: 50vh;
    width: 70vw;
  }

  @media only screen and (min-width: 1200px) {
    min-height: 70vh;
    width: 70vw;
  }
`;

const PriceChartSkeleton = () => (
  <>
    <Skeleton width="70vw" height="65vh" variant="rect" />
    <Skeleton width="30vw" height="5vh" variant="rect" />
  </>
);

export { StyledPriceChart, PriceChartSkeleton };
